import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

export default function ClientRegister() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "https://brilliant-reverence-production-34e4.up.railway.app/api/auth/register",
        formData
      );

      /* SAVE CURRENT CLIENT */

      localStorage.setItem(
        "clientInfo",
        JSON.stringify(formData)
      );

      /* SAVE ALL CLIENTS */

      const existingClients =
        JSON.parse(localStorage.getItem("allClients")) || [];

      existingClients.push(formData);

      localStorage.setItem(
        "allClients",
        JSON.stringify(existingClients)
      );

      alert("Client Registered Successfully");

      navigate("/client-dashboard");

    } catch (error) {

      console.log(error);

      alert("Registration Failed");

    }

  };

  return (

    <div className="container py-4 py-md-5">

      <div className="row justify-content-center">

        <div className="col-lg-8 col-md-10 col-12">

          <div className="card shadow-lg border-0 rounded-4 p-3 p-md-5">

            <h2 className="text-center fw-bold mb-4">
              Client Registration
            </h2>

            <form onSubmit={handleSubmit}>

              <div className="row">

                {/* FULL NAME */}

                <div className="col-md-6 col-12 mb-3">

                  <label className="form-label fw-semibold">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Full Name"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                    required
                  />

                </div>

                {/* EMAIL */}

                <div className="col-md-6 col-12 mb-3">

                  <label className="form-label fw-semibold">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                    required
                  />

                </div>

                {/* PHONE */}

                <div className="col-md-6 col-12 mb-3">

                  <label className="form-label fw-semibold">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone Number"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                    required
                  />

                </div>

                {/* CITY */}

                <div className="col-md-6 col-12 mb-3">

                  <label className="form-label fw-semibold">
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                    required
                  />

                </div>

                {/* ADDRESS */}

                <div className="col-12 mb-3">

                  <label className="form-label fw-semibold">
                    Full Address
                  </label>

                  <textarea
                    name="address"
                    placeholder="Enter Full Address"
                    className="form-control form-control-lg"
                    rows="4"
                    onChange={handleChange}
                    required
                  ></textarea>

                </div>

                {/* PASSWORD */}

                <div className="col-12 mb-4">

                  <label className="form-label fw-semibold">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              {/* BUTTON */}

              <button
                className="
                  btn
                  btn-success
                  w-100
                  py-3
                  fw-bold
                  fs-5
                "
              >

                Register

              </button>

            </form>

          </div>

        </div>

      </div>

    </div>

  );

}