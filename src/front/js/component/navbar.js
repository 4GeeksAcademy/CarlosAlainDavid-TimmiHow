import React, { useContext, useRef } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Signin } from "./auth/Signin";
import { Signup } from "./auth/Signup";
import Logo from "../../img/timmihow-name-xs.png";

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
								className="
									btn btn-link 
									text-decoration-none 
									text-light 
									shadow-none"
								onClick={showModalSignin}>
									Sign-in
								</button>
							<vr className="
									border 
									border-light 
									border-1 
									my-2" />
							<button type="button" 
								className="
									btn btn-link 
									text-decoration-none 
									text-light 
									shadow-none" 
								onClick={showModalSignup}>
									Sign-up
							</button>
						</>
						:<>
						<div className="text-light fs-6 d-flex align-items-center me-3
						animate__animated an<p claimate__pulse">
							Alain Estrada
						</div>
						<vr className="
									border 
									border-light 
									border-1 
									my-2" />
						<button className="
									btn btn-link 
									text-decoration-none 
									text-light 
									shadow-none" 
								onClick={(event)=>{actions.logUserOut()}}>
								Logout
						</button>
						</>
					}
				</div>
				
				<div className="Navbar-bottom w-100 d-flex align-items-center justify-content-between gap-2 px-3 py-2">
					<div style={{width:"7%"}}>
						<img className= "img-fluid" src={Logo}/>
					</div>
				</div>
				<ul className="navbar-nav our-blue d-flex flex-row gap-3 fw-medium fs-4">
					<li className="nav-item">
						<a className="nav-link active" aria-current="page" href="#">
							Who are we
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Our Advantages
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Our Courses
						</a>
					</li>
				</ul>
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
