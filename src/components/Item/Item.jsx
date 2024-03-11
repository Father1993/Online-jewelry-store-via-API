import img from './diamonds.jpg'
import styles from './Item.module.css'

const Item = ({ item }) => {
    return (
        <div className={styles.card}>
            <img className={styles.img} src={img} alt="diamonds" />
            <h2>{item.product}</h2>
            <p>Цена: {item.price} ₽</p>
            <p>Бренд: {item.brand || 'н/д'}</p>
            <p className={styles.id}>ID: {item.id}</p>
        </div>
    )
}

export default Item
