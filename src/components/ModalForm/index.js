import React, { useState } from 'react';

const ModalForm = ({addProject, setIsOpen}) => {
    const [projectName , setProjectName] = useState(''); 
    const handleSubmit = (e) =>{
        e.preventDefault();
        addProject(projectName)
        setIsOpen(false)
    }
    const handleChange = (e) => {
        setProjectName(e.target.value)
    } 
    return (
        <form onSubmit={handleSubmit}>
            <input type={'text'} 
                value={projectName} 
                placeholder='Nombre Proyecto'
                onChange={handleChange}
                >

                </input>
            <button type='submit'>Crear Proyecto</button>
        </form>
    );
}

export default ModalForm;