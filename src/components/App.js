import React from 'react'

import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import pageConfig from '../config/pages'
import {SetObjectValue} from '../utils/GetSetObjectValue'
import Fetch from '../utils/fetch'

import './style.css';


export default class Background extends React.Component {

    constructor() {
        super();
        this.state = {
            pageConfig: pageConfig,
            page: 'addressPage'
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
        // Fetch.Post('/test/config', pageConfig);
    }

    onChange (args) {
        this.setState((state)=>{
            state.pageConfig = SetObjectValue(state.pageConfig, args.pathConfig, '.', args.value);
            Fetch.Post('/test/config', state.pageConfig);
            return state;
        });
    }

    onClickItemListPages (page) {
        this.setState((state)=>(state.page = page, state));
    }

    render () {
        const {state} = this;
        return <div className='root'>
            <LeftPanel
                pageConfig={state.pageConfig}
                onChange={this.onChange.bind(this)}
                onClick={this.onClickItemListPages.bind(this)}
            />
            <RightPanel
                pageConfig={state.pageConfig}
                page={state.page}
            />
        </div>
    }
};
