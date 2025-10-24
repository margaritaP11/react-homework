import axios from 'axios'
import React, { useEffect, useState } from 'react'
import banner from '../../assets/Banner.png'
import styles from './HomePage.module.css'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { useCart } from '../../context/CartProvider'

export const HomePage = () => {
  const [products, setProducts] = useState(null)
  const { cartItems } = useCart()

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        'https://68f1dcadb36f9750deea79b1.mockapi.io/productData'
      )
      setProducts(response.data)
    } catch (error) {
      console.log('Ошибка при получении товаров ', error)
    }
  }
  useEffect(() => {
    fetchProduct()
  }, [])
  useEffect(() => {
    console.log(cartItems)
  }, [cartItems])

  return (
    <div className={`container ${styles.homeWrapper}`}>
      <img style={{ margin: '0 auto' }} src={banner} alt="" />

      <h2>Товары</h2>
      <div style={{ width: '100%', borderBottom: '1px solid lightgray' }}></div>
      <div className={styles.products}>
        {products ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h1>Загрузка...</h1>
        )}
      </div>
    </div>
  )
}
