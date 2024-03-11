import { useState } from 'react'
import { useFetchFilteredItems } from '../../hooks/useFetchFilteredItems'
import styles from './Filter.module.css'

const Filter = ({ setFilteredItems }) => {
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')
    const [product, setProduct] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const { fetchFilterData } = useFetchFilteredItems(
        brand,
        price,
        product,
        setFilteredItems
    )

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        await fetchFilterData()
        setIsLoading(false)
    }

    return (
        <form className={styles.filterFormWrapper} onSubmit={handleSubmit}>
            <label>
                Бренд:
                <input
                    placeholder="Поиск по названию бренда"
                    type="text"
                    name="brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />
            </label>
            <label>
                Цена:
                <input
                    placeholder="Поиск по цене"
                    type="text"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </label>
            <label>
                Название товара:
                <input
                    placeholder="Поиск по названию товара"
                    type="text"
                    name="product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                />
            </label>

            <button type="submit">
                {isLoading ? 'Загрузка...' : 'Применить фильтр'}
            </button>
        </form>
    )
}

export default Filter
