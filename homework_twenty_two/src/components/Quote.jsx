import { useEffect } from 'react'
import styles from './Quote.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuote } from '../redux/quoteSlice'

const Quote = () => {
  const dispatch = useDispatch()
  const { quote, author, status, error } = useSelector((state) => state.quote)

  useEffect(() => {
    dispatch(fetchQuote())
  }, [dispatch])

  const handleNewQuote = () => {
    dispatch(fetchQuote())
  }

  return (
    <div className={styles.container}>
      <h2>Random Quote</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <>
          <p className={styles.text}>"{quote}"</p>
          <p className={styles.author}>— {author}</p>
        </>
      )}
      <button className={styles.button} onClick={handleNewQuote}>
        Get New Quote
      </button>
    </div>
  )
}
export default Quote
