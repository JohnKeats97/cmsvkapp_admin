import React from 'react'

import BackgroundChanger from '../common/BackgroundChanger'
import AddressPageConfig from './config/AddressPageConfig'

export default (props) => {
    return <div>
        {AddressPageConfig.pageName}
        <BackgroundChanger
            pathConfig={AddressPageConfig.background.background}
            data={props.pageConfig.addressPage.background.background}
            onChange={props.onChange}
        />
    </div>
};
