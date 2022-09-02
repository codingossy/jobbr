import React from 'react'
import Articles from '../sections/Articles'
import Cta from '../sections/Cta'
import Events from '../sections/Events'
import Footer from '../sections/Footer'
import Home from '../sections/Home'
import People from '../sections/People'
import WhatWeDo from '../sections/WhatWeDo'
import WhoWeAre from '../sections/WhoWeAre'
import Work from '../sections/Work'

const Control = () => {
  return (
    <div>
        <Home />
        <WhoWeAre />
        <WhatWeDo />
        <Work />
        <People />
        <Articles />
        <Events />
        <Cta />
        <Footer />
    </div>
  )
}

export default Control