import React from 'react'
import { Link } from 'react-scroll'
import './Navigation.css'

const NavigationPT = () => {
    return (
        <div>
            <header className="bg-white black-80 tc pv4 avenir">
                <nav className="sticky bt bb tc navbar">
                    <Link
                        className="nav-button f6 f5-l link hover-bg-light-gray dib pa3 ph5-l"
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >Início
                    </Link>
                    <Link
                        className="nav-button f6 f5-l link hover-bg-light-gray dib pa3 ph5-l"
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >Sobre
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
                    >Portfólio
                    </Link>
                    <Link
                        className="nav-button f6 f5-l link hover-bg-light-gray dib pa3 ph5-l"
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >Contato
                    </Link>
                </nav>
            </header>
                <h1 className="black-80 mb0 baskerville i fw1 f1 nav-title">Veja meus projetos!</h1>
                <h2 className="black-80 mb4 f6 fw4 ttu tracked">Web Developer Daniel Furtado</h2>
        </div>
    )
}

export default NavigationPT