import React from 'react';
import Icon from './Icon';
import PropTypes from 'prop-types';

const IconSwitch = (props) => {
    let {icon, onSwitch} = props;
    return (
        <div style={{textAlign:"right", position:"relative" }}className="switch-view" >
            <Icon size={42} name={icon} onSwitch = {onSwitch}/>
        </div>);
};
export default IconSwitch;


IconSwitch.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    
    onSwitch: PropTypes.func,
    icon: PropTypes.string}