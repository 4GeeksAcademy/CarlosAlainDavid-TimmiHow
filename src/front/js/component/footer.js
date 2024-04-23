import React from "react";
import FooterStyles from "../../styles/footer.css"
import LogoOutline from "../../img/timmihow-name-outline.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="d-flex justify-content-center bg-our-blue text-light">
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5 className="our-yellow pb-1">Academic</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="text-light nav-link p-0 text-body-secondary">
                    Our Courses
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="text-light nav-link p-0 text-body-secondary">
                    Our Tutors
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="text-light nav-link p-0 text-body-secondary">
                    Become a Timmihow Tutor
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="text-light nav-link p-0 text-body-secondary">
                    Student Testimonies
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link text-light p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5 className="our-yellow pb-1">Bussiness</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link text-light p-0 text-body-secondary">
                    Work with Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link text-light p-0 text-body-secondary">
                    Franchise
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link text-light p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link text-light p-0 text-body-secondary">
                    Legal Information
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link text-light p-0 text-body-secondary">
                    Timmihow for Companies
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5 className="our-yellow pb-1">Quick Links</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link text-light p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link text-light p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link text-light p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link text-light p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link text-light p-0 text-body-secondary">
                    Technical Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter!</h5>
                <p>Monthly digest of what's new to learn with Timmihow and our Community.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="subscribe-btn btn btn-warning" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex align-items-center flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <img src={LogoOutline} width="110px" />
            <p>© 2024 Timmihow, LLC All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <FontAwesomeIcon className="fs-2 text-light" icon={faTwitter} />
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                <FontAwesomeIcon className="fs-2 text-light" icon={faFacebook} />
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                <FontAwesomeIcon className="fs-2 text-light" icon={faInstagram} />
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                <FontAwesomeIcon className="fs-2 text-light" icon={faLinkedinIn} />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer