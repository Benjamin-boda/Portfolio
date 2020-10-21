import React from "react";
import {Link} from "react-router-dom";
import {projects} from "../projects/projects";

export const ListProjects = ({listIsOpen, setListIsOpen, setNumberProject}) => {
    
    return (
        <div>
            <div className="list__projects">
                <div className="list__projects__contents">
                    <div className="list__projects__header">
                        <h3 className="header__title">Benjamin Boda</h3>
                        <button className="button__back " onClick={() => setListIsOpen(!listIsOpen)}><img className="list__image__back" src={require("../images/arrow_button.png")}/></button>
                    </div>

                    {projects.map((project) => 
                        <Link onClick={() => 
                            {setNumberProject(project.number)
                            setListIsOpen(!listIsOpen)}
                        } 
                        key={project.number}
                        className="list__projects__text"
                        to={
                            {
                                pathname :"/"
                            }
                        }>
                            <h2 className="list__projects__text__title">{project.title}</h2>
                            <p className="list__projects__text__description">{project.description}</p>
                        </Link>
                        )}
                </div>
            </div>
        </div>
    )
}