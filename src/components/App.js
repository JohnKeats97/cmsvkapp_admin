import React from 'react'

import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import pageConfig from '../config/pages'
import {SetObjectValue} from '../utils/GetSetObjectValue'
import Fetch from '../utils/fetch'


export default class Background extends React.Component {

    constructor() {
        super();
        this.state = {
            pageConfig: pageConfig
        };

        Fetch.Get('/test/config')
            .then(response => {
                if (response) {
                    this.setState((state)=>{
                        state.pageConfig = response;
                        return state;
                    });
                }
            });
    }

    onChange (args) {
        this.setState((state)=>{
            SetObjectValue(state.pageConfig, args.pathConfig, '.', args.value);
            Fetch.Post('/test/config', state.pageConfig);
            return state;
        });
    }

    render () {
        return <div>
            <LeftPanel pageConfig={this.state.pageConfig} onChange={this.onChange.bind(this)}/>
            <RightPanel pageConfig={this.state.pageConfig}/>
        </div>
    }
};
