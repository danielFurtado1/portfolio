import React from 'react'

import './Roadmap.css'

import TimelineComponentPT from './TimelinePT'


const RoadmapPT = () => {
    return (
        <div>
            <div className="bt bb b--black-10 roadmap-wrapper" id="roadmap">
            <p className="fw4 f2 ph3 ph0-l black-80 roadmap-title">Roteiro de Aprendizado</p>
            <TimelineComponentPT />
            </div>
        </div>
    )
}

export default RoadmapPT