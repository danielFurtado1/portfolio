import React from 'react';
import './About.css'

import gmailIcon from '../../images/icons/gmail-icon.svg'
import chatBoxIcon from '../../images/icons/chat-box-icon.svg'
import mapIcon from '../../images/icons/pin-icon.svg'


const AboutPT = () => {
    return (
        <div className="pa5-ns" id="about">
        <h1 className="baskerville fw1 f2 ph3 ph0-l black about-tittle">Sobre</h1>
        <div className="about-wrapper">
            <div className="pa3 about-text baskerville f6 f5-l lh-copy">
                <p>
                    Seja bem-vindo à minha página, muito bom vê-lo por aqui!
                </p>
                <p>
                    Meu nome é Daniel, sou Desevolvedor Web Front-end me especializando na incrível tecnologia do ReactJS. 
                    Está sendo uma experiência fantástica desenvolver as mais diversas aplicações, algumas das quais você vai poder ver abaixo.
                </p>
                <p>
                    Caso tenha interesse em conhecer ainda mais sobre meu trabalho, sinta-se à vontade para entrar em contato
                    e responderei assim que possível!
                </p>
            </div>
            <div className="info-wrapper pa1">
                <div className="about-info">
                    <li className="link black-80 bg-transparent inline-flex items-center ma2 tc br2 pa2" title="E-mail">
                        <img alt="E-mail-icon" src={gmailIcon} className="icon-svg" />
                        <span className="f6 ml3 pr2">contact.danielfurtado@gmail.com</span>
                    </li>
                    <li className="link black-80 bg-transparent inline-flex items-center ma2 tc br2 pa2" title="Idiomas">
                        <img alt="Languages-icon" src={chatBoxIcon} className="icon-svg" />
                        <span className="f6 ml3 pr2">Inglês, Português (Brasil)</span>
                    </li>
                    <li className="link black-80 bg-transparent inline-flex items-center ma2 tc br2 pa2" title="Localização">
                        <img alt="Location-icon" src={mapIcon} className="icon-svg" />
                        <span className="f6 ml3 pr2">Brasil - SC</span>
                    </li>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AboutPT