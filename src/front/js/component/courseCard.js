import React from "react";

const CourseCard = ({ image, description, price, sessionCount }) => {
    return (
        <div className="d-block" style={{
            width: "33%"
        }}>
            <img className="img-fluid" src={image} />
            <p>{description}</p>
            <div className="d-flex justify-content-between align-items-center">
                <p>Price: <span className="text-danger">USD$ </span>{price}</p>
                <p>Total of Sessions:{sessionCount}</p>
                <button className="btn btn-warning">Book class</button>
            </div>
        </div>
    )
}

export default CourseCard