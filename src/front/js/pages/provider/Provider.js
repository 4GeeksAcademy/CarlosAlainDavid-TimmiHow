import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { InlineWidget } from "react-calendly";

export const Provider = () => {
    const { store, actions } = useContext(Context);
    const [accordionOpen, setAccordionOpen] = useState(false);

    const toggleAccordion = () => {
        setAccordionOpen(!accordionOpen);
    };

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-6">
                    <h1>Your Courses</h1>
                    <div class="accordion" id="accordionProvider">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    1. Solicitud de la ciudadanía
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">
                                    <strong>Objetivos:</strong> Aprenderá cómo completar todos los formularios de naturalización requeridos
                                    emitidos por el Departamento de Servicio e Inmigración de Ciudadanía de los Estados Unidos (USCIS) por:
                                    <br />
                                    <strong>Asegurar que todos los requisitos para la ciudadanía puedan y seán completados.</strong>
                                    <br />
                                    <strong>Llenado y verificación de los formularios 'N 400'.</strong>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    2. Las 100 preguntas de USCIS
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                <div class="accordion-body">
                                    El instructor proporcionará
                                    <br />
                                    <strong>Una lista de 100 preguntas de muestra en el examen</strong>
                                    <strong>Orientación para producir respuestas organizadas y completas a preguntas sobre ciudadanía. </strong>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    3. Historia y Gobierno de los EE.UU.
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                <div class="accordion-body">
                                    Se entregará información sobre el gobierno de los Estados Unidos que incluye:<br />
                                    <strong>Cómo funciona el gobierno de la ciudad, el condado y el estado</strong>
                                    <br />
                                    <strong>Funcionarios municipales, locales y estatales electos</strong>
                                    <br />
                                    <strong>Los primeros asentamientos y crecimiento de las colonias.</strong><br />
                                    <strong>La guerra revolucionaria</strong><br />
                                    <strong>La Declaración de Independencia y redacción de la Constitución de EE. UU.</strong><br />
                                    <strong>Abraham Lincoln y la Guerra Civil</strong> <br />
                                    <strong>Estados Unidos en el siglo XX</strong> <br />
                                    <strong>Martin Luther King, Jr. y el movimiento de derechos civiles</strong> <br />
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                    4. La entrevista de USCIS
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                                <div class="accordion-body">
                                    La clase cubrirá los requisitos básicos de fluidez en inglés, que incluyen:<br />
                                    <strong>Ejemplos de frases de dictado.</strong>
                                    <br />
                                    <strong>Práctica de entrevista de ciudadanía.</strong>
                                    <br />
                                    <strong>La ceremonia de naturalización y el juramento de lealtad.</strong><br />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-6">
                    <h1>Your Students</h1>

                    <div class="accordion" id="accordionStudents">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Estudiantes Activos (Clases en curso)
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="list-group">
                                        <a href="#" class="list-group-item list-group-item-action list-group-item-primary">Ernesto Medina</a>
                                        <a href="#" class="list-group-item list-group-item-action list-group-item-primary">Nancy Cambell</a>
                                        <a href="#" class="list-group-item list-group-item-action list-group-item-primary">Margarita Flores</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Estudiantes Inactivos (Clases Finalizadas)
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="list-group">
                                        <a href="#" class="list-group-item list-group-item-action list-group-item-success">Gabriel Garcia</a>
                                        <a href="#" class="list-group-item list-group-item-action list-group-item-success">Isabel Allende</a>
                                        <a href="#" class="list-group-item list-group-item-action list-group-item-success">Alfonsina Storni</a>
                                        <a href="#" class="list-group-item list-group-item-action list-group-item-success">Mario Benedeti</a>
                                        <a href="#" class="list-group-item list-group-item-action list-group-item-success">Gabriela Mistral</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Estudiantes Pendientes (Clases pendientes)
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="list-group">
                                        <a href="#" class="list-group-item list-group-item-action list-group-item-danger">Mario Duarte</a>
                                        <a href="#" class="list-group-item list-group-item-action list-group-item-danger">Andrea Echeverry</a>
                                        <a href="#" class="list-group-item list-group-item-action list-group-item-danger">Juan Esteban Aristizabal</a>
                                        <a href="#" class="list-group-item list-group-item-action list-group-item-danger">Julieta Venegas</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ paddingTop: '50px' }}>
                <h2 style={{ fontWeight: 'bold' }}>Gestionar mis schedules</h2>
            </div>
            <div className="row">
                <div className="col">
                    <InlineWidget styles={{ height: "80vh" }} url="https://calendly.com/timmihow87" />
                </div>
            </div>
        </div>
    );
};
