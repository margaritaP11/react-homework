import React from 'react'
import { useCart } from '../../context/CartProvider'
import styles from './CartPage.module.css'
import { CartCard } from '../../components/CartCard/CartCard'

export const CartPage = () => {
  const { cartItems } = useCart()
  const fullPrice = cartItems.reduce((acc, currentValue) => {
    return acc + currentValue.price
  }, 0)
  console.log(fullPrice)
  return (
    <div>
      <h1 className={styles.title}>Корзина</h1>
      <div className={styles.linie}></div>
      <div className={styles.cartLogic}>
        <div className={styles.cartList}>
          {cartItems.length > 0 &&
            cartItems.map((product) => (
              <CartCard key={product.id} product={product} />
            ))}
        </div>

        <div className={styles.cartSummary}>
          <h3>Итого</h3>
          <div className={styles.summaryList}>
            {cartItems.map((item) => (
              <p key={item.id}>
                {item.name} — {item.price} €
              </p>
            ))}
          </div>
          <hr />
          <p className={styles.total}>Всего: {fullPrice} €</p>
        </div>
      </div>
    </div>
  )
}
