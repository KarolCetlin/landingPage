import React from 'react'
import styles from './Slider.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-solid-svg-icons'

const Dots = ({onClick, count}) => (
  <section className={styles.slider__dotsPosition}>
    {Array(count)
      .fill(null)
      .map((item, index) => (
        <FontAwesomeIcon
          className={styles.slider__dots_item}
          icon={faCircle}
          key={index}
          onClick={onClick && (() => onClick(index))}
        />
      ))}
  </section>
)

export default Dots
