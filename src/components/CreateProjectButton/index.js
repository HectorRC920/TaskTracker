import React from 'react';
 const CreateProjectButton = ({isOpen,setIsOpen}) => {
    const onOpen = () =>{
        setIsOpen(true)
    }
    return (
        <>
        <button onClick={() => {onOpen()}}>Crear proyecto</button>
        </>
    );
 }

 export default CreateProjectButton;