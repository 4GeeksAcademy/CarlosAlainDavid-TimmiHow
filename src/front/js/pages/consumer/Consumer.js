import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { InlineWidget } from "react-calendly"

export const Consumer = () => {
    const { store, actions } = useContext(Context);

    return <>
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <h1>Your Courses</h1>
                    <p>aki se va a mostrar un listado con los cursos q eh visitado leido y actualmente tengo agendado meetings.</p>
                </div>
            </div>
            <div class="row">
                <p>aca se muestra el calendly para el tema escogido en el listado</p>
                <div className="App">
                    <InlineWidget url="https://calendly.com/aestradap17/30min" />
                </div>
            </div>
        </div>
    </>
};
