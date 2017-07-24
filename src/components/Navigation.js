import React from 'react'
import Scroll from 'react-scroll'

const Link = Scroll.Link
const scroll = Scroll.animateScroll

export default class Navigation extends React.Component {
  scrollToTop () {
    scroll.scrollToTop()
  }

  render () {
    return (
      <nav id='mainNav' className='navbar navbar-default navbar-fixed-top navbar-custom'>
        <div className='container'>
          <div className='navbar-header page-scroll'>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
              <span className='sr-only'>Toggle navigation</span> Menu <i className='fa fa-bars' />
            </button>
            <a className='navbar-brand' href='#page-top'>BANGVC</a>
          </div>
          <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
            <ul className='nav navbar-nav navbar-right'>
              <li className='hidden'>
                <a onClick={this.scrollToTop}>Home</a>
              </li>
              <li className='page-scroll'>
                <Link
                  to='portfolio'
                  activeClass='active'
                  smooth
                  duration={200}
                  delay={50}
                  isDynamic
                  ignoreCancelEvents={false}
                  >Portfolio</Link>
              </li>
              <li className='page-scroll'>
                <Link to='about'
                  activeClass='active'
                  smooth
                  duration={200}
                  delay={50}
                  isDynamic
                  ignoreCancelEvents={false}
                >About</Link>
              </li>
              <li className='page-scroll'>
                <Link to='contact'
                  activeClass='active'
                  smooth
                  duration={200}
                  delay={50}
                  isDynamic
                  ignoreCancelEvents={false}
                >Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
