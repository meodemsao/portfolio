import React from 'react'
import {Route} from 'react-router-dom'
import { RouteTransition, presets } from 'react-router-transition'

import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Footer from '../components/Footer'

const HomeLayout = ({component: Component, ...rest}) => {
  return (
    <Route exact {...rest} render={matchProps => (
      <RouteTransition
        {...presets.fade}
        pathname={matchProps.location.pathname}>
        <Navigation />
        <Header />
        <Component {...matchProps} />
        <Footer />
      </RouteTransition>
    )} />

  )
}

export default HomeLayout
