import React from "react"
import WomanHero from "../../img/woman-hero.png"
import WomanDeco from "../../img/woman-deco.png"


const Hero = () => {
return (
    <div className="col-xxl-12">
  <div className="row flex-lg-row-reverse justify-content-between align-items-center g-5">
    <div className="position-relative col-10 col-sm-8 col-lg-6">
      <img
        src={WomanDeco}
        className="translate-middle position-absolute d-block ms-lg-auto img-fluid"
        style={{zIndex: -1, top: "51%", left: "55%"}}
        alt="Bootstrap Themes"
        width={700}
        height={500}
        loading="lazy"
      />
      <img
        src={WomanHero}
        className="Woman-Hero d-block ms-lg-auto img-fluid"
        alt="Bootstrap Themes"
        width={700}
        height={500}
        loading="lazy"
      />
    </div>
    <div className="col-lg-6">
      <h1 className="Hero-Title display-5 fw-bold text-body-emphasis lh-1 mb-3">
        Welcome to Timmihow! More than a school, a helping hand for the immigrant to the United States.
      </h1>
      <p className="Introductory-Text lead">
        Quickly design and customize responsive mobile-first sites with
        Bootstrap, the world’s most popular front-end open source toolkit,
        featuring Sass variables and mixins, responsive grid system, extensive
        prebuilt components, and powerful JavaScript plugins.
      </p>
      </div>
  </div>
</div>

) 


}

export default Hero