import React from 'react'

import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import {SetObjectValue} from '../../utils/GetSetObjectValue'
import Fetch from '../../utils/fetch'

import './style.css';


export default class AdminPanel extends React.Component {

    constructor(props) {
        super();
        this.state = {
            pageConfig: props.pageConfig,
            page: 'addressPage'
        };
    }

    onChange (args) {
        this.setState((state)=>{
            state.pageConfig = SetObjectValue(state.pageConfig, args.pathConfig, '.', args.value);
            Fetch.Post(`/apps/${this.props.appName}/config`, state.pageConfig);
            return state;
        });
    }

    onClickItemListPages (newPage) {
        this.setState((state)=>(state.page = newPage, state));
    }

    render () {
        const {state} = this;
        return <div className='AdminPanelPage-root'>
            <LeftPanel
                pageConfig={state.pageConfig}
                page={state.page}
                onChange={this.onChange.bind(this)}
                onClick={this.onClickItemListPages.bind(this)}
            />
            <RightPanel
                appName={this.props.appName}
                onChangePage={this.props.onChangePage}
                pageConfig={state.pageConfig}
                page={state.page}
            />
        </div>
    }
};
