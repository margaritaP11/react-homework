import React from 'react'
import styles from './CityCard.module.css'

const CityCard = ({ city }) => {
  return (
    <div className={styles.card}>
      <h2>{city?.name}</h2>
      <img className={styles.img} src={city?.imageUrl} alt={city?.name} />
      <p>{city?.description}</p>
      <ul>
        {city?.facts?.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  )
}

export default CityCard
