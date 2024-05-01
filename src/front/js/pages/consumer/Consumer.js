import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { InlineWidget } from "react-calendly";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CourseCard from "../../component/courseCard";
import curso1 from '../../../img/Curso-1.jpg'
import cursociudadania from '../../../img/cursociudadania1.png'
import examenuscis from '../../../img/cursociudadania2.png'
import gobiernoehistoria from '../../../img/cursociudadania3.png'
import entrevista from '../../../img/cursociudadania4.png'

export const Consumer = () => {
    const { store, actions } = useContext(Context);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return <>
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <h1 style={{ fontWeight: 'bold', paddingBottom: '20px' }}>My Courses</h1>
                    <Carousel responsive={responsive}>
                        <CourseCard width="95%" image={cursociudadania} description={<span style={{ fontWeight: 'bold' }}>SOLICITUD DE LA CIUDADANÍA</span>} sessionCount={2} />
                        <CourseCard width="95%" image={examenuscis} description={<span style={{ fontWeight: 'bold' }}>LAS 100 PREGUNTAS DE USCIS</span>} sessionCount={2} />
                        <CourseCard width="95%" image={gobiernoehistoria} description={<span style={{ fontWeight: 'bold' }}>HISTORIA Y GOBIERNO</span>} sessionCount={2} />
                        <CourseCard width="95%" image={entrevista} description={<span style={{ fontWeight: 'bold' }}>LA ENTREVISTA</span>} sessionCount={2} />
                    </Carousel>
                </div>
            </div>
            <div class="row" style={{ paddingTop: '20px' }}> {/* Añade padding superior aquí */}
                <h2 style={{ fontWeight: 'bold' }}>Programa tus clases</h2>
                <div className="App">
                    <InlineWidget styles={{ height: "80vh" }} url="https://calendly.com/aestradap17/30min" />
                </div>
            </div>
        </div>
    </>
};
