import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export default function ClientDashboard() {

  const navigate = useNavigate();

  const [client, setClient] = useState(null);

  useEffect(() => {

    const savedClient = JSON.parse(
      localStorage.getItem("clientInfo")
    );

    setClient(savedClient);

  }, []);

  return (

    <div className="container py-4 py-md-5">

      {/* PAGE TITLE */}

      <h1 className="text-center fw-bold mb-4 mb-md-5">
        Client Dashboard
      </h1>

      {/* DASHBOARD BUTTONS */}

      <div className="row g-4 mb-5">

        {/* BROWSE MAIDS */}

        <div className="col-lg-4 col-md-6 col-12">

          <div className="card shadow border-0 rounded-4 p-4 text-center h-100">

            <h4 className="fw-bold mb-3">
              Browse Maids
            </h4>

            <p className="text-muted mb-4">
              Find and hire trusted maids
            </p>

            <button
              className="btn btn-success w-100"
              onClick={() =>
                navigate("/browse-maids")
              }
            >
              Browse
            </button>

          </div>

        </div>

        {/* HIRE REQUESTS */}

        <div className="col-lg-4 col-md-6 col-12">

          <div className="card shadow border-0 rounded-4 p-4 text-center h-100">

            <h4 className="fw-bold mb-3">
              Hire Requests
            </h4>

            <p className="text-muted mb-4">
              Check all your requests
            </p>

            <button
              className="btn btn-warning w-100"
              onClick={() =>
                navigate("/hire-requests")
              }
            >
              View Requests
            </button>

          </div>

        </div>

        {/* SAVED MAIDS */}

        <div className="col-lg-4 col-md-12 col-12">

          <div className="card shadow border-0 rounded-4 p-4 text-center h-100">

            <h4 className="fw-bold mb-3">
              Saved Maids
            </h4>

            <p className="text-muted mb-4">
              View your wishlist maids
            </p>

            <button
              className="btn btn-primary w-100"
              onClick={() =>
                navigate("/saved-maids")
              }
            >
              View Saved
            </button>

          </div>

        </div>

      </div>

      {/* CLIENT DETAILS */}

      {client && (

        <div className="card shadow-lg border-0 rounded-4 p-4 p-md-5">

          <h2 className="text-center fw-bold mb-4">
            Client Details
          </h2>

          <div className="row g-4">

            {/* NAME */}

            <div className="col-lg-6 col-md-6 col-12">

              <div className="border rounded-4 p-3 h-100 bg-light">

                <h5 className="fw-bold mb-2">
                  Name
                </h5>

                <p className="mb-0 text-muted">
                  {client.name}
                </p>

              </div>

            </div>

            {/* EMAIL */}

            <div className="col-lg-6 col-md-6 col-12">

              <div className="border rounded-4 p-3 h-100 bg-light">

                <h5 className="fw-bold mb-2">
                  Email
                </h5>

                <p className="mb-0 text-muted">
                  {client.email}
                </p>

              </div>

            </div>

            {/* PHONE */}

            <div className="col-lg-6 col-md-6 col-12">

              <div className="border rounded-4 p-3 h-100 bg-light">

                <h5 className="fw-bold mb-2">
                  Phone
                </h5>

                <p className="mb-0 text-muted">
                  {client.phone}
                </p>

              </div>

            </div>

            {/* CITY */}

            <div className="col-lg-6 col-md-6 col-12">

              <div className="border rounded-4 p-3 h-100 bg-light">

                <h5 className="fw-bold mb-2">
                  City
                </h5>

                <p className="mb-0 text-muted">
                  {client.city}
                </p>

              </div>

            </div>

            {/* ADDRESS */}

            <div className="col-12">

              <div className="border rounded-4 p-3 bg-light">

                <h5 className="fw-bold mb-2">
                  Address
                </h5>

                <p className="mb-0 text-muted">
                  {client.address}
                </p>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}