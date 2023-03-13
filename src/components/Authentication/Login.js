import React, { useState } from "react";
import "./login.css";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [details, setDetails] = useState({
    userid: "",
    password: "",
  });

  const navigate = useNavigate();
  async function onsubmits(e) {
    e.preventDefault(e);
    const { userid, password } = details;
    let url = "https://real-estate-catalog-back-end.vercel.app/api/users/login";
    axios
      .post(url, {
        email: userid,
        password: password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userID", res.data.userId);
        navigate("/common");
      })
      .catch((err) => console.log(err));
  }

  const [showPass, setShowPass] = useState(false);
  function passwordChange() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    setShowPass(!showPass);
  }
  return (
    <div className="formdiv">
      <form
        onSubmit={(e) => onsubmits(e)}
        className="container formtag"
        style={{ width: "400px", maxWidth: "80%", maxHeight: "70%" }}
      >
        <img
          className="logo"
          alt="logo"
          style={{ maxHeight: "45px", maxWidth: "45px" }}
          src="https://cdn5.vectorstock.com/i/1000x1000/45/29/house-gold-leaf-logo-vector-14984529.jpg"
        />
        <h6>Enter your credentials to access your account</h6>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span
              className="input-group-text"
              style={{ width: "60px" }}
              id="basic-addon1"
            >
              <MdEmail />
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Email"
            aria-label="Email"
            value={details.userid}
            onChange={(e) => setDetails({ ...details, userid: e.target.value })}
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span
              className="input-group-text"
              style={{ width: "60px" }}
              id="basic-addon1"
            >
              <RiLockPasswordFill />
            </span>
          </div>
          <input
            type="password"
            id="myInput"
            value={details.password}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            className="form-control"
            placeholder="Enter your Email"
            aria-label="Email"
            aria-describedby="basic-addon1"
          />
          <span
            onClick={() => passwordChange()}
            className="input-group-text"
            style={{ width: "50px" }}
            id="basic-addon1"
          >
            {showPass ? <AiOutlineEyeInvisible /> : <AiFillEye />}
          </span>
        </div>
        <button
          type="submit"
          onClick={(e) => {
            onsubmits(e);
          }}
          className="btn custom-btn"
          id="form-submit"
        >
          Submit
        </button>
        <span className="linkform">
          <Link to="/register">Sign Up</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
