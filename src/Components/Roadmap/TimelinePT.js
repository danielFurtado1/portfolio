import React, { Component } from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

import './Roadmap.css'

import checkIcon from '../../images/icons/roadmap-icons/check-icon.svg'
import inprogressIcon from '../../images/icons/roadmap-icons/in-progress-icon.svg'

import reactIcon from '../../images/icons/roadmap-icons/react.svg'
import reduxIcon from '../../images/icons/roadmap-icons/redux.svg'
import postgresqlIcon from '../../images/icons/roadmap-icons/postgresql.svg'
import javascriptIcon from '../../images/icons/roadmap-icons/javascript.svg'
import html5Icon from '../../images/icons/roadmap-icons/html5.svg'
import css3Icon from '../../images/icons/roadmap-icons/css3.svg'
import sassIcon from '../../images/icons/roadmap-icons/sass.svg'
import gitIcon from '../../images/icons/roadmap-icons/github.svg'
import nodejsIcon from '../../images/icons/roadmap-icons/nodejs.svg'
import awsIcon from '../../images/icons/roadmap-icons/aws.svg'
import pwaIcon from '../../images/icons/roadmap-icons/pwa.svg'
import cicdIcon from '../../images/icons/roadmap-icons/cicd.svg'
import jestIcon from '../../images/icons/roadmap-icons/jest.svg'
import redisIcon from '../../images/icons/roadmap-icons/redis.svg'
import dockerIcon from '../../images/icons/roadmap-icons/docker.svg'


const reactColor = {
  'background-color':'rgb(97, 218, 251)'
}

const reduxColor = {
  'background-color':'rgb(118, 74, 188)'
}

const postgresqlColor = {
  'background-color':'rgb(51, 103, 145)'
}

const javascriptColor = {
  'background-color':'rgb(247, 223, 30)'
}

const html5Color = {
  'background-color':'rgb(227, 79, 38)'
}

const css3Color = {
  'background-color':'rgb(21, 114, 182)'
}

const sassColor = {
  'background-color':'rgb(204, 102, 153)'
}

const gitColor = {
  'background-color':'rgb(36, 41, 46)'
}

const nodejsColor = {
  'background-color':'rgb(51, 153, 51)'
}

const awsColor = {
  'background-color':'rgb(255, 153, 0)'
}

const pwaColor = {
  'background-color':'rgb(90, 15, 200)'
}

const cicdColor = {
  'background-color':'rgb(7, 9, 169)'
}

const jestColor = {
  'background-color':'rgb(153, 66, 91)'
}

const redisColor = {
  'background-color':'rgb(216, 44, 32)'
}

const dockerColor = {
  'background-color':'rgb(6, 109, 165)'
}



class TimelineComponentPT extends Component {
  render() {
    return (
      <div>
        <Timeline lineColor={'rgba(0, 0, 0, 0.6)'}>
          <TimelineItem
            key="001"
            dateText="1º Semestre - 2019"
            dateInnerStyle={{ background: '#DCF8C6', color: '#4BB543' }}
            style={{ color: 'rgba(0, 0, 0, 0.6)' }}
            bodyContainerStyle={{
              background: '#DCF8C6',
              padding: '0px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <div className="tech-item-wrapper">
              <div className="tech-icon-wrapper" style={javascriptColor}>
                <img alt="tech-icon" className="tech-icon" src={javascriptIcon} />
              </div>
              <p className="tech-title">JavaScript</p>
              <img alt="progress-icon" className="progress-icon" src={checkIcon} />
            </div>
            <div className="tech-item-wrapper">
              <div className="tech-icon-wrapper" style={html5Color}>
                <img alt="tech-icon" className="tech-icon" src={html5Icon} />
              </div>
              <p className="tech-title">HTML5</p>
              <img alt="progress-icon" className="progress-icon" src={checkIcon} />
            </div>
            <div className="tech-item-wrapper">
              <div className="tech-icon-wrapper" style={css3Color}>
                <img alt="tech-icon" className="tech-icon" src={css3Icon} />
              </div>
              <p className="tech-title">CSS3</p>
              <img alt="progress-icon" className="progress-icon" src={checkIcon} />
            </div>
            <div className="tech-item-wrapper">
              <div className="tech-icon-wrapper" style={nodejsColor}>
                <img alt="tech-icon" className="tech-icon" src={nodejsIcon} />
              </div>
              <p className="tech-title">Node.js</p>
              <img alt="progress-icon" className="progress-icon" src={checkIcon} />
            </div>
            <div className="tech-item-wrapper">
              <div className="tech-icon-wrapper" style={postgresqlColor}>
                <img alt="tech-icon" className="tech-icon" src={postgresqlIcon} />
              </div>
              <p className="tech-title">PostgreSQL</p>
              <img alt="progress-icon" className="progress-icon" src={checkIcon} />
            </div>
          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="2º Semestre - 2019"
            dateInnerStyle={{ background: '#ddd', color: '#000' }}
            style={{ color: 'rgba(0, 0, 0, 0.6)' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '0px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <div className="tech-item-wrapper">
              <div className="tech-icon-wrapper" style={reactColor}>
                <img alt="tech-icon" className="tech-icon" src={reactIcon} />
              </div>
              <p className="tech-title">React</p>
              <img alt="progress-icon" className="progress-icon" src={checkIcon} />
            </div>
            <div className="tech-item-wrapper">
              <div className="tech-icon-wrapper" style={gitColor}>
                <img alt="tech-icon" className="tech-icon" src={gitIcon} />
              </div>
              <p className="tech-title">Github</p>
              <img alt="progress-icon" className="progress-icon" src={checkIcon} />
            </div>
            <div className="tech-item-wrapper">
              <div className="tech-icon-wrapper" style={reduxColor}>
                <img alt="tech-icon" className="tech-icon" src={reduxIcon} />
              </div>
              <p className="tech-title">Redux</p>
              <img alt="progress-icon" className="progress-icon" src={inprogressIcon} />
            </div>
          </TimelineItem>
          <TimelineItem
            key="003"
            dateText="1º Semestre - 2020"
            dateInnerStyle={{ background: '#ddd', color: '#000' }}
            style={{ color: 'rgba(0, 0, 0, 0.6)' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '0px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <div className="tech-item-wrapper">
              <div className="tech-icon-wrapper" style={pwaColor}>
                <img alt="tech-icon" className="tech-icon" src={pwaIcon} />
              </div>
              <p className="tech-title">Progressive Web Apps</p>
              <img alt="progress-icon" className="progress-icon" src={inprogressIcon} />
            </div>
            <div className="tech-item-wrapper">
              <div className="tech-icon-wrapper" style={awsColor}>
                <img alt="tech-icon" className="tech-icon" src={awsIcon} />
              </div>
              <p className="tech-title">Amazon Web Services</p>
              <img alt="progress-icon" className="progress-icon" src={inprogressIcon} />
            </div>
            <div className="tech-item-wrapper">
              <div className="tech-icon-wrapper" style={dockerColor}>
                <img alt="tech-icon" className="tech-icon" src={dockerIcon} />
              </div>
              <p className="tech-title">Docker</p>
              <img alt="progress-icon" className="progress-icon" src={inprogressIcon} />
            </div>
          </TimelineItem>
          <TimelineItem
            key="004"
            dateText="2º Semestre - 2020"
            dateInnerStyle={{ background: '#ddd', color: '#000' }}
            style={{ color: 'rgba(0, 0, 0, 0.6)' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '0px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <div className="tech-item-wrapper">
              <div className="tech-icon-wrapper" style={cicdColor}>
                <img alt="tech-icon" className="tech-icon" src={cicdIcon} />
              </div>
              <p className="tech-title">CI/CD</p>
              <img alt="progress-icon" className="progress-icon" src={inprogressIcon} />
            </div>
            <div className="tech-item-wrapper">
              <div className="tech-icon-wrapper" style={redisColor}>
                <img alt="tech-icon" className="tech-icon" src={redisIcon} />
              </div>
              <p className="tech-title">Redis</p>
              <img alt="progress-icon" className="progress-icon" src={inprogressIcon} />
            </div>
            <div className="tech-item-wrapper">
              <div className="tech-icon-wrapper" style={jestColor}>
                <img alt="tech-icon" className="tech-icon" src={jestIcon} />
              </div>
              <p className="tech-title">Jest</p>
              <img alt="progress-icon" className="progress-icon" src={inprogressIcon} />
            </div>
            <div className="tech-item-wrapper">
              <div className="tech-icon-wrapper" style={sassColor}>
                <img alt="tech-icon" className="tech-icon" src={sassIcon} />
              </div>
              <p className="tech-title">SASS</p>
              <img alt="progress-icon" className="progress-icon" src={inprogressIcon} />
            </div>
          </TimelineItem>
          <TimelineItem
            key="005"
            dateText="1º Semestre - 2021"
            dateInnerStyle={{ background: '#ddd', color: '#000' }}
            style={{ color: 'rgba(0, 0, 0, 0.6)' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '0px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <div className="tech-item-wrapper">
              <p className="tech-title">Mais em breve...</p>
            </div>
          </TimelineItem>
        </Timeline>
      </div>
    )
  }

}

export default TimelineComponentPT