import React from 'react';
import './CreateProjectButton.css'
import logo from "../../close.png";
 const CreateProjectButton = ({isOpen,setIsOpen}) => {
    const onOpen = () =>{
        setIsOpen(true)
    }
    return (
        <>
        <button className='CreateProjectButton' onClick={() => {onOpen()}}>
            <img src={logo} alt="Imagen perrona"></img>
        </button>
        </>
    );
 }

 export default CreateProjectButton;