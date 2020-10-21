import React from "react";

export const Footer = () => {
    return (
        <div className="footer">
            <a className="footer__a" href="https://github.com/Benjamin-boda"><img className="footer__image" src={require("../images/github.png")}/></a>
            <a className="footer__a" href="www.linkedin.com/in/benjamin-boda-61003b191"><img className="footer__image" src={require("../images/linkedin.png")}/></a>
        </div>
    )
}