import React from 'react';
import PropTypes from 'prop-types';

import 'material-icons/iconfont/material-icons.css';


const Icon = (props) => {
    let {name, size, onSwitch} = props;
    return (<i className="material-icons" style={{fontSize: size,}} onClick={onSwitch}>{name}</i>);

};
export default Icon;

Icon.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    
    onSwitch: PropTypes.func,
    size:PropTypes.number,
    name: PropTypes.string,}