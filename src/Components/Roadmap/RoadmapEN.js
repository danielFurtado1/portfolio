import React from 'react'

import './Roadmap.css'

import TimelineComponentEN from './TimelineEN'


const RoadmapEN = () => {
    return (
        <div>
            <div className="bt bb b--black-10 roadmap-wrapper" id="roadmap">
            <p className="fw1 f2 ph3 ph0-l black-80 roadmap-title">My Knowledge Roadmap</p>
            <TimelineComponentEN />
            </div>
        </div>
    )
}

export default RoadmapEN