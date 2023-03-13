import React, { useEffect } from "react";
import { AiFillCamera } from "react-icons/ai";
import { useForm } from "react-hook-form";

function GeneralInfo({ nextStep, addImage, prevStep, HandleFormData, values }) {
  useEffect(() => console.log(values), [values]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit() {
    nextStep();
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="basicinfo"
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
          <label>Name</label>
          <input
            value={values.name}
            {...register("name", {
              required: "* Enter Name",
              minLength: {
                value: 4,
                message: "Enter Full name",
              },
            })}
            onChange={HandleFormData("name")}
            type="text"
            id="name"
            placeholder="Enter Name"
            className="form-control desc"
          ></input>
        </div>

        <div className="col">
          <label>Mobile Number</label>
          <input
            {...register("mobile", {
              required: "* Enter Mobile No",
              minLength: {
                value: 10,
                message: "Enter 10 digit",
              },
            })}
            maxLength="10"
            value={values.mobile}
            onChange={HandleFormData("mobile")}
            type="text"
            id="city"
            placeholder="Select city"
            className="form-control desc"
          ></input>
        </div>
      </div>
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col error">{errors.name && errors.name.message}</div>
        <div className="col error">
          {errors.mobile && errors.mobile.message}
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
          <label>Posted By</label>
          <select
            {...register("posted", {
              required: "* Select One",
            })}
            defaultValue={values.postedBy}
            onChange={HandleFormData("postedBy")}
            className="custom-select"
            id="postedBy"
          >
            <option disabled value="">
              Select
            </option>
            <option value="Owner">Owner</option>
            <option value="Lender">Lender</option>
            <option value="N/A">N/A</option>
          </select>
        </div>
        <div className="col">
          <label>Sales Type</label>
          <select
            {...register("sale", {
              required: "* Select One",
            })}
            defaultValue={values.saleType}
            onChange={HandleFormData("saleType")}
            className="custom-select"
            id="postedBy"
          >
            <option disabled value="">
              Select
            </option>
            <option value="Resale">Resale</option>
            <option value="Foreclosure">Foreclosure</option>
            <option value="Market Value">Market Value</option>
            <option value="Short Sale">Short Sale</option>
            <option value="N/A">N/A</option>
          </select>
        </div>
      </div>
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col error">
          {errors.posted && errors.posted.message}
        </div>
        <div className="col error">{errors.sale && errors.sale.message}</div>
      </div>
      <div
        className="row"
        style={{
          textAlign: "start",
          color: "gray",
        }}
      >
        <div className="col">
          <label>Featured Package</label>
          <select
            {...register("age", {
              required: "* Select Age",
            })}
            defaultValue={values.package}
            onChange={HandleFormData("package")}
            className="custom-select"
            id="inputGroupSelect01"
          >
            <option disabled value="">
              Select
            </option>

            <option value="Gym">Gym</option>
            <option value="School">School</option>
            <option value="Hosiptal">Hosiptal</option>
            <option value="All">All</option>
          </select>
        </div>

        <div className="col">
          <label>PPD Package </label>
          <select
            defaultValue={values.ppdPackage}
            onChange={HandleFormData("ppdPackage")}
            className="custom-select"
            id="inputGroupSelect01"
          >
            <option disabled value="">
              Select
            </option>
            <option value="Bronze">Bronze</option>
            <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
            <option value="Platinum">Platinum</option>
          </select>
        </div>
      </div>
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col error">{errors.age && errors.age.message}</div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <div
          className="upload"
          style={{
            marginTop: "10px",
            fontSize: "25px",
            alignSelf: "flex-start",
          }}
        >
          <button type="button" className="btn-warning">
            <AiFillCamera />
            <input type="file" required onChange={(e) => addImage(e)} />
          </button>
        </div>{" "}
        <span
          style={{
            alignSelf: "flex-start",
            marginTop: "25px",
            marginLeft: "25px",
          }}
        >
          Add Photo
        </span>
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
        <button type="submit" className="btncan">
          Save and continue
        </button>
      </div>
    </form>
  );
}

export default GeneralInfo;
