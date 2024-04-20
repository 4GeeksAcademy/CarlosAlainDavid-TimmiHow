import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CourseCard from "../../component/courseCard";


export const Topics = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const recentlyAddedCourses = [{
        image: "https://placehold.co/600x400",
        description: "textssssssssssssssssssssssssssssssssssssss0",
        price: 25,
        sessionCount: 5,
    }]
    console.log(store.token)

    return <div className="px-5 py-5 mt-2">
        <div className="d-flex align-items-center">
            <div className="col-3"><img className="rounded-circle" src="https://placehold.co/400x400" /></div>
            <div className="col-10 d-flex flex-column">
                <h1 className="mb-4">Category</h1>
                <iframe width="600" height="400" src="https://www.youtube.com/embed/dMlvMsGRouM" title="Judas Priest - Crown of Horns (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
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
            <div className="row">
                <h2>Recently Added Courses</h2>
                {recentlyAddedCourses.map((course) => <CourseCard image={course.image} description={course.description} price={course.price} sessionCount={course.sessionCount} />)}
            </div>
        </div>
    </div>

}
