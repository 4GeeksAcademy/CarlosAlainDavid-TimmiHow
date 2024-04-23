import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CourseCard from "../../component/courseCard";
import Curso1 from "../../../img/Curso-1.jpg";
import Curso2 from "../../../img/Curso-2.jpg";
import Curso3 from "../../../img/Curso-3.jpg";
import Curso4 from "../../../img/Curso-4.jpg";
import Curso5 from "../../../img/Curso-5.jpg";
import Curso6 from "../../../img/Curso-6.jpg";
import Curso7 from "../../../img/Curso-7.jpg";
import Curso8 from "../../../img/Curso-8.jpg";
import Flag from "../../../img/flag.png";



export const Topics = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log(params.category)
    const recentlyAddedCourses = [{
        image: Curso1,
        description: "This course would provide an overview of the historical development of the immigration law in the U.S., including key legislation, agencies involved, and the basics of immigration processes and procedures.",
        price: 25,
        sessionCount: 5,
    }, {
        image: Curso2,
        description: "Focusing on the various categories of immigrant visas, this course would cover eligibility criteria, application procedures, and the pathways to obtaining lawful permanent residence (green card) in the U.S.",
        price: 20,
        sessionCount: 4
    }, {
        image: Curso3,
        description: "This course would explore the different types of nonimmigrant visas available for temporary visitors, students, workers, and other temporary residents. Topics would include visa categories, and compliance requirements.",
        price: 15,
        sessionCount: 5
    }, {
        image: Curso4,
        description: "Delving into humanitarian immigration law, this course would cover the legal framework for seeking asylum and refugee status in the U.S., including eligibility all requirements and procedures.",
        price: 20,
        sessionCount: 7
    }, {
        image: Curso5,
        description: "This course would examine the grounds for deportation and removal of noncitizens from the U.S., as well as the legal rights and defenses available to individuals facing removal proceedings.",
        price: 15,
        sessionCount: 5
    }, {
        image: Curso6,
        description: "This course would cover the immigration pathways available for skilled workers, professionals, or investors seeking employment-based immigration benefits in the U.S., including eligibility and certification requirements.",
        price: 15,
        sessionCount: 5
    }, {
        image: Curso7,
        description: "Focusing on family reunification, this course would explore the various family-based immigration categories, eligibility requirements, sponsorship obligations, and the process for obtaining family-based visas and green cards.",
        price: 15,
        sessionCount: 7
    },{
        image: Curso8,
        description: "Empower immigrants to navigate U.S. roads with confidence in our specialized course, covering traffic rules, driving skills, and DMV procedures for obtaining a driver's license.",
        price: 23,
        sessionCount: 3
    }, {
        image: Curso1,
        description: "This course would provide an overview of the historical development of the immigration law in the U.S., including key legislation, agencies involved, and the basics of immigration processes and procedures.",
        price: 25,
        sessionCount: 5
    }]
    console.log(store.token)
    const [activeIdx, setActiveIdx] = useState(0)
    const [carouselItemList, setCarouselItemList] = useState([])
    useEffect(() => {
        for (let i = 0; i < Math.ceil(recentlyAddedCourses.length / 3); i++) {

            setCarouselItemList((car) => car && [...car, 1])
        }
    }, [])

    return <div className="px-5 py-5 mt-2">
        <div className="d-flex align-items-center">
            <div className="col-3"><img className="img-fluid rounded-circle" src={Flag} /></div>
            <div className="col-10 d-flex flex-column">
                <h1 className="mb-4">{params.category}</h1>
                <iframe width="600" height="400" src="https://www.youtube.com/embed/ym33y3qhCLc" title="Welcome to TimmiHow!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <hr></hr>
        <div>
            <div className="d-flex align-items-center">
                <h3>Featured Courses</h3>
                <h3 className="mx-2">|</h3>
                <h3>All Courses</h3>
                <h3 className="mx-2">|</h3>
                <form className="d-flex" role="search">
                    <button className="btn btn-outline-warning me-2" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                </form>
            </div>
            <hr></hr>
            <div className="row">
                <h2>Recently Added Courses</h2>
                <div className="carousel slide">
                    <div className="carousel-inner">
                        {carouselItemList.map((item, index) => {
                            const courseIterIdx = index * 3
                            return <div className={`carousel-item ${index == activeIdx && "active"}`}>
                                <div className="d-flex gap-4">
                                    {courseIterIdx <= recentlyAddedCourses.length - 1 && <CourseCard image={recentlyAddedCourses[courseIterIdx].image} description={recentlyAddedCourses[courseIterIdx].description} price={recentlyAddedCourses[courseIterIdx].price} sessionCount={recentlyAddedCourses[courseIterIdx].sessionCount} />}

                                    {courseIterIdx + 1 <= recentlyAddedCourses.length - 1 && <CourseCard image={recentlyAddedCourses[courseIterIdx + 1].image} description={recentlyAddedCourses[courseIterIdx + 1].description} price={recentlyAddedCourses[courseIterIdx + 1].price} sessionCount={recentlyAddedCourses[courseIterIdx + 1].sessionCount} />}

                                    {courseIterIdx + 2 <= recentlyAddedCourses.length - 1 && <CourseCard image={recentlyAddedCourses[courseIterIdx + 2].image} description={recentlyAddedCourses[courseIterIdx + 2].description} price={recentlyAddedCourses[courseIterIdx + 2].price} sessionCount={recentlyAddedCourses[courseIterIdx + 2].sessionCount} />}
                                </div>
                            </div>
                        }
                        )}
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                            onClick={() => setActiveIdx(state => state > 0 && state - 1 || 0)}
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                            onClick={() => { setActiveIdx(state => state < carouselItemList.length - 1 && state + 1 || 0) }}
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    </div>

}
