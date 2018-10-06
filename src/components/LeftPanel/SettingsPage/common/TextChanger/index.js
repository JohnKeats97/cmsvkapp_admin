import React from 'react'

import './style.css';


export default class TextChanger extends React.Component {

    constructor() {
        super();
    }

    onChange (e) {
        this.props.onChange({value: e.target.value, pathConfig: this.props.pathConfig});
    }

    render () {
        const {props} = this;
        const value = props.data;

        return <div
            className="components-LeftPanel-SettingPage-common-TextChanger-root"
        >
            {props.title}
            <input
                className="components-LeftPanel-SettingPage-common-TextChanger-input"
                value={value}
                onChange={this.onChange.bind(this)}
            />
        </div>
    }
};
