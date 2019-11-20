import React from 'react';
import './About.css'

import gmailIcon from '../../assets/icons/gmail-icon.svg'
import chatBoxIcon from '../../assets/icons/chat-box-icon.svg'
import mapIcon from '../../assets/icons/pin-icon.svg'


const AboutEN = () => {
    return (
        <div className="pa5-ns" id="about">
        <h1 className="fw4 f2 ph3 ph0-l black about-tittle">About</h1>
        <div className="about-wrapper">
            <div className="pa3 about-text f6 f5-l lh-copy">
                <p>
                    Welcome to my page, fantastic to see you here!
                </p>
                <p>
                    My name is Daniel, I am a Front-end Web Developer specializing in the awesome technology of ReactJS. 
                    It has been an awesome experience to develop the most diverse aplications, some of which you will see below.
                </p>
                <p>
                    In case you wish to know even more about my work, please feel free to contact me and I will reach you as soon as possible!
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
                        <span className="f6 ml3 pr2">English, Portuguese (Brazil)</span>
                    </li>
                    <li className="link black-80 bg-transparent inline-flex items-center ma2 tc br2 pa2" title="Localização">
                        <img alt="Location-icon" src={mapIcon} className="icon-svg" />
                        <span className="f6 ml3 pr2">Brazil - SC</span>
                    </li>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AboutEN