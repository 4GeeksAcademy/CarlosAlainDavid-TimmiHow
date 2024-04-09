import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/timmihow-name-xs.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light pt-0">
			<div className="Navbar-top w-100 d-flex align-items-center justify-content-end gap-2 px-3 py-2">
				<p className="m-0">Register</p>
				<span>|</span>
				<p className="m-0">Login</p>
			</div>
			<div className="Navbar-bottom w-100 d-flex align-items-center justify-content-between gap-2 px-3 py-2">
				<div style={{width:"7%"}}>
					<img className= "img-fluid" src={Logo}/>
				</div>
				<ul className="navbar-nav d-flex flex-row gap-3 fw-medium fs-4">
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
	);
};
