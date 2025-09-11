import React from 'react'
import styles from './Card.module.css'
import Header from '../Header/Header'

const Card = ({ iconSet }) => {
  return (
    <div className={styles.card}>
      <Header />

      <p className={styles.text}>LIFE IS WASTED ON THE LIVING</p>

      <a className={styles.link}> Sign In</a>
      <a className={styles.link}> with</a>

      <div className={styles.iconWrapper}>
        <div className={styles.icons}>
          {iconSet.map((iconSrc, index) => (
            <div key={index} className={styles.icon}>
              <button
                key={index}
                className={styles.icon}
                onClick={() => console.log(`Clicked icon $ {index}`)}
              >
                <img src={iconSrc} alt={`icon-${index}`} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
