import { useState } from 'react'
import { useFetchItems } from '../../hooks/useFetchItems'
import { ImSpinner2 } from 'react-icons/im'
import Pagination from '../Pagination/Pagination'
import Item from '../Item/Item'
import Filter from '../Filter/Filter'
import styles from './ItemList.module.css'

const ItemList = ({ setFilteredItems, filteredItems }) => {
    const [page, setPage] = useState(1)
    const { data, isLoading } = useFetchItems(page)
    const itemsData = filteredItems || data

    return (
        <div>
            <Filter setFilteredItems={setFilteredItems} />

            <Pagination page={page} setPage={setPage} />

            <div className={styles.container}>
                {isLoading ? (
                    <ImSpinner2 className={styles.spinner} />
                ) : (
                    itemsData &&
                    itemsData.map((item, index) => (
                        <Item key={index} item={item} />
                    ))
                )}
            </div>
        </div>
    )
}

export default ItemList
