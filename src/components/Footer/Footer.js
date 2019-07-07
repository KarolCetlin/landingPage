import React from 'react'
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom'
import styles from './Footer.module.scss'

const Footer = () => (
  <BrowserRouter>
    <nav className={styles.footerMenu}>
      <Switch>
        <ul className={styles.footerMenu__wrapper}>
          <li className={styles.navItemLink}>
            <NavLink
              exact
              activeClassName={styles.navItemLinkActive}
              className={styles.navItemLink}
              to="/"
            >
              {' '}
              Główna
            </NavLink>
          </li>

          <li className={styles.footerMenu__item}>
            <NavLink
              exact
              activeClassName={styles.navItemLinkActive}
              className={styles.navItemLink}
              to="/polityka-prywatnosci"
            >
              {' '}
              Polityka prywatności
            </NavLink>
          </li>
          <li className={styles.footerMenu__item}>
            <NavLink
              exact
              activeClassName={styles.navItemLinkActive}
              className={styles.navItemLink}
              to="/dla-firm"
            >
              {' '}
              Oferta dla firm
            </NavLink>
          </li>
        </ul>
      </Switch>
    </nav>
  </BrowserRouter>
)

export default Footer
