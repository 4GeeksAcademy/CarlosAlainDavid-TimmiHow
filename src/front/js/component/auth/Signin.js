import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";
import grayBackground from "../../../img/gray-background-auth.png";
import { AuthTrouble } from "../alerts/AuthTrouble";
import "../../../styles/auth.css";

export const Signin = ({ hideModal, modalRef }) => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        setShow(false);
        const response = await actions.logIn({
            email: email,
            password: password
        });

        if (response === true) {
            navigate("/consumer");
            hideModal();
        }
        else {
            handleVisible();
        }
    }

    const handleVisible = () => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 5000);
    }

    return <>
        <div className="modal fade"
            id="exampleModalToggle"
            aria-labelledby="exampleModalToggleLabel"
            aria-hidden="true"
            data-bs-backdrop='static'
            tabindex="-1"
            ref={modalRef}>
            <div className="modal-dialog modal-sm">
                <div className="modal-content" style={{ backgroundImage: `url(${grayBackground})`, backgroundSize: 'cover' }}>
                    <div className="modal-body">
                        {show && <AuthTrouble alertMsg={"Somenthing wrong with the login, please try again."} />}
                        <div className="modal-header border border-0 p-0 mb-3">
                            <h2 className="modal-title" style={{ color: "#FBC006" }}>SignIn</h2>
                            <button type="button" className="btn-close" onClick={hideModal} aria-label="Close"></button>
                        </div>
                        <div className="row">
                            <div className="col">
                                <form style={{ color: "#071C3F" }}>
                                    <div className="input-group-sm mb-3">
                                        <label
                                            className="form-label">
                                            Email address
                                        </label>
                                        <input type="email"
                                            className="form-control"
                                            aria-describedby="emailHelp"
                                            value={email}
                                            onChange={event => setEmail(event.target.value)}
                                        />
                                    </div>
                                    <div className="input-group-sm mb-3">
                                        <label
                                            className="form-label">
                                            Password
                                        </label>
                                        <input type="password"
                                            className="form-control"
                                            value={password}
                                            onChange={event => setPassword(event.target.value)}
                                        />
                                        <div className="input-group-sm d-flex justify-content-end">
                                            <button type="button"
                                                className="btn btn-link text-decoration-none shadow-none"
                                                data-bs-target="#exampleModalToggle2"
                                                data-bs-toggle="modal">
                                                New here? Go to sign-up!!
                                            </button>
                                        </div>
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
                                style={{ backgroundColor: "#D43381", border: "none" }}
                                onClick={event => handleLogin(event)}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};
