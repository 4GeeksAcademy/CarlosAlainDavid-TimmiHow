import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";
import grayBackground from "../../../img/gray-background-auth.png";
import { AuthTrouble } from "../alerts/AuthTrouble";

export const Signup = ({ hideModal, modalRef }) => {
  
  const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const [ show, setShow ] = useState(false);
    const [ name, setName ] = useState('');
    const [ lastname, setLastname ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
    const [ role, setRole ] = useState('consumer');


  const handleRegister = async(event) => {
		event. preventDefault();
		setShow(false);
		const response = await actions.register({
            username: name +' '+ lastname,
			email: email, 
			password: password,
            role: role
		});

		
        if(response.status !== 201){
            alert(response.body.error)
            console.log(response.body.error)
            handleVisible();
		}
		else{
            navigate("/login");
		} 
	}

    const handleVisible = () => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 4000);
    } 


	return <>
   
    <div className="modal fade" 
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2" 
        tabindex="-1"
        ref={modalRef}>
        <div className="modal-dialog modal-sm">
        <div className="modal-content" style={{backgroundImage: `url(${grayBackground})`,  backgroundSize:'cover'}}>
            <div className="modal-body">  
                { show && <AuthTrouble alertMsg={"Somenthing wrong with the Register process, please try again."} /> }
                <div className="modal-header border border-0 p-0 mb-3">
                    <h2 className="modal-title" style={{color:"#071C3F"}}>Register</h2>
                    <button type="button" className="btn-close" onClick={hideModal} aria-label="Close"></button>
                </div>
                <div className="row">
                    <div className="col">
                        <form style={{color:"#071C3F"}}>
                            <div className="input-group-sm mb-3">
                                <label      
                                    className="form-label">
                                        Name
                                </label>
                                <input type="text"
                                    className="form-control"
                                    aria-describedby="name"
                                    value={ name }
                                    onChange={ event => setName(event.target.value) }
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
                                    value={ lastname }
                                    onChange={ event => setLastname(event.target.value) }
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
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="form-check">
                                        <input class="form-check-input" 
                                            type="radio" 
                                            name="exampleRadios" 
                                            id="exampleRadios1" 
                                            value={role}
                                            checked={role === "provider"}
                                            onChange={ () => setRole("provider") }
                                        />
                                        <label class="form-check-label" for="exampleRadios1">
                                            Provider
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" 
                                            type="radio" name="exampleRadios" 
                                            id="exampleRadios2" 
                                            value={role}
                                            checked={role === "consumer"}
                                            onChange={ () => setRole("consumer") }
                                        />
                                        <label class="form-check-label" for="exampleRadios2">
                                            Consumer
                                        </label>
                                    </div>
                                </div>
                                <div class="col">
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
                        </form>
                    </div>
                </div>
                <div className="modal-footer border border-0 p-0">
                    <button type="button"
                        className="btn btn-primary"
                        style={{backgroundColor:"#FBC006",  border:"none", color:"#071C3F"}}
                        onClick={ event => handleRegister(event) }>
                            Submit
                    </button>
                </div>
              </div>
          </div>
      </div>
    </div>
  </>
};
