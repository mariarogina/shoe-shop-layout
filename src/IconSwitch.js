import React from 'react';
import Icon from './Icon';
const IconSwitch = (props) => {
    let {icon, onSwitch} = props;
    return (
        <div style={{textAlign:"right"}}className="switch-view" onClick={onSwitch}>
            <Icon size={42} name={icon}/>
        </div>);
};
export default IconSwitch;