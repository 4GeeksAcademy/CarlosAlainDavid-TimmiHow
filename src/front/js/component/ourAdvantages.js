import React from "react"
import Badge from "./badge"
import CheckBadge from "../../img/check-badge.png"
import RotatingGear from "../../img/rotating-gear.png"
import Clock from "../../img/clock.png"
import SupportiveHands from "../../img/supportive-hands.png"

const OurAdvantages = () => {
    const ImageList = [{
        image: CheckBadge,
        title: "Verified Tutors",
        description: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    },
    {
        image: RotatingGear,
        title: "Reliable Content",
        description: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    },
    {
        image: Clock,
        title: "Time Flexibility",
        description: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    },
    {
        image: SupportiveHands,
        title: "Support",
        description: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    },
    ]

    return (
        <div className="background-pink">
            <div className="px-5 py-5">
                <div className="row justify-content-center align-items-center mb-3">
                    <div className="our-advantages col text-center">
                        <h1 className="Section-3"><span className="font-size-headers our-yellow">Our Advantages</span></h1>
                    </div>
                </div>
                <div className="our-advantages-container d-flex justify-content-between align-items-center">
                    {ImageList.map(badge => <Badge image={badge.image} title={badge.title} description={badge.description} />)}
                </div>
            </div>
        </div>
    )
}



export default OurAdvantages
