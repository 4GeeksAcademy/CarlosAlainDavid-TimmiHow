import React, { useState } from "react";
import Metatron from "../../img/metatron.png"
import Burger from "../../img/burger.png"
import Flag from "../../img/flag.png"
import HeartPulse from "../../img/heart-pulse.png"
import PiggyBank from "../../img/piggy-bank.png"
import Scale from "../../img/scale.png"
import Toolbox from "../../img/toolbox.png"

const OurCourses = () => {
    const courseList = [
        { image: Flag, subtitle: "Immigration Law", description: "xxxxxxxxxxxsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssxxxxxxxx", x: "calc(50% - 61px)", y: "3%" },
        { image: PiggyBank, subtitle: "Personal Finances", description: "xxxxxxxxxxxxxxxxxxx", x: "calc(100% - 197px)", y: "22.2%" },
        { image: Scale, subtitle: "Legal Advice", description: "xxxxxxxxxxxxxxxxxxx", x: "calc(100% - 196px)", y: "60.3%" },
        { image: Toolbox, subtitle: "Day-by-Day How to's", description: "xxxxxxxxxxxxxxxxxxx", x: "calc(50% - 60px)", y: "79.4%" },
        { image: HeartPulse, subtitle: "Physical and Mental Health", description: "xxxxxxxxxxxxxxxxxxx", x: "calc(2% + 59px)", y: "60.2%" },
        { image: Burger, subtitle: "Home Bussiness", description: "xxxxxxxxxxxxxxxxxxx", x: "calc(2% + 58px)", y: "22.19%" }
    ]
    const [selection, setSelection] = useState()
    return (
        <div className="px-5">
            <div className="our-advantages col text-center pt-5">
                <h1 className="Section-3"><span className="font-size-headers our-blue">Our Courses</span></h1>
            </div>
            <div class="d-flex">
                <div style={{ position: "relative" }} className="col-6">
                    <img className="img-fluid pb-5" src={Metatron} />
                    {courseList.map((course, index) => <img onClick={() => setSelection(courseList[index])} style={{ width: 120, position: "absolute", top: course.y, left: course.x }} src={course.image} alt={course.subtitle} />)}
                </div>
                {selection && <div className="col-6 d-flex flex-column align-items-center mt-5">
                    <h2 className="fw-medium pb-5">{selection.subtitle}</h2>
                    <div className="card background-pink shadow p-3 col-lg-6"
                        style={{ marginBottom: "9%", borderRadius: "15px" }}>
                        <p className="Introductory-Text text-light lead fading text-align-center">
                            {selection.description} </p>
                    </div>
                    <button className="btn btn-warning">Book your first class!</button>
                </div>}
            </div>
        </div>
    )

}

export default OurCourses