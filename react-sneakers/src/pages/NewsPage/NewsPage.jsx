import React, { useState } from 'react'
import styles from './ContactSection.module.css'
import snapchat from '../../assets/snap.svg'
import x from '../../assets/x.svg'
import faceboock from '../../assets/facebook-painted.svg'

export const NewsPage = () => {
  const [formDate, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  })
  const handleChange = (e) => {
    setFormData({ ...formDate, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    console.log('Oтправка формы:', formDate)
  }
  return (
    <div className={styles.container}>
      <h2>Контакты</h2>
      <div className={styles.linie}></div>
      <ul>
        <li>8 800 000 00 00</li>
        <li>emailexample@email.com</li>
      </ul>
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.flexInput}>
            {' '}
            <input
              type="email"
              name="email"
              placeholder="Ваш email"
              value={formDate.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={formDate.name}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Введите сообщение"
            value={formDate.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Отправить</button>
        </form>
        <div className={styles.socialBlock}>
          <h3>Найдите нас:</h3>
          <div className={styles.icons}>
            <img src={snapchat} alt="Snapchat" />
            <img src={faceboock} alt="Facebook" />
            <img src={x} alt="X" />
          </div>
        </div>
      </div>
    </div>
  )
}
