import React from 'react'
import styles from './Navigation.module.scss'

const Navigation = () => (
  <>
    <nav className={styles.mainMenu}>
      <ul className={styles.mainMenu__wrapper}>
        <li className={styles.mainMenu__item}>O mnie</li>
        <li className={styles.mainMenu__item}>Oferta szkoleniowa</li>
        <li className={styles.mainMenu__item}>Kogo szkoliłem</li>
        <li className={styles.mainMenu__item}>Referencje</li>
        <li className={styles.mainMenu__item}>Kontakt</li>
      </ul>
      <br className={styles.br} />
    </nav>
  </>
)

export default Navigation
