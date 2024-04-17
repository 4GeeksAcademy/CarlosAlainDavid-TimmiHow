import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { InlineWidget } from "react-calendly"

export const Provider = () => {
    const { store, actions } = useContext(Context);

    return <>
        <div class="container text-center">
            <div class="row">
                <div class="col-6">
                    <h1>Your Courses</h1>
                </div>
                <div class="col-6">
                    <h1>Your Clients</h1>
                    <p>este listado de consumers o estudiantes sirve para ver el perfil de cada uno y poder anadirle apuntes q me sirvan de quia estos apuntes no los ve el consumer.</p>
                </div>
            </div>
            <div class="row">
                <h1>gestionar mis schedules</h1>
                <div className="App">
                    <InlineWidget url="https://calendly.com/aestradap17" />
                </div>
            </div>
        </div>
    </>
};
