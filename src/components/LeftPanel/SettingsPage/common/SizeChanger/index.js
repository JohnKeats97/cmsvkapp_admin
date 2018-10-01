import React from 'react'

import './style.css';


export default class SizeChanger extends React.Component {

    constructor() {
        super();
    }


    onChange (e) {
        if(!e.target.value) {
            this.props.onChange({value: `0px`, pathConfig: this.props.pathConfig});
            return;
        }
        this.props.onChange({value: `${Number(e.target.value)}px`, pathConfig: this.props.pathConfig});
    }

    render () {
        const {props} = this;
        const value = props.data ? props.data.match(/\d+/g)[0] : props.data;

        return <div
            className="components-LeftPanel-SettingPage-common-SizeChanger-root"
        >
            {props.title}
            <input
                className="components-LeftPanel-SettingPage-common-SizeChanger-input"
                value={value}
                onChange={this.onChange.bind(this)}
            />
        </div>
    }
};
