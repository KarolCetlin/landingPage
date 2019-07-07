import React from 'react'
import styles from './Slider.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Arrows = props => {
  return (
    <>
      <section className={styles.slider__arrowPosition}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={styles.slider__arrow__previous}
          onClick={props.previousSlide}
        />

        <FontAwesomeIcon
          className={styles.slider__arrow__next}
          icon={faArrowRight}
          onClick={props.nextSlide}
        />
      </section>
    </>
  )
}

export default Arrows
