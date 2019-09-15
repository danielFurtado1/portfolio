import React from 'react'

import thumbMonster from '../../images/thumbnails/monster-cards-thumbnail.png'
import thumbRobo from '../../images/thumbnails/robo-cards-thumbnail.png'


const ProjectsEN = () => {
    return (
        <div>
            <section className="mw7 center avenir" id="projects">
                <h2 className="baskerville fw1 f2 ph3 ph0-l black">Projects</h2>
                <article className="bt bb b--black-10 grow-custom" >
                    <div className="db pv4 ph3 ph0-l no-underline black">
                        <div className="flex flex-column flex-row-ns">
                            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                <img src={thumbMonster} className="db" alt="" />
                            </div>
                            <div className="w-100 w-60-ns pl3-ns">
                                <h1 className="f3 fw1 baskerville mt0 lh-title">Monster Cards</h1>
                                <p className="f6 f5-l lh-copy">
                                    text about monster cards
                                    <br/>
                                    text about monster cards
                                    <br/>
                                    text about monster cards
                                    text about monster cards
                                    <br/>
                                    text about monster cards
                                    <br/>
                                    text about monster cards
                                    text about monster cards
                                    <br/>
                                    text about monster cards
                                    <br/>
                                    text about monster cards
                                </p>
                                <p className="f6 lh-copy mv0">By Robin Darnell</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="bb b--black-10 grow-custom">
                    <div className="db pv4 ph3 ph0-l no-underline black">
                        <div className="flex flex-column flex-row-ns">
                            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                <img src={thumbRobo} className="db" alt="" />
                            </div>
                            <div className="w-100 w-60-ns pl3-ns">
                                <h1 className="f3 fw1 baskerville mt0 lh-title">Robo Cards</h1>
                                <p className="f6 f5-l lh-copy">
                                    A warehouse is a commercial building for storage of goods.
                                    Warehouses are used by manufacturers, importers, exporters,
                                    wholesalers, transport businesses, customs, etc. They are
                                    usually large plain buildings in industrial areas of cities,
                                    towns and villages.
                                </p>
                                <p className="f6 lh-copy mv0">By Robin Darnell</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="bb b--black-10 grow-custom">
                    <div className="db pv4 ph3 ph0-l no-underline black">
                        <div className="flex flex-column flex-row-ns">
                            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                <img src="http://mrmrs.github.io/photos/whale.jpg" className="db" alt="" />
                            </div>
                            <div className="w-100 w-60-ns pl3-ns">
                                <h1 className="f3 fw1 baskerville mt0 lh-title">Projeto 3</h1>
                                <p className="f6 f5-l lh-copy">
                                    Whale is the common name for a widely distributed and diverse
                                    group of fully aquatic placental marine mammals. They are an
                                    informal grouping within the infraorder Cetacea, usually
                                    excluding dolphins and porpoises.
                                </p>
                                <p className="f6 lh-copy mv0">By Robin Darnell</p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default ProjectsEN