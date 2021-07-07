import React from 'react';
import Icon from './Icon';
const IconSwitch = (props) => {
    let {icon, onSwitch} = props;
    return (
        <div style={{textAlign:"right", position:"relative" }}className="switch-view" >
            <Icon size={42} name={icon} onSwitch = {onSwitch}/>
        </div>);
};
export default IconSwitch;