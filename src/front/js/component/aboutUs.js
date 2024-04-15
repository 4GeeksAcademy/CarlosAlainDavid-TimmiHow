import React from "react"
import StudentNoDeco from "../../img/main-block-nodeco.png"

const AboutUs = () => {
    return (
        <div className="bg-light">
            <div className="px-5 py-5">
                <div className="row justify-content-center align-items-center mb-3">
                    <div className="who-we-are col text-center">
                        <h1 className="Section-2"><span className="font-size-headers our-pink">Who we are</span></h1>
                    </div>
                </div>
                <div className="about-us-container d-flex justify-content-between align-items-center">
                    <div className="card card-background shadow p-3 col-lg-6"
                        style={{ marginBottom: "9%", borderRadius: "15px" }}>
                        <p className="Introductory-Text text-light lead fading text-align-center">
                            We are the first educational portal for immigrants to the United States. We're a dedicated team committed to empowering you with
                            tailored lessons and expert guidance. Through Timmihow, both experts in different fields and eager students,we bridge the gap
                            between your dreams and reality, ensuring every step forward is purposeful. Join our
                            community and let's make your new life aspirations a reality together!"
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



export default AboutUs
