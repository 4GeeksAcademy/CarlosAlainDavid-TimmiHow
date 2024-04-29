import React from "react";

const CourseCard = ({ image, description, price, sessionCount }) => {
    return <>
        <div className="card">
            <div class="img-wrapper">
                <img src={image} className=" img-fluid d-block w-100" alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title">{"This is the Title"}</h5>
                <p className="card-text">{description}</p>
                <button className="btn btn-warning">Book class</button>
            </div>
        </div>
        {/* <div className="d-block" style={{ width: "33%" }}>

            <img className="img-fluid" src={image} />
            <p>{description}</p>
            <div className="d-flex justify-content-between align-items-center">
                <p>Price: <span className="text-danger">USD$ </span>{price}</p>
                <p>Total of Sessions:{sessionCount}</p>
                <button className="btn btn-warning">Book class</button>
            </div>
        </div> */}
    </>




}

export default CourseCard