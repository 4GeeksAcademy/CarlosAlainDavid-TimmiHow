import React from "react"
import WomanHero from "../../img/woman-hero.png"
import WomanDeco from "../../img/woman-deco.png"


const Hero = () => {
  return (
    <div className="px-5 col-xxl-12">
      <div className="row flex-lg-row-reverse justify-content-between align-items-center g-5">
        <div className="position-relative col-10 col-sm-8 col-lg-6">
          <img
            src={WomanDeco}
            className="translate-middle position-absolute d-block ms-lg-auto img-fluid"
            style={{ zIndex: -1, top: "51%", left: "55%" }}
            alt="Bootstrap Themes"
            width={700}
            height={500}
            loading="lazy"
          />
          <img
            src={WomanHero}
            className="fading d-block ms-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="Hero-Title display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Welcome to <span className="our-yellow">Timmihow! </span> A helping hand for the immigrant to the <span className="our-pink">United States. </span>
          </h1>
          <p className="Introductory-Text lead">
            Different country... new life... new challenges, right?
            From knowing what to do or even where to start can certainly be something
            worth learning and discovering. We're here to help you guide through all the basic knowledge
            and skills you need to get yourself ready and confident for your life in this country.
            Let's do this! We can make it!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero