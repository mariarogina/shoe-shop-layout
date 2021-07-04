import React from 'react';

import 'material-icons/iconfont/material-icons.css';


const Icon = (props) => {
    let {name, size} = props;
    return (<i className="material-icons" style={{fontSize: size}}>{name}</i>);

};
export default Icon;