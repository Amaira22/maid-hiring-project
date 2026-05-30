import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export default function BrowseMaids() {

  const [maids, setMaids] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    const savedMaids =
      JSON.parse(localStorage.getItem("allMaids")) || [];

    setMaids(savedMaids);

  }, []);

  /* HIRE MAID */

  const handleHire = (maid) => {

    /* GET CLIENT DETAILS */

    const client =
      JSON.parse(localStorage.getItem("clientInfo"));

    /* CREATE REQUEST */

    const newRequest = {

      id: Date.now(),

      maidName: maid.name,

      service: maid.service,

      clientName: client?.name || "Client",

      phone: client?.phone || "Not Available",

      city: client?.city || "Not Available",

      address: client?.address || "Not Available",

      status: "Pending",

    };

    /* GET OLD REQUESTS */

    const existingRequests =
      JSON.parse(localStorage.getItem("hireRequests")) || [];

    /* ADD NEW REQUEST */

    existingRequests.push(newRequest);

    /* SAVE */

    localStorage.setItem(
      "hireRequests",
      JSON.stringify(existingRequests)
    );

    alert("Request Sent Successfully");

    navigate("/hire-requests");

  };

  /* SAVE MAID */

  const saveMaid = (maid) => {

    const savedMaids =
      JSON.parse(localStorage.getItem("savedMaids")) || [];

    /* CHECK DUPLICATE */

    const alreadySaved = savedMaids.find(
      (item) => item.email === maid.email
    );

    if (alreadySaved) {

      alert("Maid Already Saved");

      return;

    }

    savedMaids.push(maid);

    localStorage.setItem(
      "savedMaids",
      JSON.stringify(savedMaids)
    );

    alert("Maid Saved");

  };

  return (

    <div className="container-fluid py-4 py-md-5 px-3 px-md-4">

      {/* PAGE TITLE */}

      <div className="text-center mb-4 mb-md-5">

        <h1 className="fw-bold">
          Browse Maids
        </h1>

        <p className="text-muted">
          Find trusted and professional maids
        </p>

      </div>

      {/* MAID LIST */}

      <div className="row g-4 justify-content-center">

        {maids.length === 0 ? (

          <div className="col-12">

            <div className="alert alert-warning text-center">

              No Maids Registered

            </div>

          </div>

        ) : (

          maids.map((maid, index) => (

            <div
              className="
                col-12
                col-sm-6
                col-md-6
                col-lg-4
                col-xl-3
              "
              key={index}
            >

              <div
                className="
                  card
                  shadow-lg
                  border-0
                  rounded-4
                  p-3
                  p-md-4
                  h-100
                "
              >

                {/* PROFILE ICON */}

                <div className="text-center mb-3">

                  <div
                    className="
                      bg-success
                      text-white
                      rounded-circle
                      d-flex
                      align-items-center
                      justify-content-center
                      mx-auto
                    "
                    style={{
                      width: "80px",
                      height: "80px",
                      fontSize: "30px",
                      fontWeight: "bold",
                    }}
                  >

                    {maid.name?.charAt(0).toUpperCase()}

                  </div>

                </div>

                {/* MAID DETAILS */}

                <h4 className="text-center fw-bold mb-3">

                  {maid.name}

                </h4>

                <div className="mb-2">

                  <strong>Email:</strong>

                  <p className="mb-1 text-break">

                    {maid.email}

                  </p>

                </div>

                <div className="mb-2">

                  <strong>Phone:</strong>

                  <p className="mb-1">

                    {maid.phone}

                  </p>

                </div>

                <div className="mb-2">

                  <strong>City:</strong>

                  <p className="mb-1">

                    {maid.city}

                  </p>

                </div>

                <div className="mb-4">

                  <strong>Service:</strong>

                  <p className="mb-1 text-success fw-semibold">

                    {maid.service}

                  </p>

                </div>

                {/* BUTTONS */}

                <div
                  className="
                    d-flex
                    flex-column
                    flex-sm-row
                    gap-2
                    mt-auto
                  "
                >

                  <button
                    className="btn btn-success w-100"
                    onClick={() => handleHire(maid)}
                  >
                    Hire Maid
                  </button>

                  <button
                    className="btn btn-outline-primary w-100"
                    onClick={() => saveMaid(maid)}
                  >
                    Save
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