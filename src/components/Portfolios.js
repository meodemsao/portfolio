import React from 'react'
import { Link } from 'react-router-dom'
import {projects} from '../data'

export default class Portfolios extends React.Component {
  render () {
    return (
      <section id='portfolio'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2>Portfolio</h2>
              <hr className='star-primary' />
            </div>
          </div>
          { projects.map((project) =>
            <div className='col-sm-4 portfolio-item' key={project.id}>

              <Link className='portfolio-link' to={`/project/${project.id}`}>
                <div className='caption'>
                  <div className='caption-content'>
                    <i className='fa fa-search-plus fa-3x' />
                  </div>
                </div>

                <img src={`${process.env.PUBLIC_URL}${project.image}`} className='img-responsive' alt='Cabin' />

              </Link>
            </div>
          )}
        </div>
      </section>
    )
  }
}
