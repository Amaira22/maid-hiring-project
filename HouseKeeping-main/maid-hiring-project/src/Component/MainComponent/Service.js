import React from "react";

import overseas from "../assets/overseas.png";
import japa from "../assets/japa.png";
import couple from "../assets/couple.png";

function Service() {

  const services = [

    {
      title: "Overseas Maid",
      desc: "We provide trusted Indian maids in Dubai and Singapore.",
      image: overseas,
    },

    {
      title: "Japa Maid / Baby Massager",
      desc: "Experienced Japa maids and baby care professionals for newborn care.",
      image: japa,
    },

    {
      title: "Married Couple Work",
      desc: "Experienced married couples for household and baby care services.",
      image: couple,
    },

  ];

  return (

    <div className="service-page">

      {/* HERO SECTION */}

      <div className="container-fluid bg-success text-white py-5">

        <div className="container text-center py-4">

          <h1 className="fw-bold display-5">
            Our Services
          </h1>

          <p className="mt-3 fs-5">
            Trusted & Professional Domestic Help Services
          </p>

        </div>

      </div>

      {/* SERVICES SECTION */}

      <div className="container py-5">

        <div className="row g-4 justify-content-center">

          {services.map((item, index) => (

            <div
              className="col-12 col-sm-6 col-lg-4"
              key={index}
            >

              <div className="card border-0 shadow-lg rounded-4 h-100 overflow-hidden">

                {/* IMAGE */}

                <div className="text-center bg-light p-4">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                    style={{
                      height: "220px",
                      objectFit: "contain",
                    }}
                  />

                </div>

                {/* CONTENT */}

                <div className="card-body text-center d-flex flex-column p-4">

                  <h3 className="fw-bold mb-3">

                    {item.title}

                  </h3>

                  <p className="text-muted flex-grow-1">

                    {item.desc}

                  </p>

                  {/* BUTTON */}

                  <button className="btn btn-success mt-3 py-2">

                    Book Now

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default Service;