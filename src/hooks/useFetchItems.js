import { useEffect, useState } from 'react'
import axios from 'axios'
import md5 from 'md5'

export const useFetchItems = (page) => {
    // URL API храниться в файле .env
    const API_URL = process.env.REACT_APP_API_URL
    const [data, setData] = useState(null)
    // Состояние spinner
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        // Пароль для авторизации для API храниться в  .env
        const password = process.env.REACT_APP_API_PASSWORD
        // Формирую timestamp
        const timestamp = new Date()
            .toISOString()
            .slice(0, 10)
            .replace(/-/g, '')
        const authString = md5(`${password}_${timestamp}`)

        // Запрос на получения списка идентификаторов с API
        const fetchData = async () => {
            // Запуск spinner
            setIsLoading(true)

            try {
                const idsRes = await axios({
                    method: 'POST',
                    url: API_URL,
                    headers: { 'X-Auth': authString },
                    data: {
                        action: 'get_ids',
                        params: { offset: (page - 1) * 50, limit: 50 },
                    },
                })

                const ids = idsRes.data.result

                // Убираю дубли
                const uniqueIds = [...new Set(ids)]

                // Повторный запрос для получения уже списка товаров со всеми характеристиками
                const itemsRes = await axios({
                    method: 'POST',
                    url: API_URL,
                    headers: { 'X-Auth': authString },
                    data: {
                        action: 'get_items',
                        params: { ids: uniqueIds },
                    },
                })

                setData(itemsRes.data.result)

                // Выключаю spinner
                setIsLoading(false)
            } catch (error) {
                console.error('Ошибка получения данных с сервера', error)
                if (
                    error.response &&
                    error.response.data &&
                    error.response.data.error
                ) {
                    console.error('Код ошибки:', error.response.data.error)
                }
                fetchData()
            }
        }

        fetchData()
    }, [page])

    return { data, isLoading }
}
