import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";
import grayBackground from "../../../img/gray-background-auth.png";
import { AuthTrouble } from "../alerts/AuthTrouble";


export const Signup = ({ hideModal, modalRef, showModalSignin }) => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('consumer');


    const handleRegister = async (event) => {
        event.preventDefault();
        setShow(false);
        const result = await actions.register({
            username: name + ' ' + lastname,
            email: email,
            password: password,
            role: role
        });

        if (!result && store.errorMessages) {
            handleMsgVisible();
        }
        else {
            handleMsgVisible();
            hideModal();
            showModalSignin();
        }
    }

    const handleMsgVisible = () => {
        setShow(true);
        setTimeout(() => {
            setShow(false);
            actions.resetEndPointsMsg();
        }, 4000);
    }


    return <>

        <div className="modal fade"
            id="exampleModalToggle2"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel2"
            tabIndex="-1"
            ref={modalRef}>
            <div className="modal-dialog modal-sm">
                <div className="modal-content" style={{ backgroundImage: `url(${grayBackground})`, backgroundSize: 'cover' }}>
                    <div className="modal-body">
                        {show && <AuthTrouble />}
                        <div className="modal-header border border-0 p-0 mb-3">
                            <h2 className="modal-title" style={{ color: "#071C3F" }}>Register</h2>
                            <button type="button" className="btn-close" onClick={hideModal} aria-label="Close"></button>
                        </div>
                        <form style={{ color: "#071C3F" }} className="needs-validation" noValidate>
                            <div className="row">
                                <div className="col">
                                    <div className="input-group-sm mb-3">
                                        <label
                                            className="form-label">
                                            Name
                                        </label>
                                        <input type="text"
                                            className="form-control"
                                            aria-describedby="name"
                                            required
                                            value={name}
                                            onChange={event => setName(event.target.value)}
                                        />
                                    </div>
                                    <div className="input-group-sm mb-3">
                                        <label
                                            className="form-label">
                                            Last name
                                        </label>
                                        <input type="text"
                                            className="form-control"
                                            aria-describedby="lastname"
                                            value={lastname}
                                            onChange={event => setLastname(event.target.value)}
                                        />
                                    </div>
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
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-check">
                                                <input className="form-check-input"
                                                    type="radio"
                                                    name="exampleRadios"
                                                    id="exampleRadios1"
                                                    value={role}
                                                    checked={role === "provider"}
                                                    onChange={() => setRole("provider")}
                                                />
                                                <label className="form-check-label" htmlFor="exampleRadios1">
                                                    Provider
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input"
                                                    type="radio" name="exampleRadios"
                                                    id="exampleRadios2"
                                                    value={role}
                                                    checked={role === "consumer"}
                                                    onChange={() => setRole("consumer")}
                                                />
                                                <label className="form-check-label" htmlFor="exampleRadios2">
                                                    Consumer
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="input-group-sm d-flex justify-content-end">
                                                <button type="button"
                                                    className="btn btn-link text-decoration-none shadow-none"
                                                    data-bs-target="#exampleModalToggle"
                                                    data-bs-toggle="modal">
                                                    Go to Sign-in.
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer border border-0 p-0">
                                <button type="button"
                                    className="btn btn-primary"
                                    style={{ backgroundColor: "#FBC006", border: "none", color: "#071C3F" }}
                                    onClick={event => handleRegister(event)}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
};
