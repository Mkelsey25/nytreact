import React from "react";
import "./CardBtn.css";

const CardBtn = props => (

  <button
    onClick={props.onClick}
    className={`card-btn ${props["data-value"]}`}
    title={props.title}
    // {...props}
  >
    <i className={props.icon} aria-hidden="true" />
  </button>
);

export default CardBtn;
