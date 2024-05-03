import React, { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Signin } from "./auth/Signin";

const CourseCard = ({ consumer, calendlyUrl, title, image, description, price, sessionCount }) => {

    const { store, actions } = useContext(Context);
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
        if (!consumer) {
            if (store.localStorageCheck && !store.token) {
                showModalSignin();
            } else if (store.role === "consumer") {
                navigate('/consumer');
            } else navigate('/provider');
        } else {
            actions.setCalendlyUrl(calendlyUrl);
            // setCalendlyUrl(calendlyUrl);
        }

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
    </>




}

export default CourseCard