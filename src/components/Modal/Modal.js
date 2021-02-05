import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'
const modalRoot = document.getElementById('modal-root');

function Modal(props) {
    let modalContent = (
        <div className="modal-wrapper">
            <div onClick={ () => props.closeModal() } className="modal-backdrop"></div>
            <div className="modal-box p-8 rounded-md bg-gray-100">
                <div className="flex flex-col items-center">
                    { props.children }
                    <div>
                        <button className="bg-blue-600 py-1 px-6 ring focus:ring-4 rounded text-white" onClick={ () => props.closeModal() }>Okay</button>
                    </div>
                </div>
            </div>
        </div>
    )

    return ReactDOM.createPortal(modalContent, modalRoot)
}

export default Modal


// This is the way when we need clean up after close modal

// function Modal(props) {
//     const div = document.createElement('div');
//     modalRoot.appendChild(div);
//     div.className="modal";

//     useEffect(() => {
//         modalRoot.appendChild(div);

//         return () => modalRoot.removeChild(div)
//     })
//     return ReactDOM.createPortal(props.children, div);
// }