import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export default function MaidDashboard() {

  const [maid, setMaid] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {

    /* GET PROFILE */

    const savedProfile = JSON.parse(
      localStorage.getItem("maidProfile")
    );

    /* GET BASIC INFO */

    const basicInfo = JSON.parse(
      localStorage.getItem("maidBasicInfo")
    );

    /* MERGE BOTH */

    if (savedProfile || basicInfo) {

      setMaid({
        ...basicInfo,
        ...savedProfile,
      });

    }

  }, []);

  return (

    <div className="container py-4 py-md-5">

      {/* PAGE TITLE */}

      <div className="text-center mb-5">

        <h1 className="fw-bold">
          Maid Dashboard
        </h1>

        <p className="text-muted">
          Manage requests, jobs and profile
        </p>

      </div>

      {/* DASHBOARD CARDS */}

      <div className="row g-4 mb-5">

        {/* INCOMING REQUESTS */}

        <div className="col-lg-4 col-md-6 col-12">

          <div
            className="
              card
              shadow-sm
              border-0
              rounded-4
              p-4
              text-center
              h-100
            "
          >

            <div className="mb-3">

              <i
                className="
                  bi bi-envelope-paper-fill
                  text-warning
                  fs-1
                "
              ></i>

            </div>

            <h4 className="fw-bold">
              Incoming Requests
            </h4>

            <p className="text-muted">
              Check all customer requests
            </p>

            <button
              className="btn btn-warning mt-auto"
              onClick={() =>
                navigate("/incoming-requests")
              }
            >

              View Requests

            </button>

          </div>

        </div>

        {/* ACCEPTED JOBS */}

        <div className="col-lg-4 col-md-6 col-12">

          <div
            className="
              card
              shadow-sm
              border-0
              rounded-4
              p-4
              text-center
              h-100
            "
          >

            <div className="mb-3">

              <i
                className="
                  bi bi-briefcase-fill
                  text-success
                  fs-1
                "
              ></i>

            </div>

            <h4 className="fw-bold">
              Accepted Jobs
            </h4>

            <p className="text-muted">
              View accepted work
            </p>

            <button
              className="btn btn-success mt-auto"
              onClick={() =>
                navigate("/accepted-jobs")
              }
            >

              View Jobs

            </button>

          </div>

        </div>

        {/* PROFILE */}

        <div className="col-lg-4 col-md-12 col-12">

          <div
            className="
              card
              shadow-sm
              border-0
              rounded-4
              p-4
              text-center
              h-100
            "
          >

            <div className="mb-3">

              <i
                className="
                  bi bi-person-circle
                  text-primary
                  fs-1
                "
              ></i>

            </div>

            <h4 className="fw-bold">
              My Profile
            </h4>

            <p className="text-muted">
              Manage your profile details
            </p>

            <button
              className="btn btn-primary mt-auto"
              onClick={() =>
                navigate("/maid-profile")
              }
            >

              Edit Profile

            </button>

          </div>

        </div>

      </div>

      {/* PROFILE DETAILS */}

      {maid && (

        <div
          className="
            card
            shadow-lg
            border-0
            rounded-4
            p-3
            p-md-5
          "
        >

          <div className="text-center mb-4">

            <h2 className="fw-bold">
              Maid Details
            </h2>

            <p className="text-muted">
              Your profile information
            </p>

          </div>

          <div className="row">

            {/* NAME */}

            <div className="col-lg-6 col-md-6 col-12 mb-4">

              <div className="border rounded-3 p-3 h-100">

                <strong>
                  Full Name
                </strong>

                <p className="mb-0 mt-2 text-muted">
                  {maid.firstName
                    ? `${maid.firstName} ${maid.lastName}`
                    : maid.name}
                </p>

              </div>

            </div>

            {/* EMAIL */}

            <div className="col-lg-6 col-md-6 col-12 mb-4">

              <div className="border rounded-3 p-3 h-100">

                <strong>
                  Email
                </strong>

                <p className="mb-0 mt-2 text-muted">
                  {maid.email}
                </p>

              </div>

            </div>

            {/* PHONE */}

            <div className="col-lg-6 col-md-6 col-12 mb-4">

              <div className="border rounded-3 p-3 h-100">

                <strong>
                  Phone Number
                </strong>

                <p className="mb-0 mt-2 text-muted">
                  {maid.phone}
                </p>

              </div>

            </div>

            {/* CITY */}

            <div className="col-lg-6 col-md-6 col-12 mb-4">

              <div className="border rounded-3 p-3 h-100">

                <strong>
                  City
                </strong>

                <p className="mb-0 mt-2 text-muted">
                  {maid.city}
                </p>

              </div>

            </div>

            {/* SERVICE */}

            <div className="col-lg-6 col-md-6 col-12 mb-4">

              <div className="border rounded-3 p-3 h-100">

                <strong>
                  Service
                </strong>

                <p className="mb-0 mt-2 text-muted">
                  {maid.service}
                </p>

              </div>

            </div>

            {/* EXPERIENCE */}

            <div className="col-lg-6 col-md-6 col-12 mb-4">

              <div className="border rounded-3 p-3 h-100">

                <strong>
                  Experience
                </strong>

                <p className="mb-0 mt-2 text-muted">
                  {maid.experience || "Not Added"}
                </p>

              </div>

            </div>

            {/* ABOUT */}

            <div className="col-12">

              <div className="border rounded-3 p-3">

                <strong>
                  About
                </strong>

                <p className="mb-0 mt-2 text-muted">

                  {maid.about ||
                    "No description added yet."}

                </p>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}