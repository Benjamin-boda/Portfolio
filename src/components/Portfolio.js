import React, {useState} from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Projects} from "./Projects";
import {ListProjects} from "./ListProjects";

export const Portfolio = () => {
    const [numberProject, setNumberProject] = useState(1)
    const [listIsOpen, setListIsOpen] = useState(false)
    const [listAnimation, setListAnimation] = useState(true)

    return (
        <div>
            {listIsOpen ? undefined :
                <Header 
                    listIsOpen={listIsOpen} 
                    setListIsOpen={setListIsOpen}
                    listAnimation={listAnimation}
                    setListAnimation={setListAnimation}
                />
            }
            {listIsOpen ? undefined :
                <Projects 
                    numberProject={numberProject}
                    setNumberProject={setNumberProject}
                />
            }
            {listIsOpen ? 
                <ListProjects 
                    setNumberProject={setNumberProject}
                    listIsOpen={listIsOpen} 
                    setListIsOpen={setListIsOpen}
                    listAnimation={listAnimation}
                    setListAnimation={setListAnimation}
                /> : undefined
            }
            <Footer/>
        </div>
    )
}