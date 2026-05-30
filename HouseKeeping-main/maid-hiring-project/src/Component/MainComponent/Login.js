import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    setLoading(true);

    /* GET ALL MAIDS */

    const allMaids =
      JSON.parse(localStorage.getItem("allMaids")) || [];

    /* GET ALL CLIENTS */

    const allClients =
      JSON.parse(localStorage.getItem("allClients")) || [];

    /* FIND MAID */

    const maid = allMaids.find(
      (item) =>
        item.email === formData.email &&
        item.password === formData.password
    );

    /* FIND CLIENT */

    const client = allClients.find(
      (item) =>
        item.email === formData.email &&
        item.password === formData.password
    );

    /* MAID LOGIN */

    if (maid) {

      localStorage.setItem(
        "maidInfo",
        JSON.stringify(maid)
      );

      alert("Maid Login Successful");

      navigate("/maid-dashboard");

      return;

    }

    /* CLIENT LOGIN */

    if (client) {

      localStorage.setItem(
        "clientInfo",
        JSON.stringify(client)
      );

      alert("Client Login Successful");

      navigate("/client-dashboard");

      return;

    }

    /* INVALID LOGIN */

    alert("Invalid Email or Password");

    setLoading(false);

  };

  return (

    <div className="container py-4 py-md-5">

      <div className="row justify-content-center">

        <div className="col-lg-5 col-md-7 col-sm-10 col-12">

          <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5">

            {/* TITLE */}

            <div className="text-center mb-4">

              <h2 className="fw-bold">
                Welcome Back
              </h2>

              <p className="text-muted mb-0">
                Login to continue
              </p>

            </div>

            {/* FORM */}

            <form onSubmit={handleSubmit}>

              {/* EMAIL */}

              <div className="mb-3">

                <label className="form-label fw-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="form-control form-control-lg"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* PASSWORD */}

              <div className="mb-4">

                <label className="form-label fw-semibold">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="form-control form-control-lg"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* BUTTON */}

              <button
                type="submit"
                className="
                  btn
                  btn-success
                  w-100
                  py-3
                  fw-bold
                  fs-5
                "
                disabled={loading}
              >

                {loading ? "Logging In..." : "Login"}

              </button>

            </form>

            {/* REGISTER LINKS */}

            <div className="text-center mt-4">

              <p className="mb-2 text-muted">
                Don't have an account?
              </p>

              <div
                className="
                  d-flex
                  flex-column
                  flex-sm-row
                  justify-content-center
                  gap-2
                "
              >

                <button
                  className="btn btn-outline-success"
                  onClick={() =>
                    navigate("/register/maid")
                  }
                >
                  Register as Maid
                </button>

                <button
                  className="btn btn-outline-primary"
                  onClick={() =>
                    navigate("/register/client")
                  }
                >
                  Register as Client
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}