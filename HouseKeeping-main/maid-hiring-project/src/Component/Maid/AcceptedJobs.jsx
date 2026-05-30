import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export default function AcceptedJobs() {

  const [jobs, setJobs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    const savedJobs =
      JSON.parse(localStorage.getItem("acceptedJobs")) || [];

    setJobs(savedJobs);

  }, []);

  /* VIEW CLIENT DETAILS */

  const viewDetails = (job) => {

    localStorage.setItem(
      "selectedClient",
      JSON.stringify(job)
    );

    navigate("/client-details");

  };

  /* DECLINE JOB */

  const declineJob = (jobId) => {

    /* REMOVE FROM ACCEPTED JOBS */

    const updatedJobs =
      jobs.filter((job) => job.id !== jobId);

    localStorage.setItem(
      "acceptedJobs",
      JSON.stringify(updatedJobs)
    );

    setJobs(updatedJobs);

    /* UPDATE HIRE REQUEST STATUS */

    const allRequests =
      JSON.parse(localStorage.getItem("hireRequests")) || [];

    const updatedRequests = allRequests.map((item) => {

      if (item.id === jobId) {

        return {
          ...item,
          status: "Pending",
        };

      }

      return item;

    });

    localStorage.setItem(
      "hireRequests",
      JSON.stringify(updatedRequests)
    );

    alert("Job Declined");

  };

  return (

    <div className="container py-4 py-md-5">

      {/* HEADING */}

      <h1 className="text-center fw-bold mb-4 mb-md-5">
        Accepted Jobs
      </h1>

      {/* JOB LIST */}

      <div className="row g-4">

        {jobs.length === 0 ? (

          <div className="col-12">

            <div className="text-center">

              <h4 className="text-muted">
                No Accepted Jobs
              </h4>

            </div>

          </div>

        ) : (

          jobs.map((job) => (

            <div
              className="col-lg-4 col-md-6 col-12"
              key={job.id}
            >

              <div className="card shadow border-0 rounded-4 p-4 h-100">

                <h4 className="fw-bold mb-3">
                  {job.clientName}
                </h4>

                <p className="mb-2">
                  <strong>Work:</strong>{" "}
                  {job.service}
                </p>

                <p className="mb-4">
                  <strong>Status:</strong>{" "}
                  <span className="text-success fw-bold">
                    Accepted
                  </span>
                </p>

                {/* BUTTONS */}

                <div className="d-flex flex-column flex-sm-row gap-2 mt-auto">

                  <button
                    className="btn btn-success w-100"
                    onClick={() =>
                      viewDetails(job)
                    }
                  >
                    View Details
                  </button>

                  <button
                    className="btn btn-danger w-100"
                    onClick={() =>
                      declineJob(job.id)
                    }
                  >
                    Decline Job
                  </button>

                </div>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );

}