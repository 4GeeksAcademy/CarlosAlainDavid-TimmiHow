import React from "react";

const CourseCard = ({ image, description, price, sessionCount, width, flex }) => {
    return (
        <div className={!flex && "d-block" || "d-flex flex-column align-items-center"} style={{
            width: width && width || "33%"
        }}>
            <img className="img-fluid" src={image} />
            <p>{description}</p>
            <div className="d-flex justify-content-between align-items-center">
                {price && <p>Price: <span className="text-danger">USD$ </span>{price}</p>}
                <p>Total of Sessions:{sessionCount}</p>
                <button className="btn btn-warning">Book class</button>
            </div>
        </div>
    )
}

export default CourseCard