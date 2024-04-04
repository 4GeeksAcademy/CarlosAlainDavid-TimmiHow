import React, { useContext } from "react";
import { Context } from "../../store/appContext";

export const Signup = ({ hideModal, modalRef }) => {
  
  const { store, actions } = useContext(Context);

	return <>
    <div className="addEmployee">
      <div className="modal fade" ref={modalRef} tabIndex="-1" >
        <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">LogOut</h5>
                <button type="button" className="btn-close" onClick={hideModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={hideModal}>Close</button>
                <button type="button" className="btn btn-primary">Understood</button>
              </div>
            </div>
          </div>
      </div>
    </div>


  </>
};
