import styles from './Footer.module.css'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/inst.svg'
import facebook from '../../assets/facebook.svg'

export const Footer = () => {
  return (
    <footer className={`container ${styles.footer}`}>
      <div className={styles.about}>
        <h3 className={styles.head}>Контакты</h3>
        <p className={styles.paragraph}>8 800 000 00 00</p>
        <p className={styles.paragraph}>emailexample@email.com</p>
        <p
          style={{ marginTop: 93, fontSize: '1.2em' }}
          className={styles.paragraph}
        >
          2024 Сникер-магазин. Все права защищены
        </p>
      </div>
      <div className={styles.info}>
        <div className={styles.icons}>
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={instagram} alt="instagram" />
        </div>
        <input
          className={styles.mailInput}
          type="text"
          name=""
          id=""
          placeholder="Введте свой email"
        />
      </div>
    </footer>
  )
}
