import React from 'react'
import DifficultCustomer from './DifficultCustomer.js'
import MentalResistance from './MentalResistance.js'
import ConsultativeSales from './ConsultativeSales.js'
import ManagerialCommunication from './ManagerialCommunication.js'
import TeamCommunication from './TeamCommunication.js'

class Offer extends React.Component {
  render() {
    return (
      <>
        <DifficultCustomer />
        <MentalResistance />
        <ConsultativeSales />
        <ManagerialCommunication />
        <TeamCommunication />
      </>
    )
  }
}

export default Offer
