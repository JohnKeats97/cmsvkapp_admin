import React from 'react'

import AddressPage from './AddressPage'


export default (props) => {
    return <div>
        Settings
        <AddressPage pageConfig={props.pageConfig} onChange={props.onChange}/>
    </div>
};
