import React from "react";

export const Header = ({listIsOpen, setListIsOpen}) => {
    return (
        <div className="header">
            <h3 className="header__title">Benjamin Boda</h3>

            <div>
                <button className="header__button" 
                    onClick={() => {
                        setListIsOpen(!listIsOpen)}}
                    >
                    See all projects
                </button>
                <a className="header__a" href="mailto:benjamiin.boda@gmail.com">Get in Touch</a>
            </div>
        </div>
    )
}