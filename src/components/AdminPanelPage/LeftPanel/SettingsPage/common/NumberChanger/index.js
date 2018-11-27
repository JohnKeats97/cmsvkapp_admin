import React from 'react'

import './style.css';


export default class NumberChanger extends React.Component {

    constructor() {
        super();
    }


    onChange (e) {
        const {props} = this;
        let value = e.target.value;

        value = Number(value);

        if(!value) {
            props.onChange({value: (props.minValue ? props.minValue : `0px`), pathConfig: props.pathConfig});
            return;
        }

        if(typeof props.minValue !== 'undefined' && value < props.minValue) {
            value = props.minValue;
        }

        if(typeof props.maxValue !== 'undefined' && value > props.maxValue) {
            value = props.maxValue;
        }

        this.props.onChange({value: `${value}px`, pathConfig: props.pathConfig});
    }

    render () {
        const {props} = this;
        const value = props.data ? props.data.match(/\d+/g)[0] : props.data;

        return <div
            className="components-LeftPanel-SettingPage-common-NumberChanger-root"
        >
            {props.title}
            <input
                className="components-LeftPanel-SettingPage-common-NumberChanger-input"
                value={value}
                onChange={this.onChange.bind(this)}
            />
        </div>
    }
};
