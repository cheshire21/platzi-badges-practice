import React from 'react';
import Modal from './Modal';

function DeleteBadgeModal (props){
    return <Modal isOpen={props.isOpen} onModal={props.onModal}>
        <div>
            <h1>Are You Sure ?</h1>
            <p>
                You are about tio delete this badge
            </p>
        </div>
        <div>
            <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">Delete</button>
            <button onClick={props.onModal} className="btn btn-success ">Cancel</button>
        </div>
    </Modal>
}

export default DeleteBadgeModal;