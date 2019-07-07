import React from 'react'
import styles from './Slider.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-solid-svg-icons'
import {SliderData} from './SliderData'
import Slider from './Slider'

class Dots extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dotIndex: 0,
    }

    // this.dotsClick = this.dotsClick.bind(this)
  }

  // dotsClick(index) {
  //   console.log(index)
  //   this.setState({
  //     dotIndex: index,
  //   })
  // }

  render() {
    // const props = {
    //   ...this.props,
    // }

    /* onClick={() => this.dotsClick(index)} */

    return (
      <>
        <section className={styles.slider__dotsPosition}>
          {SliderData.map((item, index) => (
            <FontAwesomeIcon
              className={styles.slider__dots_item}
              icon={faCircle}
              key={index}
            />
          ))}
        </section>
      </>
    )
  }
}

export default Dots
