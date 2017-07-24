import React from 'react'
import Scroll from 'react-scroll'

const scroll = Scroll.animateScroll

export default class Portfolios extends React.Component {
  scrollToTop () {
    scroll.scrollToTop()
  }

  render () {
    return (
      <header>
        <div className='container' id='maincontent'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='profile-img'>
                <img className='img-responsive' src={process.env.PUBLIC_URL + '/images/bangvc.jpg'} alt='' />
              </div>
              <div className='intro-text'>
                <a onClick={this.scrollToTop}><h1 className='name'>BANGVC</h1></a>
                <hr className='star-light' />
                <span className='skills'>Full stack developer</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
