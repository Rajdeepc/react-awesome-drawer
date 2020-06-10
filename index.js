import React from "react";
import PropTypes from "prop-types";
import "./slidedrawer.scss";

const ReactSlider = ({ show, headerTitle, dataList, position,itemElement }) => {

  const handleClose = () => {
    props.closeDrawer(true);
  };

  const completed = show ? "side-drawer open" : "side-drawer";
  const xPosition =
    position === "left"
      ? "left"
      : "right"

  const arrayToPopulate = (dataList || []).map((item) => {
    return itemElement(item)
  })

  return (
    <div className={`${completed} ${xPosition}`}>
      <header>
        <div className="pull-left">{headerTitle}</div>
        <div className="pull-right">
          <span onClick={handleClose}>X</span>
        </div>
      </header>
      <div className="notifications list">
        {arrayToPopulate()}
      </div>
    </div>
  );
};

ReactSlider.propTypes = {
  show: PropTypes.Boolean,
  headerTitle: PropTypes.string,
  dataList: PropTypes.arrayOf,
  itemElement: PropTypes.func,
  position: PropTypes.string.isRequired
};

ReactSlider.defaultProps = {
  show:false,
  headerTitle: "",
  dataList: [],
  itemElement: () => {},
  position: 'right'
};

module.exports.ReactSlider = ReactSlider;
