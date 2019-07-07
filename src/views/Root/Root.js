import React from "../../../node_modules/react";
import Navigation from '../../components/Navigation/Navigation';
import Slider from '../../components/Slider/Slider';
import Offer from '../../components/Offer/Offer';
import Testimonials from '../../components/Testimonials/Testimonials';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';
import '../../index.css'

class Root extends React.Component {
render() {
    return(
<>

    <Slider></Slider>
    <Navigation></Navigation>
    <Offer></Offer>
    <Testimonials></Testimonials>
    <ContactForm></ContactForm>
    <Footer></Footer>
    
</>
    )
}
}

export default Root;
