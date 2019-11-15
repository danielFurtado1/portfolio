import React, { Component } from 'react';
import './LanguageSelector.css'

import iconEN from '../../assets/icons/usa-english.png'


class LanguageSelectorEN extends Component {
    render() {
        const { onPress } = this.props;

        return (
            <button className="button-selector grow-custom" onClick={onPress}>
                <input type="image" alt="English" src={iconEN} className="language-selector-button" />
            </button>
        )
    }
}

export default LanguageSelectorEN