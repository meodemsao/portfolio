import React from 'react'
import Scroll from 'react-scroll'

const Link = Scroll.Link

const Footer = () => (
  <footer className='text-center'>
    <div className='footer-above'>
      <div className='container'>
        <div className='row'>
          <div className='footer-col col-md-4'>
            <h3>Contact Infomation</h3>
            <p>Email <a href='mailto:congbang85@gmail.com'>congbang85@gmail.com</a></p>
            <p>Tel <a href='tel:+8498775558'>+8498775558</a></p>
            <p>Skype <a href='skype:congbang85@gmail.com'>congbang85@gmail.com</a></p>
          </div>
          <div className='footer-col col-md-4'>
            <h3>Around the Web</h3>
            <ul className='list-inline'>
              <li>
                <a href='https://www.facebook.com/quantusung' className='btn-social btn-outline'><span className='sr-only'>Facebook</span><i className='fa fa-fw fa-facebook' /></a>
              </li>
              <li>
                <a href='#' className='btn-social btn-outline'><span className='sr-only'>Google Plus</span><i className='fa fa-fw fa-google-plus' /></a>
              </li>
              <li>
                <a href='#' className='btn-social btn-outline'><span className='sr-only'>Twitter</span><i className='fa fa-fw fa-twitter' /></a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/bang-vu-35294363' className='btn-social btn-outline'><span className='sr-only'>Linked In</span><i className='fa fa-fw fa-linkedin' /></a>
              </li>
              <li>
                <a href='#' className='btn-social btn-outline'><span className='sr-only'>Dribble</span><i className='fa fa-fw fa-dribbble' /></a>
              </li>
            </ul>
          </div>
          <div className='footer-col col-md-4'>
            <h3>HEAR ME</h3>
            <p>Full stack developer
                <Link to='contact'
                  className=''
                  smooth
                  duration={200}
                  delay={50}
                  isDynamic
                  ignoreCancelEvents={false}>
                  Hear me now <i className='fa fa-long-arrow-right' />
                </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className='footer-below'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>Copyright &copy; <a href='/project'>bangvc</a> 2017</div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
