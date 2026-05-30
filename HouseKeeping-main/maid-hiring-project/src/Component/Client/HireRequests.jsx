import React, { useEffect, useState } from "react";

export default function HireRequests() {

  const [requests, setRequests] = useState([]);

  useEffect(() => {

    const savedRequests =
      JSON.parse(localStorage.getItem("hireRequests")) || [];

    setRequests(savedRequests);

  }, []);

  return (

    <div className="container-fluid py-4 py-md-5 px-3 px-md-4">

      {/* PAGE TITLE */}

      <div className="text-center mb-4 mb-md-5">

        <h1 className="fw-bold display-6">
          Hire Requests
        </h1>

        <p className="text-muted">
          Track all your maid hiring requests
        </p>

      </div>

      {/* REQUEST LIST */}

      <div className="row g-4 justify-content-center">

        {requests.length === 0 ? (

          <div className="col-12">

            <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 text-center">

              <h3 className="fw-semibold text-muted">
                No Hire Requests
              </h3>

            </div>

          </div>

        ) : (

          requests.map((request) => (

            <div
              className="col-12 col-sm-6 col-lg-4"
              key={request.id}
            >

              <div className="card shadow-lg border-0 rounded-4 h-100">

                <div className="card-body p-4 d-flex flex-column">

                  {/* MAID NAME */}

                  <h4 className="fw-bold mb-3 text-success">

                    {request.maidName}

                  </h4>

                  {/* SERVICE */}

                  <div className="mb-2">

                    <strong>
                      Service:
                    </strong>

                    <p className="mb-0 text-muted">

                      {request.service}

                    </p>

                  </div>

                  {/* STATUS */}

                  <div className="mb-2">

                    <strong>
                      Status:
                    </strong>

                    <p
                      className={`mb-0 fw-semibold ${
                        request.status === "Accepted"
                          ? "text-success"
                          : "text-warning"
                      }`}
                    >

                      {request.status}

                    </p>

                  </div>

                  {/* CITY */}

                  <div className="mb-3">

                    <strong>
                      City:
                    </strong>

                    <p className="mb-0 text-muted">

                      {request.city}

                    </p>

                  </div>

                  {/* ADDRESS */}

                  <div className="mt-auto">

                    <strong>
                      Address:
                    </strong>

                    <p className="mb-0 text-muted small">

                      {request.address}

                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );

}