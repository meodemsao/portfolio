import React, {Component} from 'react'
import Scroll from 'react-scroll'
import Portfolios from '../components/Portfolios'
import About from '../components/About'
import Contact from '../components/Contact'

const Element = Scroll.Element

export default class Home extends Component {
  render () {
    return (
      <div>
        <Element name='porfolios'>
          <Portfolios />
        </Element>
        <Element name='about'>
          <About />
        </Element>
        <Element name='contact'>
          <Contact />
        </Element>
      </div>
    )
  }
}
