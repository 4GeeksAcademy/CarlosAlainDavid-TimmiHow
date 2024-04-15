import React from "react";

const Badge = ({ image, title, description }) => {
    return (
        <div style={{ maxHeight: "100%" }} className="d-flex flex-column col-2 align-items-center justify-content-center gap-4">
            <img className="img-fluid resize-animation" src={image} />
            <h1 style={{ width: "105%", textAlign: "center"}} className="our-yellow">{title}</h1>
            <p style={{ textAlign: "center", wordWrap: "break-word", whiteSpace: "pre-wrap", wordBreak: "break-word", height:"50px" }} className="text-light">{description}</p>
        </div>
    )
}



export default Badge