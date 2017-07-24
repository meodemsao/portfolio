import React, { Component } from 'react'

import DefaultLayout from './layouts/DefaultLayout'
import HomeLayout from './layouts/HomeLayout'
import Home from './containers/Home'
import Project from './containers/Project'

export default class App extends Component {
  render () {
    return (
      <div>
        <HomeLayout path='/' component={Home} />
        <DefaultLayout path='/project/:id' component={Project} />
      </div>
    )
  }
}
