import { useState } from 'react'
import axios from 'axios'
import md5 from 'md5'

export const useFetchFilteredItems = (
    brand,
    price,
    product,
    setFilteredItems
) => {
    const [data, setData] = useState(null)

    const API_URL = 'http://api.valantis.store:40000/'
    const password = 'Valantis'
    const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '')
    const authString = md5(`${password}_${timestamp}`)

    const fetchFilterData = async () => {
        try {
            let params = {}
            if (brand) params.brand = brand
            if (price) params.price = Number(price)
            if (product) params.product = product

            const requestData = {
                action: 'filter',
                params,
            }

            const idsRes = await axios({
                method: 'POST',
                url: API_URL,
                headers: { 'X-Auth': authString },
                data: requestData,
            })

            const ids = idsRes.data.result
            const uniqueIds = [...new Set(ids)]

            const itemsRequestData = {
                action: 'get_items',
                params: { ids: uniqueIds },
            }

            const itemsRes = await axios({
                method: 'POST',
                url: API_URL,
                headers: { 'X-Auth': authString },
                data: itemsRequestData,
            })

            setData(itemsRes.data.result)
            setFilteredItems(itemsRes.data.result)
        } catch (error) {
            console.error('Ошибка получения данных с сервера', error)
            if (
                error.response &&
                error.response.data &&
                error.response.data.error
            ) {
                console.error('Код ошибки:', error.response.data.error)
            }
        }
    }

    return { data, fetchFilterData }
}
