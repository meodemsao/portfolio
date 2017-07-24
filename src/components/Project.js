import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import {projects} from '../data'

export default class Project extends React.Component {
  render () {
    const {params} = this.props.match
    const project = projects.find((item) => item.id.toString() === params.id)
    return (
      <div className='portfolio-modal' key={project.id}>
        <div className='modal-content'>
          <Link to='/'>
            <div className='close-modal'>
              <div className='lr'>
                <div className='rl' />
              </div>
            </div>
          </Link>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 col-lg-offset-2'>
                <div className='modal-body'>
                  <h2>{project.name}</h2>
                  <hr className='star-primary' />
                  <img
                    src={`${process.env.PUBLIC_URL}${project.image}`}
                    className='img-responsive'
                    alt='Cabin'
                  />
                  <p>
                    {project.description}
                  </p>
                  <ul className='list-inline item-details'>
                    <li>
                      Client:
                      {
                        project.client.map((client, index) => <strong key={index}>
                          {client}
                        </strong>)
                      }
                    </li>
                    <li>
                      Demo:
                      {
                        project.demo.map((demo, index) => <strong key={index}>
                          <a href={demo.link}>{demo.title} ,</a>
                        </strong>)
                      }
                    </li>
                    <li>
                      Source:<strong>
                        <a href={project.source}>{project.source}</a>
                      </strong>
                    </li>
                    <li>
                      Frontend:
                      {
                        project.frontend.map((front, index) => <strong key={index}>
                          {front} ,
                        </strong>)
                      }
                    </li>
                    <li>
                      Backend:
                      {
                        project.backend.map((back, index) => <strong key={index}>
                          {back} ,
                        </strong>)
                      }
                    </li>
                    <li>
                      Deploy:
                      {
                        project.deploy.map((deploy, index) => <strong key={index}>
                          {deploy} ,
                        </strong>)
                      }
                    </li>
                    <li>
                      Date:
                      <strong>
                        {project.date}
                      </strong>
                    </li>
                  </ul>
                  <Link to='/' className='btn btn-default'>
                    <i className='fa fa-times' /> Close
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
