import React from "react";

const CourseCard = ({ title, image, description, price, sessionCount }) => {
    return <>

        
        <div class="img-wrapper">
        <img src={image} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-warning">Book class</a>
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