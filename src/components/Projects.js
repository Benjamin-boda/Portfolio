import React, {useState, useEffect} from "react";
import {projects} from "../projects/projects";
import {ProjectAnimation} from "./ProjectAnimation";


export const Projects = ({numberProject, setNumberProject}) => {
    
    const [isScrolling, setIsScrolling] = useState(null)
    const [isHovering, setIsHovering] = useState(0)
    const [animationCount, setAnimationCount] = useState(0)
    const [startAnimation, setStartAnimation] = useState(true)

    const scrollingListener = (e) => {
        e.preventDefault()

        window.clearTimeout(isScrolling)

        const position = e.deltaY

        if (numberProject < 9 && numberProject > 1) {
            if ( position > 0 ) {
                setIsScrolling(
                    setTimeout(() => {
                        setNumberProject(numberProject + 1)
                    }, 150)
                )
            } else {
                setIsScrolling(
                    setTimeout(() => {
                        setNumberProject(numberProject - 1)
                    }, 150)
                )
            }    
        } else if ( numberProject === 9 ) {
            if ( position < 0 ) {
                setIsScrolling(
                    setTimeout(() => {
                        setNumberProject(numberProject - 1)
                    }, 150)
                )
            } 
        } else if ( numberProject === 1 ) {
            if ( position > 0 ) {
                setIsScrolling(
                    setTimeout(() => {
                        setNumberProject(numberProject + 1)
                    }, 150)
                )
            } 
        }
    }

    const onClickUp = () => {
        if (numberProject === 1) {
            setNumberProject(numberProject - 0)
        } else { 
            setNumberProject(numberProject - 1)
            }
    }

    const onClickDown = () => {
        if (numberProject === 9) {
            setNumberProject(numberProject + 0)
        } else { 
            setNumberProject(numberProject + 1)
            }
    }

    useEffect(() => {
        window.addEventListener("wheel", scrollingListener, {passive: false})
        return () => {
          window.removeEventListener("wheel", scrollingListener)
        }
      })
    
    useEffect(() => {
        if (animationCount !== numberProject) {
            setStartAnimation(true)
            setAnimationCount(numberProject)
            setTimeout(() => {
                setStartAnimation(false)
            }, 1000);
        }
    }, [numberProject])
    
    return (
        <div>
            <div className="projects__contents">
                <div className="projects">
                    <div className="button__navigation">
                        <button className="button__up__down" onClick={onClickUp}><img className="button__image__up" src={require("../images/arrow_button.png")}/></button>
                        <button className="button__up__down" onClick={onClickDown}><img className="button__image__down" src={require("../images/arrow_button.png")}/></button>
                    </div>
                    
                {projects.map((project) => 
                    numberProject === project.number ? 
                        <a className="projects__text" href={numberProject === 1 ? undefined : project.url} target="_blank" key={project.number}>
                            {startAnimation && <ProjectAnimation/>}
                            <p className="projects__text__description">{project.description}</p>
                            <h2 className={numberProject === 1 ? "projects__text__title__presentation" : "projects__text__title"}>{project.title}</h2>
                            <p className="projects__text__techno">{project.technology}</p>
                            <img className="projects__image" src={project.image} />
                        </a> : undefined
                    
                )}
                </div>
                    
                <div className="projects__button">
                    {projects.map((project) => (
                        <button 
                            onMouseOver={() => setIsHovering(project.number)}
                            onMouseOut={() => setIsHovering(0)}
                            className="projects__button__items" 
                            onClick={() => setNumberProject(project.number)}
                            key={project.number}
                        >
                            {isHovering === project.number ? <span className="projects__button__items__text">{project.number} / {projects.length}</span> : undefined}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}