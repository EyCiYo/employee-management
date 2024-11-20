import { useState } from "react";
import "../../styles/ConfirmDeleteModal.css";
const ConfirmDelete = (prop) => {
    const { handleDelete, handleCancel } = prop;
    return (
        <dialog ref={prop.modalRef}>
            <div className="dialog-container">
                <button className="close-btn" onClick={handleCancel}>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-x-lg"
                            viewBox="0 0 16 16"
                        >
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    </div>
                </button>
                <h3>Are you sure?</h3>
                <p>Do you really want to delete this employee?</p>
                <div className="dialog-btns">
                    <button className="btn btn-danger" onClick={handleDelete}>
                        Delete
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default ConfirmDelete;
