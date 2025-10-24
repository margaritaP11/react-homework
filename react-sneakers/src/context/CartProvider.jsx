import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const fetchCartItems = async () => {
    try {
      const response = await axios.get(
        'https://68f1dcadb36f9750deea79b1.mockapi.io/basket'
      )
      setCartItems(response.data)
    } catch (error) {
      console.error('Ошибка при получении списка товаров в корзине', error)
    }
  }

  const addToCart = async (product) => {
    try {
      await axios.post(
        'https://68f1dcadb36f9750deea79b1.mockapi.io/basket',
        product
      )
      fetchCartItems()
    } catch (error) {
      console.error('Произошла ошибка при добавлении в корзину', error)
    }
  }
  const deleteFromCart = async (productId) => {
    try {
      await axios.delete(
        `https://68f1dcadb36f9750deea79b1.mockapi.io/basket/${productId}`
      )
      await fetchCartItems()
    } catch (error) {
      console.error('Произошла ошибка при удалении товара из корзины', error)
    }
  }

  useEffect(() => {
    fetchCartItems()
  }, [])

  return (
    <CartContext.Provider value={{ addToCart, deleteFromCart, cartItems }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
