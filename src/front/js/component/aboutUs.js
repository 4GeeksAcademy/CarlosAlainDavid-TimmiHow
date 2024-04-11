import React from "react"
import StudentNoDeco from "../../img/main-block-nodeco.png"

const AboutUs = () => {
    return (
        <div className="bg-light">
            <div className="container py-5">
                <div className="row justify-content-center align-items-center mb-5">
                    <div className="who-we-are col text-center">
                        <h2 className="Section-2"><span className="our-blue">Who we are</span></h2>
                    </div>
                </div>
                <div className="about-us-container container row d-flex justify-content-around align-items-between g-5">
                    <div className="col-lg-6">
                        <p className="Introductory-Text lead text-align-center">
                            Different country... new life... new challenges, right?
                            From knowing what to do or even where to start can certainly be something
                            worth learning and discovering. We're here to help guide you through all the basic knowledge
                            and skills you need to get yourself ready and confident for your life in this country.
                            Let's do this! We can make it!
                        </p>
                    </div>
                    <div className="col-lg-6 d-block position-relative">
                        <img
                            src={StudentNoDeco}
                            className="img-fluid"
                            alt="Bootstrap Themes"
                            style={{ position: 'absolute', top: '50%', right: '-40%', transform: 'translateY(-50%)' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default AboutUs
