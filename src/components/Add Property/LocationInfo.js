import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function LocationInfo({
  nextStep,
  prevStep,
  HandleFormData,
  values,
  insertImages,
}) {
  useEffect(() => console.log(values), [values]);

  const navigate = useNavigate();
  const submitFormData = () => {
    console.log(values);
    console.log(insertImages);
    let formData = new FormData();

    let key = Object.keys(values);
    let value = Object.values(values);
    for (let i = 0; i < key.length; i++) {
      // console.log(key[i], value[i]);
      formData.append(key[i], value[i]);
      console.log(formData);
    }

    let token = localStorage.getItem("token");
    let id = localStorage.getItem("userID");

    let url = "https://real-estate-catalog-back-end.vercel.app/api/property";
    // console.log(id);
    console.log(formData);
    axios
      .post(url, values, {
        headers: {
          token: token,
          id: id,
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/common");
      })
      .catch((err) => {
        console.log(err);
      });

    nextStep();
  };

  return (
    <div
      className="generalinfo basicinfo"
      style={{
        padding: "50px 10px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        display: "flex",
        height: "auto",
        flexDirection: "column",
        justifyContent: "space-around",
        fontWeight: "bold",
      }}
    >
      <div
        className="row"
        style={{
          textAlign: "start",
          color: "gray",
        }}
      >
        <div className="col">
          <label>Email</label>
          <input
            value={values.email}
            onChange={HandleFormData("email")}
            type="email"
            id="email"
            placeholder="Jeni@gmail.com"
            className="form-control desc"
          ></input>
        </div>

        <div className="col">
          <label>City</label>
          <input
            value={values.city}
            onChange={HandleFormData("city")}
            type="text"
            id="city"
            placeholder="Select city"
            className="form-control desc"
          ></input>
        </div>
      </div>
      <div
        className="row"
        style={{
          textAlign: "start",
          color: "gray",
        }}
      >
        <div className="col">
          <label>Area</label>
          <input
            value={values.addArea}
            onChange={HandleFormData("addArea")}
            type="text"
            id="addArea"
            placeholder="Select area"
            className="form-control desc"
          ></input>
        </div>
        <div className="col">
          <label>Pincode</label>
          <input
            value={values.pincode}
            onChange={HandleFormData("pincode")}
            type="number"
            id="pincode"
            placeholder="Pincode"
            className="form-control desc"
          ></input>
        </div>
      </div>
      <div
        className="row"
        style={{
          textAlign: "start",
          color: "gray",
        }}
      >
        <div className="col">
          <label>Address </label>
          <input
            value={values.address}
            onChange={HandleFormData("address")}
            type="text"
            id="address"
            placeholder="Enter address"
            className="form-control desc"
          ></input>
        </div>
        <div className="col">
          <label htmlFor="exampleForm2">Landmark</label>
          <input
            value={values.landmark}
            onChange={HandleFormData("landmark")}
            type="text"
            id="landmark"
            placeholder="landmark"
            className="form-control desc"
          ></input>
        </div>
      </div>
      <div
        className="row"
        style={{
          textAlign: "start",
          color: "gray",
        }}
      >
        <div className="col">
          <label>Latitude</label>
          <input
            value={values.latitude}
            onChange={HandleFormData("latitude")}
            type="number"
            id="latitude"
            placeholder="Pincode"
            className="form-control desc"
          ></input>
        </div>
        <div className="col">
          <label htmlFor="exampleForm2">Longitude</label>
          <input
            value={values.longitude}
            onChange={HandleFormData("longitude")}
            type="number"
            id="longitude"
            placeholder="Enter Longitude"
            className="form-control desc"
          ></input>
        </div>
      </div>
      <div
        style={{
          marginTop: "15px",
          minWidth: "100%",
          alignSelf: "center",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button onClick={prevStep} className="btncan">
          Cancel
        </button>
        <button type="submit" onClick={submitFormData} className="btncan">
          Save and continue
        </button>
      </div>
    </div>
  );
}

export default LocationInfo;
