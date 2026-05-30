import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm(
        "service_t266zui",
        "template_jel06ce",
        form.current,
        "rMohmYsGecGqTvj69"
      )

      .then(
        (result) => {

          console.log(result.text);

          alert("Your Message has been Submitted Successfully");

          e.target.reset();

        },

        (error) => {

          console.log(error.text);

          alert("Something went wrong");

        }
      );

  };

  return (

    <>

      {/* HERO SECTION */}

      <div className="container-fluid bg-success text-white text-center py-5">

        <div className="container py-4 py-md-5">

          <h1 className="fw-bold display-5">
            Contact Us
          </h1>

          <p className="mt-3 fs-5">
            We would love to hear from you
          </p>

        </div>

      </div>

      {/* CONTACT FORM */}

      <div className="container py-4 py-md-5">

        <div className="row justify-content-center">

          <div className="col-lg-8 col-md-10 col-12">

            <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5">

              <h2 className="text-center fw-bold mb-4">
                Get In Touch
              </h2>

              <form ref={form} onSubmit={sendEmail}>

                {/* ROW 1 */}

                <div className="row g-3">

                  <div className="col-md-6 col-12">

                    <input
                      type="text"
                      className="form-control py-3"
                      placeholder="Your Name"
                      name="to_name"
                      required
                    />

                  </div>

                  <div className="col-md-6 col-12">

                    <input
                      type="email"
                      className="form-control py-3"
                      placeholder="Your Email"
                      name="email"
                      required
                    />

                  </div>

                </div>

                {/* ROW 2 */}

                <div className="row g-3 mt-1">

                  <div className="col-md-6 col-12">

                    <input
                      type="tel"
                      className="form-control py-3"
                      placeholder="Mobile Number"
                      name="mobile"
                      required
                    />

                  </div>

                  <div className="col-md-6 col-12">

                    <input
                      type="text"
                      className="form-control py-3"
                      placeholder="Subject"
                      name="subject"
                      required
                    />

                  </div>

                </div>

                {/* MESSAGE */}

                <div className="mt-4">

                  <textarea
                    rows="6"
                    className="form-control"
                    placeholder="Write Your Message"
                    name="message"
                    required
                  ></textarea>

                </div>

                {/* BUTTON */}

                <div className="d-grid mt-4">

                  <button
                    type="submit"
                    className="btn btn-success py-3 fw-semibold"
                  >

                    Submit Message

                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </>

  );

}