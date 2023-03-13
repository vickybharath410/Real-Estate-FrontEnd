import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { MdUpload } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { BsFillTagFill } from "react-icons/bs";
function Sidebar() {
  return (
    <div
      className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 "
      style={{
        justifyContent: "center",
        backgroundColor: "#c0ffff",
      }}
    >
      <div
        className="d-flex flex-column align-items-center   min-vh-100"
        style={{
          color: "#AAAAAA",
          paddingTop: "25px",
        }}
      >
        <div
          style={{
            height: "550px",
            padding: "0 10px",
          }}
        >
          <img
            className="logo"
            alt="logo"
            style={{
              maxHeight: "35px",
              maxWidth: "35px",
            }}
            src="https://cdn5.vectorstock.com/i/1000x1000/45/29/house-gold-leaf-logo-vector-14984529.jpg"
          />
          <div>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <a
                  href="/common"
                  style={{ color: "#2289FF" }}
                  className="nav-link align-middle px-0"
                >
                  <i className="fs-4 bi-house">
                    {" "}
                    <AiFillHome />
                  </i>
                  <span className="ms-1 d-none d-sm-inline">Property</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/common" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house">
                    <MdNotifications />
                  </i>{" "}
                  <span className="ms-1 d-none d-sm-inline">
                    PPD Assistance
                  </span>
                </a>
              </li>

              <li className="nav-item">
                <a href="/common" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house">
                    <GiReceiveMoney />
                  </i>{" "}
                  <span className="ms-1 d-none d-sm-inline">
                    {" "}
                    Received Interest
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/common" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house">
                    <MdUpload />
                  </i>{" "}
                  <span className="ms-1 d-none d-sm-inline">
                    {" "}
                    Sent Interest
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/common" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house">
                    <AiFillEye />
                  </i>{" "}
                  <span className="ms-1 d-none d-sm-inline">
                    {" "}
                    Property Views
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/common" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house">
                    <BsFillTagFill />
                  </i>{" "}
                  <span className="ms-1 d-none d-sm-inline"> Tariff Plan</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Sidebar;
