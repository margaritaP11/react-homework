import React from 'react'
import Card from '../Card/Card'
import styles from './CardList.module.css'

import Apple from '../../assets/Apple.svg'

import Google from '../../assets/Google.svg'
import X from '../../assets/X.svg'

const CardList = () => {
  const cardsData = [{ iconSet: [Apple, Google, X] }]
  return (
    <div className={styles.cardList}>
      {cardsData.map((card, index) => (
        <Card key={index} iconSet={card.iconSet} />
      ))}
    </div>
  )
}
export default CardList
