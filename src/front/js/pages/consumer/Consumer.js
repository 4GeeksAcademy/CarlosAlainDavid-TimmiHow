import React, { useState, useContext, useEffect } from "react";
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
    const [courses, setCourses] = useState([]);
    const [calendlyUrl, setCalendlyUrl] = useState('https://calendly.com/aestradap17/30min');


    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const myCourses = await actions.getCustomerCourses(1);
                if (!myCourses) {
                    console.log("Error cargando los cursos.");
                } else {
                    setCourses(myCourses);
                }
            } catch (error) {
                console.log("Error:", error);
            }
        };

        fetchCourses();
    }, []);

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
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <h1 style={{ fontWeight: 'bold', paddingBottom: '20px' }}>My Courses</h1>
                    <Carousel responsive={responsive}>

                        {courses.map((item, index) => {
                            return <div className="card">
                                <CourseCard width="95%"
                                    consumer={true}
                                    calendlyUrl={item.calendly_url}
                                    setCalendlyUrl={() => setCalendlyUrl()}
                                    image={item.image}
                                    description={<span style={{ fontWeight: 'bold' }}>{item.author}</span>}
                                    sessionCount={item.sessionCount}
                                />
                            </div>

                        })}
                    </Carousel>
                </div>
            </div>
            <div className="row" style={{ paddingTop: '20px' }}> {/* Añade padding superior aquí */}
                <h2 style={{ fontWeight: 'bold' }}>Programa tus clases</h2>
                <div className="App">
                    <InlineWidget styles={{ height: "80vh" }} url={calendlyUrl} />
                </div>
            </div>
        </div>
    </>
};
