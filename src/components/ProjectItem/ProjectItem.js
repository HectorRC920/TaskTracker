import React from 'react';
import './ProjectItem.css'
const ProjectItem = ({id,deleteProject,name,deleted}) => {
    const  handleDelete = (id) =>{
        deleteProject(id)
    }
    return (
        <li className='ProjectItem'>
            <button onClick={() => handleDelete(id)} className='ButtonDelete'>x</button>
            <h4 className={`TitleProject ${!!deleted && 'TitleProject--deleted'}`}>Nombre del proyecto:</h4>
            <h5 className={`TitleName ${!!deleted && 'TitleName--deleted'}`}>
                {name}
            </h5>
        </li>
    );
}

export default ProjectItem;