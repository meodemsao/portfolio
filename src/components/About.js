import React from 'react'
import Scroll from 'react-scroll'

const Link = Scroll.Link

const About = () => (
  <section className='success' id='about'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 text-center'>
          <h2>About</h2>
          <hr className='star-light' />
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-4 col-lg-offset-2'>
          <p>I have 10 years of experience developing web or mobile software, with c #, java, python, javascript, objective-c programming languages</p>
        </div>
        <div className='col-lg-4'>
          <p>I have very good experience in optimizing distributed systems and large traffic. If you need to build good product. Please contact me!</p>
        </div>
        <div className='col-lg-8 col-lg-offset-2 text-center'>
          <Link to='contact'
            className='btn btn-lg btn-outline'
            activeClass='active'
            smooth
            duration={200}
            delay={50}
            isDynamic
            ignoreCancelEvents={false}>
            <i className='fa fa-download' /> Let's build something together!
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default About
