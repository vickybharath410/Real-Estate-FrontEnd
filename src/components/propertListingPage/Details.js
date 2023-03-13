import React from "react";
import { FaUserAlt } from "react-icons/fa";

function Details() {
  const id = localStorage.getItem("userID");
  const name = localStorage.getItem("name").toUpperCase();
  return (
    <div
      className="container"
      style={{ fontSize: "larger", fontWeight: "bolder" }}
    >
      <ul className="nav nav-pills mb-sm-auto mb-0    details" id="menu">
        <li className="nav-item">
          <a href="/property" className="nav-link align-middle px-0">
            <span className="ms-1 d-none d-sm-inline">USER ID:</span>
            <i className="fs-4 bi-house"> {id}</i>
          </a>
        </li>
        <li className="nav-item">
          <span
            className="nav-link align-middle px-0"
            style={{ display: "flex", marginRight: "8%" }}
          >
            <i className="fs-4 bi-house">
              <div className="dropdown">
                <button
                  type="button"
                  className="btn btn-info dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <FaUserAlt />
                  <span
                    className="ms-1 d-none d-sm-inline"
                    style={{ marginTop: "5px" }}
                  >
                    {name}
                  </span>
                </button>
                <div
                  className="dropdown-menu"
                  style={{
                    backgroundColor: "#c0ffff",
                  }}
                >
                  <a
                    className="dropdown-item"
                    href="/profile"
                    style={{ borderBottom: "0.5px groove gray" }}
                  >
                    Profile
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => localStorage.clear()}
                    href="/"
                  >
                    Logout
                  </a>
                </div>
              </div>
            </i>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Details;
