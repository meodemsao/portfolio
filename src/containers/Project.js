import React, {Component} from 'react'
import ProjectComponent from '../components/Project'

export default class Project extends Component {
  render () {
    return (
      <ProjectComponent {...this.props} />
    )
  }
}
