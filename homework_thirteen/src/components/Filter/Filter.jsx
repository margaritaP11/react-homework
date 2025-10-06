import React from 'react'

import { setFilter } from '../../redux/actions'
import styles from './Filter.module.css'
import { useDispatch } from 'react-redux'

const Filter = () => {
  const dispatch = useDispatch()
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Enter your name"
      onChange={(e) => dispatch(setFilter(e.target.value))}
    />
  )
}

export default Filter
