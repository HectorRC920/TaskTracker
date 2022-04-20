import React from 'react';
import './ProjectItem.css'
const ProjectItem = (props) => {
    return (
        <li className='ProjectItem'>
            <h4>Nombre del proyecto:</h4>
            <p>
                {props.name}
            </p>
        </li>
    );
}

export default ProjectItem;