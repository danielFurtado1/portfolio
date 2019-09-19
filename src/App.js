import React, { Component } from 'react';
import './App.css';

import NavigationEN from './Components/Navigation/NavigationEN';
import ProjectsEN from './Components/Projects/ProjectsEN';
import LanguageSelectorEN from './Components/LanguageSelector/LanguageSelectorEN';
import AboutEN from './Components/About/AboutEN';
import ContactEN from './Components/Contact/ContactEN';

import NavigationPT from './Components/Navigation/NavigationPT';
import ProjectsPT from './Components/Projects/ProjectsPT';
import LanguageSelectorPT from './Components/LanguageSelector/LanguageSelectorPT';
import AboutPT from './Components/About/AboutPT';
import ContactPT from './Components/Contact/ContactPT';
import Roadmap from './Components/Roadmap/RoadmapEN';
import RoadmapPT from './Components/Roadmap/RoadmapPT';



class App extends Component {
  constructor() {
    super()
    this.state = {
      language: 'PT-BR'
    }
  }

  componentWillMount() {
    localStorage.getItem('language') && this.setState({
      language: localStorage.getItem('language')
    })
  }

  componentDidUpdate() {
    localStorage.setItem('language', this.state.language)
  }

  switchToEnglishHandler = () => {
    this.setState(
      { language: 'EN-USA' }
    )
  }

  switchToPortugueseHandler = () => {
    this.setState(
      { language: 'PT-BR' }
    )
  }

  render() {
    if (this.state.language === 'EN-USA') {
      return (
        <div className="App">
          <div id="home">
            <NavigationEN />
            <p>Language/Idioma:</p>
            <LanguageSelectorEN onPress={this.switchToEnglishHandler} />
            <LanguageSelectorPT onPress={this.switchToPortugueseHandler} />
          </div>
          <AboutEN />
          <Roadmap />
          <ProjectsEN />
          <ContactEN />
        </div>
      )
    } else {
      return (
        <div className="App">
          <div id="home">
            <NavigationPT />
            <p>Language/Idioma:</p>
            <LanguageSelectorEN onPress={this.switchToEnglishHandler} />
            <LanguageSelectorPT onPress={this.switchToPortugueseHandler} />
          </div>
          <AboutPT />
          <RoadmapPT />
          <ProjectsPT />
          <ContactPT />
        </div>
      )
    }
  }
}

export default App;