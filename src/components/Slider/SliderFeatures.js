import React from 'react';
import {Slider} from './Slider';
import ReactDOM from 'react-dom';

export class SliderFeatures extends React.Component{

constructor(props){
super(props);
this.state = {initialSlide: 0}
}

render(){
    return( 
        <>
          <h1 className={styles.slider__title} id="sliderMainTitle">{SliderData[this.state.currentSlide].mainTitle}</h1>
          <h2 className={styles.slider__subtitle} id="sliderSubTitle">{SliderData[this.state.currentSlide].subTitle}</h2>
          <img className={styles.slider__picture} id="sliderPicture" src={SliderData[this.state.currentSlide].img} alt="" /> 
        </>
    )
}



}







// ReactDOM.render(
// <SliderFeatures/>,
// document.getElementById('root')
// );


setInterval(this.SliderFeatures.changeSlide, 1000);
console.log(SliderSetting.currentSlideNumber)


export default SliderFeatures

