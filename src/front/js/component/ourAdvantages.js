import React from "react"
import CheckBadge from "../../img/check-badge.png"
import RotatingGear from "../../img/rotating-gear.png"
import Clock from "../../img/clock.png"
import SupportiveHands from "../../img/supportive-hands.png"

const OurAdvantages = () => {
    return (
        <div className="our-pink">
            <div className="px-5 py-5">
                <div className="row justify-content-center align-items-center mb-3">
                    <div className="our-advantages col text-center">
                        <h1 className="Section-3"><span className="font-size-headers light">Our Advantages</span></h1>
                    </div>
                </div>
                <div className="our-advantages-container d-flex justify-content-between align-items-center">
                    <div className="card card-background shadow p-3 col-lg-6"
                    style={{marginBottom: "9%", borderRadius: "15px" }}>
                        <p className="Introductory-Text text-light lead fading text-align-center">
                            Different country... new life... new challenges, right?
                            From knowing what to do or even where to start can certainly be something
                            worth learning and discovering. We're here to help guide you through all the basic knowledge
                            and skills you need to get yourself ready and confident for your life in this country.
                            Let's do this! We can make it!
                        </p>
                    </div>
                    <div className="col-lg-6 d-block">
                        <img
                            src={StudentNoDeco}
                            className="img-fluid"
                            alt="Bootstrap Themes"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default OurAdvantages
