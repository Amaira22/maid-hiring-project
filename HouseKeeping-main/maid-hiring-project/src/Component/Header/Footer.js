import React from "react";

import { Link } from "react-router-dom";

export default function Footer() {

  return (

    <>

      {/* TOP BORDER */}

      <div className="f-top py-1 m-0"></div>

      {/* MAIN FOOTER */}

      <div className="container-fluid footer-bg text-white">

        <div className="container py-5">

          <div className="row g-5">

            {/* ABOUT */}

            <div className="col-lg-4 col-md-6 col-12">

              <h4 className="fw-bold mb-3">

                About Eco
                <span className="f_logo">
                  {" "}Home
                </span>

              </h4>

              <p
                className="mb-0"
                style={{
                  lineHeight: "1.8",
                  textAlign: "justify",
                }}
              >
                We are India's biggest internet based aggregator
                of housekeeping departments. Whether you are
                searching for a house keeper, babysitter or
                patient caretaker in Mumbai, Thane, Navi Mumbai,
                Pune, Bangalore or Surat, you will find trusted
                and experienced staff here.
              </p>

            </div>

            {/* QUICK LINKS */}

            <div className="col-lg-2 col-md-6 col-12">

              <h4 className="fw-bold mb-3">
                Quick Links
              </h4>

              <ul className="list-unstyled">

                <li className="mb-2">

                  <Link
                    to="/"
                    className="text-decoration-none text-white"
                  >
                    Home
                  </Link>

                </li>

                <li className="mb-2">

                  <Link
                    to="/About"
                    className="text-decoration-none text-white"
                  >
                    About
                  </Link>

                </li>

                <li className="mb-2">

                  <Link
                    to="/Contact"
                    className="text-decoration-none text-white"
                  >
                    Contact
                  </Link>

                </li>

                <li className="mb-2">

                  <Link
                    to="/Service"
                    className="text-decoration-none text-white"
                  >
                    Service
                  </Link>

                </li>

                <li className="mb-2">

                  <Link
                    to="/privacy-policy"
                    className="text-decoration-none text-white"
                  >
                    Privacy Policy
                  </Link>

                </li>

                <li className="mb-2">

                  <Link
                    to="/terms"
                    className="text-decoration-none text-white"
                  >
                    Terms of Use
                  </Link>

                </li>

              </ul>

            </div>

            {/* PARTNER */}

            <div className="col-lg-3 col-md-6 col-12">

              <h4 className="fw-bold mb-3">
                Partner with Us
              </h4>

              <p
                style={{
                  lineHeight: "1.8",
                }}
              >
                Are you an organization which supplies
                housekeepers, babysitters or patient care
                staff? Partner with us and grow your
                business online.
              </p>

              <Link
                to="/Login"
                className="btn btn-success mt-2 px-4"
              >
                Register with Us
              </Link>

            </div>

            {/* CONTACT */}

            <div className="col-lg-3 col-md-6 col-12">

              <h4 className="fw-bold mb-3">
                Contact Us
              </h4>

              <p className="mb-2">
                <strong>Email:</strong>
                <br />
                mail@ecohome.co.in
              </p>

              <p className="mb-0">
                <strong>Phone:</strong>
                <br />
                +91 9334625506
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}

      <div className="f-bottom py-3 bg-dark">

        <p className="text-center text-white mb-0">

          © Copyright 2024 Eco Home

        </p>

      </div>

    </>

  );

}