import React from "react";

import configPage from "../config/configPage";

import './style.css';


export default class RegisterPage extends React.Component {

    constructor() {
        super();
    }

    render () {
        return <div className="LoadingPage-root">
            <main role="main">
                <ul role="progressbar" aria-busy="true">
                    <li role="presentation"></li>
                    <li role="presentation"></li>
                    <li role="presentation"></li>
                    <li role="presentation"></li>
                    <li role="presentation"></li>
                    <li role="presentation"></li>
                    <li role="presentation"></li>
                </ul>
            </main>
        </div>
    }
};

