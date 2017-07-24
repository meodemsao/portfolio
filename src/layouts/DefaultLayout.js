import React from 'react'
import {Route} from 'react-router-dom'
import { RouteTransition, presets } from 'react-router-transition'

const DefaultLayout = ({component: Component, ...rest}) => {
  return (
    <Route exact {...rest} render={matchProps => {
      return (
        <RouteTransition
          {...presets.pop}
          pathname={matchProps.location.pathname}>
          <Component {...matchProps} />
        </RouteTransition>)
    }} />
  )
}

export default DefaultLayout
