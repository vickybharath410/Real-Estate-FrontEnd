import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { RiArrowGoBackLine } from "react-icons/ri";
function Profile() {
  const navigate = useNavigate();
  return (
    <div className="container profile">
      <div
        className="pages"
        style={{
          width: "85%",
          height: "auto",
          padding: "25px 0",
          borderRadius: "25px",
        }}
      >
        <img
          alt="avatar"
          className="avatar"
          src="https://th.bing.com/th/id/OIP.scExuNqSeL_zvoAQbH0gWAHaHa?pid=ImgDet&rs=1"
        />

        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <span>Name</span>
              </th>

              <td>{localStorage.getItem("name")}</td>
            </tr>
            <tr>
              <th scope="row">User ID</th>
              <td>{localStorage.getItem("userID")}</td>
            </tr>
            <tr>
              <th scope="row">Email</th>
              <td>{localStorage.getItem("email")}</td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="btn btn-info"
          style={{
            fontSize: "larger",

            alignItems: "center",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            justifyContent: "center",
            borderRadius: "35px",
          }}
        >
          <RiArrowGoBackLine />

          <span className="ms-1 d-none d-sm-inline">Back</span>
        </button>
      </div>
    </div>
  );
}

export default Profile;
