import React from "react";
import Icon from "../Icon";
import PropTypes from "prop-types";

const IconSwitch = (props) => {
  let { icon, onSwitch } = props;
  return (
    <div
      style={{
        textAlign: "right",
        position: "relative",
      }}
    >
      <Icon size={42} name={icon} onSwitch={onSwitch} />
    </div>
  );
};
export default IconSwitch;

IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func
  
};

IconSwitch.defaultProps = {
  icon: "view_list",
  onSwitch: () => {}
};
