import ReactDOM from 'react-dom';
import React from 'react';
import './Modal.css';
const Modal = ({isOpen, children, setIsOpen}) => {
    const onClose = () =>{
        setIsOpen(false)
    }   
    if (!isOpen) return null
    return ReactDOM.createPortal(
        <div className='overlayStyles'>
            <div className='modalStyles'>
            <h3>Este es un modal</h3>
            <button onClick={onClose}>Cerrar este modal</button>
            {React.Children.toArray(children).map((child) => 
            React.cloneElement(child, {setIsOpen:setIsOpen })
            ) }
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal;