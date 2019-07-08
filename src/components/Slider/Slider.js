import React from 'react'
import {SliderData} from './SliderData'
import styles from './Slider.module.scss'
import Arrows from './Arrows.js'
import Dots from './Dots.js'

class Slider extends React.Component {
  intervalId

  constructor(props) {
    super(props)

    this.state = {
      currentSlideIndex: 0,
    }

    this.nextSlide = this.nextSlide.bind(this)
    this.prevSlide = this.prevSlide.bind(this)
    this.handleDotsClick = this.handleDotsClick.bind(Dots)
  }

  componentDidMount() {
    this.runSlideShow()

    document.addEventListener('keydown', ({key}) => this.handleKeydown(key))
  }

  runSlideShow() {
    this.intervalId = setInterval(
      this.nextSlide,
      SliderData[this.state.currentSlideIndex].displayTime,
    )
  }

  nextSlide() {
    this.setState({
      currentSlideIndex: (this.state.currentSlideIndex + 1) % SliderData.length,
    })
  }

  prevSlide() {
    const currentSlideIndex =
      0 === this.state.currentSlideIndex
        ? SliderData.length - 1
        : this.state.currentSlideIndex - 1

    this.setState({currentSlideIndex})
  }

  handleDotsClick(index) {
    console.log(index)
  }

  handleKeydown(key) {
    switch (key) {
      case 'ArrowLeft':
        this.prevSlide()
        break

      case 'ArrowRight':
        this.nextSlide()
        break
    }
  }

  render() {
    const sliderNumber = {
      ...this.state,
    }
    return (
      <section className={styles.slider}>
        <h1 className={styles.slider__title} id="sliderMainTitle">
          {SliderData[sliderNumber.currentSlideIndex].mainTitle}
        </h1>
        <h2 className={styles.slider__subtitle} id="sliderSubTitle">
          {SliderData[sliderNumber.currentSlideIndex].subTitle}
        </h2>
        <img
          className={styles.slider__picture}
          id="sliderPicture"
          src={SliderData[sliderNumber.currentSlideIndex].img}
          alt=""
        />
        <Dots onClick={this.handleDotsClick} count={SliderData.length} />

        <Arrows nextSlide={this.nextSlide} previousSlide={this.prevSlide} />
      </section>
    )
  }
}

export default Slider
