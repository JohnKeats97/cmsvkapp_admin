import React from "react";

import Item from '../Item'


const generateList = (list, classItem, styleItem) => {
    return list.map((item) => {
        return <Item
            data={item}
            className={classItem}
            styleItem={styleItem}
        />
    });
};

export default (props) => {
    return <div className={props.classList}>
        {generateList(props.data, props.classItem, props.styleItem)}
    </div>
};
