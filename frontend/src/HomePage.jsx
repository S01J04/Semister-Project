import React from 'react'
import Header from "./components/Header";
import Body_search from "./components/Body_search"
import Discoverbillboards from "./components/Discoverbillborads"
import Vediopage from "./components/vediopage"
import Contactus from "./components/Contactus";
import Typeofbillboards from "./components/typeofbillboards";
import Billboardrequest from "./components/Billboardrequest";
import Province from "./components/Province";
import Ourclients from "./components/Ourclients";
import UserReview from "./components/UserReview";
const HomePage = () => {
  return (
    <>
      <Body_search/>
      <Discoverbillboards/>
      <Vediopage/>
      <Contactus/>
      <Typeofbillboards/>
      <Billboardrequest/>
      <Province/>
      <UserReview/>
      <Ourclients/>

    </>
  )
}

export default HomePage
