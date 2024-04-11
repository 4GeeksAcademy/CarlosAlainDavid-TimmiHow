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
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto d-flex">
					{store.localStorageCheck && !store.token
						?<>
							<button type="button"
								className="btn btn-link text-decoration-none text-light shadow-none"
								onClick={showModalSignin}>
									Sign-in
								</button>
							<vr className="border border-light border-1 my-2" />
							<button type="button" 
								className="btn btn-link text-decoration-none text-light shadow-none" 
								onClick={showModalSignup}>
									Sign-up
							</button>
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
			showModalSignin={showModalSignin}
		/>
</>
};
