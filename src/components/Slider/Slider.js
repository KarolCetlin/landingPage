import React from 'react'
import {SliderData} from './SliderData'
import styles from './Slider.module.scss'
import Arrows from './Arrows.js'
import Dots from './Dots.js'

class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      initialSlideNumber: 0,
    }

    this.runSlideShow = this.runSlideShow.bind(this)
    this.nextSlide = this.nextSlide.bind(this)
    this.previousSlide = this.previousSlide.bind(this)
    this.dotsClick = this.dotsClick.bind(Dots)
  }

  componentDidMount() {
    this.runSlideShow()

    document.addEventListener('keydown', this.keyboardSupport)
  }

  runSlideShow() {
    let intervalId = setInterval(
      this.nextSlide,
      SliderData[this.state.initialSlideNumber].displayTime,
    )

    this.setState({
      intervalId,
    })
  }

  nextSlide() {
    this.setState({
      initialSlideNumber:
        (this.state.initialSlideNumber + 1) % SliderData.length,
    })
  }

  previousSlide() {
    if (this.state.initialSlideNumber === 0) {
      this.setState({
        initialSlideNumber: (this.state.initialSlideNumber = SliderData.length),
      })
    }

    this.setState({
      initialSlideNumber:
        (this.state.initialSlideNumber - 1) % SliderData.length,
    })
  }

  dotsClick() {
    console.log('asd')
  }

  // keyboardSupport(event){
  //   event.keyCode === 37
  //     ? this.previousSlide()
  //     : event.keyCode === 39 ? this.nextSlide() : null;
  // }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyboardSupport)
  }

  render() {
    const sliderNumber = {
      ...this.state,
    }
    return (
      <>
        <section className={styles.slider}>
          <h1 className={styles.slider__title} id="sliderMainTitle">
            {SliderData[sliderNumber.initialSlideNumber].mainTitle}
          </h1>
          <h2 className={styles.slider__subtitle} id="sliderSubTitle">
            {SliderData[sliderNumber.initialSlideNumber].subTitle}
          </h2>
          <img
            className={styles.slider__picture}
            id="sliderPicture"
            src={SliderData[sliderNumber.initialSlideNumber].img}
            alt=""
          />
          <Dots onClick={this.dotsClick} />

          <Arrows
            nextSlide={this.nextSlide}
            previousSlide={this.previousSlide}
          />
        </section>
      </>
    )
  }
}

export default Slider
