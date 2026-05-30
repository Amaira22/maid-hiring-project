import React from "react";

export default function ClientDetails() {

  const client =
    JSON.parse(localStorage.getItem("selectedClient"));

  /* IF NO CLIENT FOUND */

  if (!client) {

    return (

      <div className="container py-5">

        <div className="text-center">

          <h3 className="text-muted">
            No Client Details Found
          </h3>

        </div>

      </div>

    );

  }

  return (

    <div className="container py-4 py-md-5">

      <div className="card shadow-lg border-0 rounded-4 p-4 p-md-5">

        {/* HEADING */}

        <h1 className="text-center fw-bold mb-4 mb-md-5">
          Customer Details
        </h1>

        {/* DETAILS */}

        <div className="row g-4">

          {/* NAME */}

          <div className="col-lg-6 col-md-6 col-12">

            <div className="border rounded-4 p-3 h-100 bg-light">

              <h5 className="fw-bold mb-2">
                Customer Name
              </h5>

              <p className="mb-0 text-muted">
                {client.clientName}
              </p>

            </div>

          </div>

          {/* PHONE */}

          <div className="col-lg-6 col-md-6 col-12">

            <div className="border rounded-4 p-3 h-100 bg-light">

              <h5 className="fw-bold mb-2">
                Phone Number
              </h5>

              <p className="mb-0 text-muted">
                {client.phone}
              </p>

            </div>

          </div>

          {/* ADDRESS */}

          <div className="col-lg-6 col-md-6 col-12">

            <div className="border rounded-4 p-3 h-100 bg-light">

              <h5 className="fw-bold mb-2">
                Address
              </h5>

              <p className="mb-0 text-muted">
                {client.address}
              </p>

            </div>

          </div>

          {/* SERVICE */}

          <div className="col-lg-6 col-md-6 col-12">

            <div className="border rounded-4 p-3 h-100 bg-light">

              <h5 className="fw-bold mb-2">
                Required Service
              </h5>

              <p className="mb-0 text-muted">
                {client.service}
              </p>

            </div>

          </div>

          {/* STATUS */}

          <div className="col-lg-6 col-md-6 col-12">

            <div className="border rounded-4 p-3 h-100 bg-light">

              <h5 className="fw-bold mb-2">
                Status
              </h5>

              <p className="mb-0 text-success fw-bold">
                Accepted
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}