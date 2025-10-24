import cartImage from '../../assets/trash.svg'
import { useCart } from '../../context/CartProvider'
import styles from './CartCard.module.css'
export const CartCard = ({ product }) => {
  const { deleteFromCart } = useCart()

  return (
    <div className={styles.card}>
      <img src={product.image} alt="Товар" className={styles.image} />
      <p className={styles.name}>{product.name}</p>
      <p className={styles.price}>{product.price} €</p>
      <button
        onClick={() => deleteFromCart(product.id)}
        className={styles.button}
      >
        <img src={cartImage} alt="Удалить" />
      </button>
    </div>
  )
}
