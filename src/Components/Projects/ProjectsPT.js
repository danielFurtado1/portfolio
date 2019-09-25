import React from 'react'

import './Projects.css'

import gitIcon from '../../images/icons/roadmap-icons/github.svg'
import thumbMonster from '../../images/thumbnails/monster-cards-thumbnail.png'
import thumbRobo from '../../images/thumbnails/robo-cards-thumbnail.png'
import thumbFaceRecog from '../../images/thumbnails/face-recognition-thumbnail.png'
import thumbPortfolio from '../../images/thumbnails/portfolio-thumbnail.png'


const ProjectsPT = () => {
    return (
        <div>
            <section className="mw7 center avenir" id="projects">
                <h2 className="baskerville fw1 f2 ph3 ph0-l black">Projetos</h2>
                <article className="bt bb b--black-10 grow-custom" >
                    <div className="db pv4 ph3 ph0-l no-underline black">
                        <div className="flex flex-column flex-row-ns">
                            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                <img src={thumbMonster} className="db" alt="" />
                            </div>
                            <div className="w-100 w-60-ns pl3-ns">
                                <h1 className="f3 fw1 baskerville mt0 lh-title">Monster Cards</h1>
                                <p className="f6 f5-l lh-copy">
                                    App que renderiza cartões utilizando
                                     uma API de usuários combinada com uma 
                                     API que gera imagens de monstros com 
                                     o hash passado. Criado utilizando React.
                                      Hospedado no Github Pages.
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
                                <img src={thumbRobo} className="db" alt="" />
                            </div>
                            <div className="w-100 w-60-ns pl3-ns">
                                <h1 className="f3 fw1 baskerville mt0 lh-title">Robo Cards</h1>
                                <p className="f6 f5-l lh-copy">
                                    App responsivo em React que obtem os dados de usuários e 
                                    converte-os em cartões de robôs. Utiliza Tachyons 
                                    para o design e a responsividade do CSS. Hospedagem 
                                    feita através do Netlify.
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
                                    App responsivo hospedado no Heroku que detecta faces humanas nas fotos recebidas. 
                                    Utiliza React, Clarifai API para detectar e Tachyons para o design e responsividade.
                                    Possui uma base de cadastros, permissões e contagem de envios
                                    de fotos para cada usuário.
                                    <br />
                                    Faça seu cadastro!
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
                <article className="bb b--black-10 grow-custom">
                    <div className="db pv4 ph3 ph0-l no-underline black">
                        <div className="flex flex-column flex-row-ns">
                            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                <img src={thumbPortfolio} className="db" alt="" />
                            </div>
                            <div className="w-100 w-60-ns pl3-ns">
                                <h1 className="f3 fw1 baskerville mt0 lh-title">Portfólio Pessoal</h1>
                                <p className="f6 f5-l lh-copy">
                                    É o site que você está agora! Utiliza React, AWS (S3 e CloudFront) para a hospedagem, certificado 
                                    HTTPS, Tachyons para o CSS e responsividade, 
                                    e mais algumas funções interessantes.
                                    <br />
                                    Teste a responsividade mobile!
                                </p>
                                <div className="buttons">
                                    <a className="button" href="https://www.danielbmfurtado.com" rel="noopener noreferrer" target='_blank'>
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

export default ProjectsPT