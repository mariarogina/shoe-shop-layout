import React from "react";
import PropTypes from "prop-types";

import "material-icons/iconfont/material-icons.css";

const Icon = (props) => {
  let { name, size, onSwitch } = props;
  return (
    <i className="material-icons" style={{ fontSize: size }} onClick={onSwitch}>
      {name}
    </i>
  );
};
export default Icon;

Icon.propTypes = {
  onSwitch: PropTypes.func,
  size: PropTypes.number,
  name: PropTypes.string,
};

Icon.defaultProps = {
  size: 42,
  name: "view_list",
  onSwitch: () => {}
};
