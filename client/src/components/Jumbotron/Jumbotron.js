import React from "react";
import "./Jumbotron.css";

const Jumbotron = (props) => (
  <div id="page-header" className="jumbotron text-center mb-0">
    <h1 className="display-3"><i className={props.titleicon}></i> {props.title}</h1>
    { props.message ? <div className="message">{props.message}</div> : null}
  </div>
);

export default Jumbotron;

