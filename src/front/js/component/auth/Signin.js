import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import {Link, Navigate} from "react-router-dom";

export const Signin = ({ hideModal, modalRef }) => {
    
    const { store, actions } = useContext(Context);

    return <>
        <div className="addEmployee">   
            <div className="modal fade" ref={modalRef} tabIndex="-1" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Login</h5>
                            <button type="button" className="btn-close" onClick={hideModal} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h3 className="auth__title">Login</h3>
                            <form>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    className="auth__input"
                                    autoComplete="off"
                                />

                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    className="auth__input"
                                />

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                >
                                    Login
                                </button>

                                <div className="auth__social-networks">
                                    <p style={{margin: 1}}>Login with social networks</p>
                                    <div
                                        className="google-btn"
                                    >
                                        <div className="google-icon-wrapper">
                                            <img className="google-icon"
                                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                                alt="google button"/>
                                        </div>
                                        <p className="btn-text">
                                            <b>Sign in with google</b>
                                        </p>
                                    </div>
                                </div>
                                <Link
                                    className="link"
                                    to="/auth/register"
                                >
                                    Create new account
                                </Link>
                            </form>
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
