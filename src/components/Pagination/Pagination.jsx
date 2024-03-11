import styles from './Pagination.module.css'

const Pagination = ({ page, setPage }) => {
    const handlePageChange = (direction) => {
        setPage((prevPage) => prevPage + direction)
    }

    return (
        <div className={styles.buttonWrapper}>
            <button
                className={styles.btn}
                onClick={() => handlePageChange(-1)}
                disabled={page === 1}
            >
                Назад
            </button>
            <p>Страница {page}</p>
            <button className={styles.btn} onClick={() => handlePageChange(1)}>
                Вперед
            </button>
        </div>
    )
}

export default Pagination
