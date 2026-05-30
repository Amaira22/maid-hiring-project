import React from "react";

import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

function Header() {

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">

      <div className="container-fluid px-3 px-md-4 px-lg-5 py-2">

        {/* ================= LOGO ================= */}

        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
        >

          <img
            src={logo}
            alt="logo"
            className="img-fluid"
            style={{
              width: "110px",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />

        </Link>

        {/* ================= MOBILE TOGGLE ================= */}

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >

          <span className="navbar-toggler-icon"></span>

        </button>

        {/* ================= NAVBAR CONTENT ================= */}

        <div
          className="collapse navbar-collapse"
          id="navbarContent"
        >

          {/* ================= CENTER NAV LINKS ================= */}

          <ul
            className="
              navbar-nav
              mx-auto
              text-center
              gap-lg-4
              mt-4
              mt-lg-0
            "
          >

            <li className="nav-item">

              <Link
                className="nav-link fw-semibold px-2"
                to="/"
              >
                Home
              </Link>

            </li>

            <li className="nav-item">

              <Link
                className="nav-link fw-semibold px-2"
                to="/About"
              >
                About
              </Link>

            </li>

            <li className="nav-item">

              <Link
                className="nav-link fw-semibold px-2"
                to="/Service"
              >
                Service
              </Link>

            </li>

            <li className="nav-item">

              <Link
                className="nav-link fw-semibold px-2"
                to="/Contact"
              >
                Contact
              </Link>

            </li>

          </ul>

          {/* ================= RIGHT BUTTONS ================= */}

          <div
            className="
              d-flex
              flex-column
              flex-lg-row
              align-items-stretch
              align-items-lg-center
              gap-2
              mt-4
              mt-lg-0
              w-100
              w-lg-auto
            "
          >

            {/* LOGIN */}

            <Link
              to="/Login"
              className="
                btn
                btn-success
                px-4
                py-2
                text-center
              "
            >
              Login
            </Link>

            {/* MAID REGISTER */}

            <Link
              to="/register/maid"
              className="
                btn
                btn-outline-success
                px-4
                py-2
                text-center
              "
            >
              Register as Maid
            </Link>

            {/* CLIENT REGISTER */}

            <Link
              to="/register/client"
              className="
                btn
                btn-success
                px-4
                py-2
                text-center
              "
            >
              Register as Client
            </Link>

          </div>

        </div>

      </div>

    </nav>

  );

}

export default Header;