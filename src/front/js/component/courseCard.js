import React from "react";

const CourseCard = ({image,description,price,sessionCount}) => {
return (
    <div>
        <img src={image}/>
        <p>{description}</p>
        <div className="d-flex">
            <p>Price: <span className="text-danger">USD$ </span>{price}</p>
            <p>Total of Sessions:{sessionCount}</p>
            <button className="btn btn-warning">Book class</button>
        </div>
    </div>
)
}

export default CourseCard