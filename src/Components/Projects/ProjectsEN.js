import React from 'react'

import './Projects.css'

import gitIcon from '../../images/icons/roadmap-icons/github.svg'
import thumbMonster from '../../images/thumbnails/monster-cards-thumbnail.png'
import thumbRobo from '../../images/thumbnails/robo-cards-thumbnail.png'
import thumbFaceRecog from '../../images/thumbnails/face-recognition-thumbnail.png'
import thumbPortfolio from '../../images/thumbnails/portfolio-thumbnail.png'


const ProjectsEN = () => {
    return (
        <div>
            <section className="mw7 center avenir" id="projects">
                <h2 className="baskerville fw1 f2 ph3 ph0-l black">Projects</h2>
                <article className="bb b--black-10 grow-custom">
                    <div className="db pv4 ph3 ph0-l no-underline black">
                        <div className="flex flex-column flex-row-ns">
                            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                <img src={thumbRobo} className="db" alt="" />
                            </div>
                            <div className="w-100 w-60-ns pl3-ns">
                                <h1 className="f3 fw1 baskerville mt0 lh-title">Robo Cards</h1>
                                <p className="f6 f5-l lh-copy">
                                    Responsive App that obtain a users data 
                                    and convert them into robot cards. It uses 
                                    Tachyons for the CSS design and the responsivity. 
                                    Deployed with Netlify.
                                </p>
                                <div className="buttons">
                                    <a className="button" href="https://robo-cards.netlify.com/" rel="noopener noreferrer" target='_blank'>
                                        <div className="white-dot"></div>
                                        <span>Live</span>
                                    </a>
                                    <a className="button" href="https://github.com/danielFurtado1/robo-cards/" rel="noopener noreferrer" target='_blank'>
                                        <div className="icon">
                                            <img alt="git-icon" className="git-icon" src={gitIcon} /></div>
                                        <span>Source</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="bb b--black-10 grow-custom">
                    <div className="db pv4 ph3 ph0-l no-underline black">
                        <div className="flex flex-column flex-row-ns">
                            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                <img src={thumbFaceRecog} className="db" alt="" />
                            </div>
                            <div className="w-100 w-60-ns pl3-ns">
                                <h1 className="f3 fw1 baskerville mt0 lh-title">Face Recognition App</h1>
                                <p className="f6 f5-l lh-copy">
                                    Detects human faces in the received pictures, deployed with Heroku and is highly responsive.
                                    Uses React, Clarifai API for the detection and Tachyons for the design and responsivity. 
                                    It haves a user base, permissions and entry count for each user.
                                    <br />
                                    Try it out!
                                </p>
                                <div className="buttons">
                                    <a className="button" href="https://face--recognition-app.herokuapp.com/" rel="noopener noreferrer" target='_blank'>
                                        <div className="white-dot"></div>
                                        <span>Live</span>
                                    </a>
                                    <a className="button" href="https://github.com/danielFurtado1/face-recognition-app/" rel="noopener noreferrer" target='_blank'>
                                        <div className="icon">
                                            <img alt="git-icon" className="git-icon" src={gitIcon} /></div>
                                        <span>Source</span>
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </article>
                <article className="bt bb b--black-10 grow-custom" >
                    <div className="db pv4 ph3 ph0-l no-underline black">
                        <div className="flex flex-column flex-row-ns">
                            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                <img src={thumbMonster} className="db" alt="" />
                            </div>
                            <div className="w-100 w-60-ns pl3-ns">
                                <h1 className="f3 fw1 baskerville mt0 lh-title">Monster Cards</h1>
                                <p className="f6 f5-l lh-copy">
                                    Renders cards using
                                    a users API combined with a
                                    hash monster image generator API.
                                    Created with React. Deployed using
                                    Github Pages.
                                </p>
                                <div className="buttons">
                                    <a className="button" href="https://danielfurtado1.github.io/monster-cards/" rel="noopener noreferrer" target='_blank'>
                                        <div className="white-dot"></div>
                                        <span>Live</span>
                                    </a>
                                    <a className="button" href="https://github.com/danielFurtado1/monster-cards/" rel="noopener noreferrer" target='_blank'>
                                        <div className="icon">
                                            <img alt="git-icon" className="git-icon" src={gitIcon} /></div>
                                        <span>Source</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="bb b--black-10 grow-custom">
                    <div className="db pv4 ph3 ph0-l no-underline black">
                        <div className="flex flex-column flex-row-ns">
                            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                <img src={thumbPortfolio} className="db" alt="" />
                            </div>
                            <div className="w-100 w-60-ns pl3-ns">
                                <h1 className="f3 fw1 baskerville mt0 lh-title">Personal Portfolio</h1>
                                <p className="f6 f5-l lh-copy">
                                    It is the site you're on now! Created with React, AWS (S3 and CloudFront) for deployment, 
                                    HTTPS certification, Tachyons for the CSS and responsivity, and some more interesting things.
                                    <br />
                                    Check out the mobile responsivity!
                                </p>
                                <div className="buttons">
                                    <a className="button" href="/" rel="noopener noreferrer" target='_blank'>
                                        <div className="white-dot"></div>
                                        <span>Live</span>
                                    </a>
                                    <a className="button" href="https://github.com/danielFurtado1/portfolio/" rel="noopener noreferrer" target='_blank'>
                                        <div className="icon">
                                            <img alt="git-icon" className="git-icon" src={gitIcon} /></div>
                                        <span>Source</span>
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default ProjectsEN