import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { useParams } from "react-router-dom";


export const Topics = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();


    return <>
        <h1>Aki van los cursos</h1>
    </>
};
