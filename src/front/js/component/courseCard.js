import React, { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Signin } from "./auth/Signin";

const CourseCard = ({ title, image, description, price, sessionCount }) => {

    const { store } = useContext(Context);
    const navigate = useNavigate();
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
        const bsModal = bootstrap.Modal.getInstance(modalEle)
        bsModal.hide()
    }

    const handleEntry = () => {
        if (store.authenticatedUser === undefined) {
            showModalSignin();
        } else if (store.authenticatedUser.role === "consumer") {
            navigate('/consumer');
        } else navigate('/provider');
    }

    return <>
        <div className="img-wrapper">
            <img src={image} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <button type="button"
                className="btn btn-warning"
                onClick={() => handleEntry()}>
                Book class
            </button>
        </div>

        <Signin
            modalRef={modalRefSignin}
            hideModal={hideModalSignin}
        />

        {/* <Signup
			modalRef={modalRefSignup}
			hideModal={hideModalSignup}
			showModalSignin={showModalSignin}
		/> */}

        {/* <div className="d-block" style={{ width: "33%" }}>

            <img className="img-fluid" src={image} />
            <p>{description}</p>
            <div className="d-flex justify-content-between align-items-center">
                <p>Price: <span className="text-danger">USD$ </span>{price}</p>
                <p>Total of Sessions:{sessionCount}</p>
                <button className="btn btn-warning">Book className</button>
            </div>
        </div> */}
    </>




}

export default CourseCard