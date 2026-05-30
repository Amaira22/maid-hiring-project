import React, { useEffect, useState } from "react";

import logo from "../assets/logo.png";

export default function MaidProfile() {

  const [maid, setMaid] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    experience: "",
    about: "",
  });

  useEffect(() => {

    const savedData = JSON.parse(
      localStorage.getItem("maidBasicInfo")
    );

    const savedProfile = JSON.parse(
      localStorage.getItem("maidProfile")
    );

    /* IF PROFILE ALREADY EXISTS */

    if (savedProfile) {

      setMaid(savedProfile);

    }

    /* OTHERWISE USE BASIC REGISTER DATA */

    else if (savedData) {

      setMaid({
        firstName: savedData.name || "",
        lastName: "",
        email: savedData.email || "",
        phone: savedData.phone || "",
        city: savedData.city || "",
        experience: "",
        about: "",
      });

    }

  }, []);

  const handleChange = (e) => {

    setMaid({
      ...maid,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    localStorage.setItem(
      "maidProfile",
      JSON.stringify(maid)
    );

    alert("Profile Updated Successfully");

  };

  return (

    <div className="container py-4 py-md-5">

      <div
        className="
          card
          shadow-lg
          border-0
          rounded-4
          p-3
          p-md-5
          mx-auto
        "
        style={{ maxWidth: "900px" }}
      >

        {/* LOGO + TITLE */}

        <div className="text-center mb-4">

          <img
            src={logo}
            alt="logo"
            className="img-fluid"
            style={{
              width: "140px",
              objectFit: "contain",
            }}
          />

          <h2 className="mt-3 fw-bold">
            Maid Profile
          </h2>

        </div>

        {/* FORM */}

        <form onSubmit={handleSubmit}>

          <div className="row">

            {/* FIRST NAME */}

            <div className="col-lg-6 col-md-6 col-12 mb-3">

              <label className="form-label fw-semibold">
                First Name
              </label>

              <input
                type="text"
                name="firstName"
                className="form-control"
                value={maid.firstName}
                onChange={handleChange}
                required
              />

            </div>

            {/* LAST NAME */}

            <div className="col-lg-6 col-md-6 col-12 mb-3">

              <label className="form-label fw-semibold">
                Last Name
              </label>

              <input
                type="text"
                name="lastName"
                className="form-control"
                value={maid.lastName}
                onChange={handleChange}
              />

            </div>

            {/* EMAIL */}

            <div className="col-lg-6 col-md-6 col-12 mb-3">

              <label className="form-label fw-semibold">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                value={maid.email}
                disabled
              />

            </div>

            {/* PHONE */}

            <div className="col-lg-6 col-md-6 col-12 mb-3">

              <label className="form-label fw-semibold">
                Phone Number
              </label>

              <input
                type="text"
                className="form-control"
                value={maid.phone}
                disabled
              />

            </div>

            {/* CITY */}

            <div className="col-lg-6 col-md-6 col-12 mb-3">

              <label className="form-label fw-semibold">
                City
              </label>

              <input
                type="text"
                name="city"
                className="form-control"
                value={maid.city}
                onChange={handleChange}
              />

            </div>

            {/* EXPERIENCE */}

            <div className="col-lg-6 col-md-6 col-12 mb-3">

              <label className="form-label fw-semibold">
                Experience
              </label>

              <input
                type="text"
                name="experience"
                className="form-control"
                value={maid.experience}
                onChange={handleChange}
                placeholder="e.g. 5 Years"
              />

            </div>

            {/* ABOUT */}

            <div className="col-12 mb-4">

              <label className="form-label fw-semibold">
                About
              </label>

              <textarea
                className="form-control"
                rows="5"
                name="about"
                value={maid.about}
                onChange={handleChange}
                placeholder="Write something about yourself..."
              ></textarea>

            </div>

          </div>

          {/* BUTTON */}

          <button
            type="submit"
            className="btn btn-success w-100 py-2 fw-semibold"
          >
            Update Profile
          </button>

        </form>

      </div>

    </div>

  );

}