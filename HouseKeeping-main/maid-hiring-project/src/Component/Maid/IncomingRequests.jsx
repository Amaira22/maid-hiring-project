import React, { useEffect, useState } from "react";

export default function IncomingRequests() {

  const [requests, setRequests] = useState([]);

  useEffect(() => {

    const savedRequests =
      JSON.parse(localStorage.getItem("hireRequests")) || [];

    /* ONLY SHOW PENDING REQUESTS */

    const pendingRequests = savedRequests.filter(
      (item) => item.status !== "Accepted"
    );

    setRequests(pendingRequests);

  }, []);

  /* ACCEPT REQUEST */

  const acceptRequest = (request) => {

    /* GET ACCEPTED JOBS */

    const acceptedJobs =
      JSON.parse(localStorage.getItem("acceptedJobs")) || [];

    /* ADD ACCEPTED JOB */

    acceptedJobs.push({
      ...request,
      status: "Accepted",
    });

    localStorage.setItem(
      "acceptedJobs",
      JSON.stringify(acceptedJobs)
    );

    /* UPDATE REQUEST STATUS */

    const allRequests =
      JSON.parse(localStorage.getItem("hireRequests")) || [];

    const updatedRequests = allRequests.map((item) => {

      if (item.id === request.id) {

        return {
          ...item,
          status: "Accepted",
        };

      }

      return item;

    });

    localStorage.setItem(
      "hireRequests",
      JSON.stringify(updatedRequests)
    );

    /* REMOVE FROM CURRENT PAGE */

    const filteredRequests = requests.filter(
      (item) => item.id !== request.id
    );

    setRequests(filteredRequests);

    alert("Request Accepted");

  };

  /* DECLINE REQUEST */

  const declineRequest = (request) => {

    const allRequests =
      JSON.parse(localStorage.getItem("hireRequests")) || [];

    const updatedRequests = allRequests.map((item) => {

      if (item.id === request.id) {

        return {
          ...item,
          status: "Declined",
        };

      }

      return item;

    });

    localStorage.setItem(
      "hireRequests",
      JSON.stringify(updatedRequests)
    );

    /* REMOVE FROM PAGE */

    const filteredRequests = requests.filter(
      (item) => item.id !== request.id
    );

    setRequests(filteredRequests);

    alert("Request Declined");

  };

  return (

    <div className="container py-4 py-md-5">

      {/* HEADING */}

      <h1 className="text-center fw-bold mb-4 mb-md-5">
        Incoming Requests
      </h1>

      {/* REQUESTS */}

      <div className="row g-4">

        {requests.length === 0 ? (

          <div className="col-12">

            <div className="text-center">

              <h4 className="text-muted">
                No Incoming Requests
              </h4>

            </div>

          </div>

        ) : (

          requests.map((request) => (

            <div
              className="col-lg-4 col-md-6 col-12"
              key={request.id}
            >

              <div className="card shadow border-0 rounded-4 p-4 h-100">

                <h4 className="fw-bold mb-3">
                  {request.clientName}
                </h4>

                <p className="mb-2">
                  <strong>Service:</strong>{" "}
                  {request.service}
                </p>

                <p className="mb-2">
                  <strong>Phone:</strong>{" "}
                  {request.phone}
                </p>

                <p className="mb-4">
                  <strong>Address:</strong>{" "}
                  {request.address}
                </p>

                {/* BUTTONS */}

                <div className="d-flex flex-column flex-sm-row gap-2 mt-auto">

                  <button
                    className="btn btn-success w-100"
                    onClick={() =>
                      acceptRequest(request)
                    }
                  >
                    Accept
                  </button>

                  <button
                    className="btn btn-danger w-100"
                    onClick={() =>
                      declineRequest(request)
                    }
                  >
                    Decline
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