import React from "react";

import Item from '../Item'


const generateList = (list, classItem, styleItem, onClickItem) => {
    return list.map((item) => {
        return <Item
            data={item}
            className={classItem}
            styleItem={styleItem}
            onClick={onClickItem}
        />
    });
};

export default (props) => {
    return <div className={props.classList}>
        {generateList(props.data, props.classItem, props.styleItem, props.onClickItem)}
    </div>
};
