import React from "react"
import StudentnoDeco from "../../img/main-block-nodeco.png"
import GrayBg from "../../img/gray-background.png"

const AboutUs = () => {
    return (
        <div className="bg-light">
            <div className="container py-5">
                <div className="row justify-content-center align-items-center mb-5">
                    <div className="col text-center">
                        <h2 className="Who-we-Are">Who we are</h2>
                    </div>
                </div>
                <div className="row d-flex justify-content-between align-items-center g-5">
                    <div className="col-lg-6">
                        <p className="Introductory-Text lead">
                            Different country... new life... new challenges, right?
                            From knowing what to do or even where to start can certainly be something
                            worth learning and discovering. We're here to help guide you through all the basic knowledge
                            and skills you need to get yourself ready and confident for your life in this country.
                            Let's do this! We can make it!
                        </p>
                    </div>
                    <div>
                        <div className="col-lg-6 position-absolute ms-lg-auto img-fluid">
                            <img
                                src={StudentnoDeco}
                                className="img-fluid"
                                alt="Bootstrap Themes"
                                style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translateY(-100%)' }}
                            />
                        </div>
                        <div className="col-lg-6 d-block ms-lg-auto img-fluid">
                            <img
                                src={GrayBg}
                                className="img-fluid"
                                alt="Bootstrap Themes"
                                />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default AboutUs
