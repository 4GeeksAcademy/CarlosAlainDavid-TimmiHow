import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";

export const Signin = ({ hideModal, modalRef }) => {
    
    const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const [ show, setShow ] = useState(false);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleLogin = async(event) => {
		event. preventDefault();
		setShow(false);
		const response = await actions.logIn({
			email: email, 
			password: password
		});

		if(response === true){
			navigate("/private");
            hideModal();
		}
		else{
		 setShow(true);
		} 
	}

    return <>
       {show && 
            <div className="alert alert-danger d-flex justify-content-center align-items-center" role="alert" style={{zIndex:9999}}>
                <div >
                    Somenthing wrong with the login, please try again.
                </div>
            </div>
        }
        <div className="modal fade" 
            id="exampleModalToggle" 
            aria-labelledby="exampleModalToggleLabel"
            aria-hidden="true" 
            data-bs-backdrop='static'
            tabindex="-1"
            ref={modalRef}>
            <div className="modal-dialog modal-sm">
                <div className="modal-content">
                   
                    <div className="modal-body">
                         <div className="modal-header border border-0 p-0 mb-3">
                            <h2 className="modal-title" style={{color:"#FBC006"}}>SignIn</h2>
                            <button type="button" className="btn-close" onClick={hideModal} aria-label="Close"></button>
                        </div>
                        <div className="row">
                            <div className="col">
                                <form>
                                    <div className="input-group-sm mb-3">
                                        <label 
                                            className="form-label">
                                                Email address
                                        </label>
                                        <input type="email"
                                            className="form-control"
                                            aria-describedby="emailHelp"
                                            value={ email }
                                            onChange={ event => setEmail(event.target.value) }
                                        />
                                    </div>
                                    <div className="input-group-sm mb-3">
                                        <label 
                                            className="form-label">
                                                Password
                                        </label>
                                        <input type="password"
                                            className="form-control"
                                            value={ password }
                                            onChange={ event => setPassword(event.target.value) }
                                        />
                                        <button type="button" className="btn btn-link text-decoration-none"
                                                data-bs-target="#exampleModalToggle2" 
                                                data-bs-toggle="modal">
                                                    New here? Go to sign-up!!
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer border border-0 p-0">
                            {/* <button type="button"
                                className="btn btn-secondary"
                                onClick={hideModal}>
                                    Close
                            </button> */}
                            <button type="button"
                                className="btn btn-primary"
                                style={{backgroundColor:"#D43381", border:"none"}}
                                onClick={ event => handleLogin(event)}>
                                    Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};
