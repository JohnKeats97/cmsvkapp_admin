import React from "react";

import Item from '../Item'


const generateList = (list) => {
    return list.map((item) => {
        return <Item data={item} />
    });
};

export default (props) => {
    return <div>
        {generateList(props.data)}
    </div>
};
