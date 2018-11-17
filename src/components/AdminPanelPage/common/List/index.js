import React from "react";

import Item from '../Item/index'


const generateList = (list, classItem, styleItem, onClickItem) => {
    return list.map((item) => {
        if (!item[0]) {
            return '';
        }
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
