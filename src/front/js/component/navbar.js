import React, { useContext, useRef } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Signin } from "./auth/Signin";
import { Signup } from "./auth/Signup";

export const Navbar = () => {
	 
	const { store, actions } = useContext(Context);

    const modalRefSignin = useRef()
    
    const showModalSignin = () => {
        const modalEle = modalRefSignin.current
        const bsModal = new bootstrap.Modal(modalEle, {
            backdrop: 'static',
            keyboard: false
        })
        bsModal.show();
    }
    
    const hideModalSignin = () => {
        const modalEle = modalRefSignin.current
        const bsModal= bootstrap.Modal.getInstance(modalEle)
        bsModal.hide()
    }

	const modalRefSignup = useRef()
    
    const showModalSignup = () => {
        const modalEle = modalRefSignup.current
        const bsModal = new bootstrap.Modal(modalEle, {
            backdrop: 'static',
            keyboard: false
        })
        bsModal.show();
    }
    
    const hideModalSignup = () => {
        const modalEle = modalRefSignup.current
        const bsModal= bootstrap.Modal.getInstance(modalEle)
        bsModal.hide()
    }


	return <>
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{store.localStorageCheck && !store.token
						?<>
							<button type="button" className="btn btn-primary" onClick={showModalSignin}>Log-in</button>
							<button type="button" className="btn btn-primary" onClick={showModalSignup}>Log-out</button>
						</>
						:<button className="btn btn-primary me-2"
									onClick={(event)=>{actions.logUserOut()}}
							>
								Logout
						</button>
					}
				</div>
			</div>
		</nav>

		<Signin 
			modalRef={modalRefSignin}
			hideModal={hideModalSignin}
		/>
		<Signup  
			modalRef={modalRefSignup}
			hideModal={hideModalSignup}
		/>
</>
};
