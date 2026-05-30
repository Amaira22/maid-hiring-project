import React from "react";
import logo from "../assets/logo.png";

export default function ClientProfile() {
  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0 p-5 rounded-4 mx-auto" style={{ maxWidth: "700px" }}>
        <div className="text-center mb-4">
          <img src={logo} alt="logo" width="150" />
          <h2 className="mt-3">Client Profile</h2>
        </div>

        <form>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>First Name</label>
              <input type="text" className="form-control" />
            </div>

            <div className="col-md-6 mb-3">
              <label>Last Name</label>
              <input type="text" className="form-control" />
            </div>

            <div className="col-md-6 mb-3">
              <label>Email</label>
              <input type="email" className="form-control" />
            </div>

            <div className="col-md-6 mb-3">
              <label>Phone</label>
              <input type="text" className="form-control" />
            </div>

            <div className="col-12 mb-3">
              <label>Address</label>
              <textarea className="form-control" rows="3"></textarea>
            </div>
          </div>

          <button className="btn btn-success w-100 mt-3">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}