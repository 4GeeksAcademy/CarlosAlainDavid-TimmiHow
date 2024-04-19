import React, { useState } from "react";
import { Link } from "react-router-dom";
import Metatron from "../../img/metatron.png"
import Burger from "../../img/burger.png"
import Flag from "../../img/flag.png"
import HeartPulse from "../../img/heart-pulse.png"
import PiggyBank from "../../img/piggy-bank.png"
import Scale from "../../img/scale.png"
import Toolbox from "../../img/toolbox.png"

const OurCourses = () => {
    const courseList = [
        { image: Flag, subtitle: "Immigration Law", description: "Explore the depths of Immigration Law with our specialized lessons. Designed for legal professionals and enthusiasts alike, our course offers a structured journey through visas, citizenship, asylum, and deportation procedures. Led by experienced instructors, our interactive sessions provide practical insights and discussions to navigate this complex field confidently. Join us and unravel the legal intricacies shaping migration to the United States.", x: "calc(50% - 61px)", y: "3%" },

        { image: PiggyBank, subtitle: "Personal Finances", description: "Dive into the world of Personal Finances with our comprehensive lessons. Whether you're striving for financial independence or seeking to manage your money more effectively, our courses provide essential knowledge and practical strategies to help you achieve your goals. From budgeting and saving to taxes, investments and retirement planning, our expert tutors will guide you through the fundamentals and empower you to make informed financial decisions. Join us and take control of your financial future!", x: "calc(100% - 197px)", y: "22.2%" },

        { image: Scale, subtitle: "Legal Advice", description: "Discover the fundamentals of United States legalities and laws with our engaging lessons. Perfect for beginners and those seeking a foundational understanding, our course covers essential topics such as the U.S. Constitution, branches of government, civil rights, and criminal law basics. Led by knowledgeable tutors and experts, our interactive sessions provide clear explanations and real-world examples to demystify the legal landscape.", x: "calc(100% - 196px)", y: "60.3%" },

        { image: Toolbox, subtitle: "Day-by-Day How to's", description: "Explore the practicalities of everyday life how to's with our series of simple lessons, which go from mastering household chores to advanced cooking techniques, organization tips, time management strategies and more! Whether you're a busy professional, a student, or someone simply looking to enhance your daily routines, our lessons provide practical guidance for a smoother, more efficient living.", x: "calc(50% - 60px)", y: "79.4%" },

        { image: HeartPulse, subtitle: "Physical and Mental Health", description: "Embark on a journey to holistic well-being with our physical and mental health lessons. Our courses blend practical exercises, mindfulness techniques, dieting and expert advice for physical and mental vitality. From fitness routines to stress management, our experienced tutors will guide you towards a healthier lifestyle. Prioritize your health and join us today!", x: "calc(2% + 59px)", y: "60.2%" },

        { image: Burger, subtitle: "Home Business", description: "Discover home business success with our tailored lessons. From crafting business plans to marketing strategies, our course equips you with the tools needed for entrepreneurial triumph. Join us and turn your home into a thriving business hub!", x: "calc(2% + 58px)", y: "22.19%" }
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
                    {/* <button className="btn btn-warning">Book your first class!</button> */}
                    <Link to={`topics/${selection.subtitle}`} className="btn btn-primary">
                        <button className="btn btn-warning">See Courses!</button>
                    </Link>
                </div>}
            </div>
        </div>
    )

}

export default OurCourses