import React, { Component } from 'react';
import './LanguageSelector.css'

import iconPT from '../../assets/icons/portuguese.png'


class LanguageSelectorPT extends Component {
    render() {
        const { onPress } = this.props;

        return (
            <button className="button-selector grow-custom" onClick={onPress}>
                <input type="image" alt="Portuguese" src={iconPT} className="language-selector-button" />
            </button>
        )
    }
}

export default LanguageSelectorPT