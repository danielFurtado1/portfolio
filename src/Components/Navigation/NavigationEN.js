import React from 'react'
import { Link } from 'react-scroll'
import './Navigation.css'

const NavigationEN = () => {
    return (
        <div>
            <header className="bg-white black-80 tc pv4">
                <nav className="sticky bt bb tc navbar">
                    <Link
                        className="nav-button f6 f5-l link hover-bg-light-gray dib pa3 ph5-l"
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >Home
                    </Link>
                    <Link
                        className="nav-button f6 f5-l link hover-bg-light-gray dib pa3 ph5-l"
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >About
                    </Link>
                    <Link
                        className="nav-button f6 f5-l link hover-bg-light-gray dib pa3 ph5-l"
                        activeClass="active"
                        to="roadmap"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >Roadmap
                    </Link>
                    <Link
                        className="nav-button f6 f5-l link hover-bg-light-gray dib pa3 ph5-l"
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >Projects
                    </Link>
                    <Link
                        className="nav-button f6 f5-l link hover-bg-light-gray dib pa3 ph5-l"
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >Contact
                    </Link>
                </nav>
            </header>
                <h1 className="black-80 mb0 i fw4 f1 nav-title">Here you can see my projects!</h1>
                <h2 className="black-80 mb4 f6 fw4 ttu tracked">Web Developer Daniel Furtado</h2>
        </div>
    )
}

export default NavigationEN