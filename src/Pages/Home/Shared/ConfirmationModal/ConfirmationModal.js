import React from 'react';

const ConfirmationModal = ({ title, message, closeModal, deleteModal, modalData, successAction }) => {
    return (
        <div>
            <input type="checkbox" id="doctor-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)} htmlFor="doctor-modal" className="btn btn-error">{deleteModal}</label>
                        
                        <button onClick={closeModal} className='btn btn-outline'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;