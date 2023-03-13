import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./add.css";
function BasicInfo({ nextStep, HandleFormData, values }) {
  const navigate = useNavigate();
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
          <label>Property Type</label>
          <select
            defaultValue={values.property}
            {...register("type", {
              required: "* Select any one",
            })}
            onChange={HandleFormData("property")}
            className="custom-select"
            id="inputGroupSelect01"
          >
            <option value="">Select</option>
            <option value="Plot">Plot</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
            <option value="N/A">N/A</option>
          </select>
        </div>
        <div className="col">
          <label>Negotiable</label>
          <select
            defaultValue={values.negotiable}
            {...register("negotiable", {
              required: "* Select any one",
            })}
            onChange={HandleFormData("negotiable")}
            className="custom-select"
            id="inputGroupSelect01"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col error">{errors.type && errors.type.message}</div>
        <div className="col error">
          {errors.negotiable && errors.negotiable.message}
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
          <label htmlFor="exampleForm2">Price</label>
          <input
            value={values.price}
            {...register("price", {
              required: "* Please Enter the price",
              minLength: {
                value: 6,
                message: "* Enter valid amount",
              },
            })}
            onChange={HandleFormData("price")}
            type="number"
            id="price"
            placeholder="ex: 1,20,000"
            className="form-control desc"
          ></input>
        </div>
        <div className="col">
          <label>Ownership</label>
          <select
            defaultValue={values.ownership}
            onChange={HandleFormData("ownership")}
            className="custom-select"
            id="inputGroupSelect01"
          >
            <option disabled value="">
              Select
            </option>

            <option value="Assets">Assets</option>
            <option value="Tangible">Tangible </option>
            <option value="Intangible">Intangible</option>
            <option value="N/A">N/A</option>
          </select>
        </div>
      </div>
      <div
        className="row"
        style={{ marginTop: "10px", alignSelf: "flex-start" }}
      >
        <div className="col error">{errors.price && errors.price.message}</div>
      </div>
      <div
        className="row"
        style={{
          textAlign: "start",
          color: "gray",
        }}
      >
        <div className="col">
          <label>Property Age</label>
          <select
            defaultValue={values.propertyAge}
            onChange={HandleFormData("propertyAge")}
            className="custom-select"
            id="inputGroupSelect01"
          >
            <option disabled value="">
              Select
            </option>
            <option value="Old">Old</option>
            <option value="New">New</option>
            <option value="N/A">N/A</option>
          </select>
        </div>

        <div className="col">
          <label>Property Approved </label>
          <select
            defaultValue={values.propApproved}
            onChange={HandleFormData("propApproved")}
            className="custom-select"
            id="inputGroupSelect01"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="N/A">N/A</option>
          </select>
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
          <label htmlFor="exampleForm2">Property Description</label>
          <input
            type="text"
            {...register("Description", {
              required: "* Add some Description",
            })}
            value={values.propDescription}
            onChange={HandleFormData("propDescription")}
            id="exampleForm2"
            placeholder="Property Description"
            className="form-control desc"
          ></input>
        </div>

        <div className="col">
          <label>Bank Loan</label>
          <select
            onChange={HandleFormData("bankLoan")}
            defaultValue={values.bankLoan}
            className="custom-select"
            id="inputGroupSelect01"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="N/A">N/A</option>
          </select>
        </div>
      </div>
      <div
        className="row"
        style={{ marginTop: "10px", alignSelf: "flex-start" }}
      >
        <div className="col error">
          {errors.Description && errors.Description.message}
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
        <button onClick={() => navigate("/common")} className="btncan">
          Cancel
        </button>
        <button type="submit" className="btncan">
          Save and continue
        </button>
      </div>
    </form>
  );
}

export default BasicInfo;
