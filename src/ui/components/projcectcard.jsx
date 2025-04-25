import React from 'react';
import {ImageTextButton} from "./buttons.jsx";

const ProjectCard = ({project}) => {
    return (
        <div className="w-84 shadow-xl rounded-lg">
            <img src={project.img} alt={project.title}/>
            <div className="flex flex-col gap-4 p-8">
                <p className="uppercase">{project.type}</p>
                <p className="text-xl  font-semibold">{project.title}</p>
                <p>{project.desc}</p>

                <div>
                    <ImageTextButton title={project.buttonTxt}/>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;