import React from "react";
import "./Footer.css";

const Footer = (props) => (
    <footer id="main-footer" className="text-center p-0 sticky">
        <div className="container">
            <div className="row">
                <div className="col">
                    <small className="text-muted">Copyright &copy;<span id="year"> {props.year}</span></small>
                </div>
            </div>
        </div>
    </footer>
    );

export default Footer;
