import React, { useEffect, useState } from "react";

export default function SavedMaids() {

  const [maids, setMaids] = useState([]);

  useEffect(() => {

    const saved =
      JSON.parse(localStorage.getItem("savedMaids")) || [];

    setMaids(saved);

  }, []);

  const removeMaid = (index) => {

    const updatedMaids =
      maids.filter((_, i) => i !== index);

    localStorage.setItem(
      "savedMaids",
      JSON.stringify(updatedMaids)
    );

    setMaids(updatedMaids);

  };

  return (

    <div className="container-fluid py-4 py-md-5 px-3 px-md-4">

      {/* PAGE TITLE */}

      <div className="text-center mb-4 mb-md-5">

        <h1 className="fw-bold display-6">
          Saved Maids
        </h1>

        <p className="text-muted">
          View and manage your saved maids
        </p>

      </div>

      {/* SAVED MAIDS */}

      <div className="row g-4 justify-content-center">

        {maids.length === 0 ? (

          <div className="col-12">

            <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 text-center">

              <h3 className="fw-semibold text-muted">
                No Saved Maids
              </h3>

            </div>

          </div>

        ) : (

          maids.map((maid, index) => (

            <div
              className="col-12 col-sm-6 col-lg-4"
              key={index}
            >

              <div className="card shadow-lg border-0 rounded-4 h-100">

                <div className="card-body p-4 d-flex flex-column">

                  {/* MAID NAME */}

                  <h4 className="fw-bold text-success mb-3">

                    {maid.name}

                  </h4>

                  {/* SERVICE */}

                  <div className="mb-3">

                    <strong>
                      Service:
                    </strong>

                    <p className="mb-0 text-muted">

                      {maid.service}

                    </p>

                  </div>

                  {/* CITY */}

                  <div className="mb-4">

                    <strong>
                      City:
                    </strong>

                    <p className="mb-0 text-muted">

                      {maid.city}

                    </p>

                  </div>

                  {/* REMOVE BUTTON */}

                  <div className="mt-auto">

                    <button
                      className="btn btn-danger w-100 py-2"
                      onClick={() => removeMaid(index)}
                    >
                      Remove
                    </button>

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