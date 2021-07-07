import React from 'react';

import 'material-icons/iconfont/material-icons.css';


const Icon = (props) => {
    let {name, size, onSwitch} = props;
    return (<i className="material-icons" style={{fontSize: size,}} onClick={onSwitch}>{name}</i>);

};
export default Icon;