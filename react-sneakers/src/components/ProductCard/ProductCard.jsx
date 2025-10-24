import React, { useEffect } from 'react'
import plusButton from '../../assets/plus-disabled.svg'
import { useCart } from '../../context/CartProvider'
import styles from './ProductCart.module.css'

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <p className={styles.name}>{product.name}</p>
      <div className={styles.priceBlock}>
        <div>
          <p className={styles.priceText}>цена:</p>
          <p className={styles.priceValue}>{product.price} €</p>
        </div>
        <button onClick={() => addToCart(product)} className={styles.button}>
          <img src={plusButton} alt="add to cart" />
        </button>
      </div>
    </div>
  )
}
