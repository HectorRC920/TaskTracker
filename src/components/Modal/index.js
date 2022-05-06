import ReactDOM from 'react-dom';
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
            {children}
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal;