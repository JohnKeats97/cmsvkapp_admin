import React from 'react'

import Fetch from '../../../utils/fetch'

import './style.css';

function onClick() {
    Fetch.Post('https://ec2-18-218-171-0.us-east-2.compute.amazonaws.com/deploy', {"idApp": "test"});
}

export default (props) => {
    return <div className="components-RightPanel-HeaderRight-root">
        <div className="col-xs-8"/>
        <button className="components-RightPanel-HeaderRight-button" onClick={onClick}>deploy</button>
        <button className="components-RightPanel-HeaderRight-button">log out</button>
    </div>
};
