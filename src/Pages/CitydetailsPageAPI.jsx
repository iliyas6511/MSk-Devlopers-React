import React from 'react'
import Navbar from '../Components/Navbar'
import Faq from '../Components/Faq'
import EnquiryForm from '../Components/Enquiry'
import CityDetailsAPI from '../Components/CityDetailsAPI'

const CitydetailsPageAPI = () => {
  return (
    <>
      <CityDetailsAPI />
      <EnquiryForm />
    </>
  )
}

export default CitydetailsPageAPI
