import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function PropertyDetails({ nextStep, HandleFormData, values, prevStep }) {
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
        marginBottom: "150px",
        marginTop: "50px",
        padding: "30px 10px",
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
          <label>Length</label>
          <input
            {...register("length", {
              required: "*Enter length",
              min: {
                value: 1,
                message: "* Invalid Length",
              },
            })}
            value={values.length}
            onChange={HandleFormData("length")}
            type="number"
            id="length"
            placeholder="Enter Length"
            className="form-control desc"
          ></input>
        </div>
        <div className="col">
          <label>Breadth</label>
          <input
            {...register("breadth", {
              required: "*Enter breadth",
              min: {
                value: 1,
                message: "* Invalid Breadth",
              },
            })}
            value={values.breadth}
            onChange={HandleFormData("breadth")}
            type="number"
            id="breadth"
            placeholder="Enter breadth"
            className="form-control desc"
          ></input>
        </div>
      </div>
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col error">
          {errors.length && errors.length.message}
        </div>
        <div className="col error">
          {errors.breadth && errors.breadth.message}
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
          <label>Total Area</label>
          <input
            readOnly
            value={parseInt(values.length) * parseInt(values.breadth) || 0}
            type="number"
            id="name"
            placeholder="Enter Area"
            className="form-control desc"
          ></input>
        </div>
        <div className="col">
          <label>Area unit</label>
          <select
            defaultValue={values.areaUnit}
            onChange={HandleFormData("areaUnit")}
            className="custom-select"
            id="postedBy"
          >
            <option value="Square Feet">Square Feet</option>
            <option value="Square Centimeters">Square Centimeters </option>
            <option value="Acre">Acre</option>
            <option value="Others">Others</option>
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
          <label>No of BHK</label>
          <input
            {...register("bhk", {
              required: "*Enter length",
              min: {
                value: 1,
                message: "* Invalid BHK",
              },
            })}
            value={values.bhk}
            onChange={HandleFormData("bhk")}
            type="number"
            id="bhk"
            placeholder="Enter bhk"
            className="form-control desc"
          ></input>
        </div>
        <div className="col">
          <label>No of Floor</label>
          <input
            {...register("floor", {
              required: "*Enter length",
              min: {
                value: 1,
                message: "* Invalid Floor",
              },
            })}
            value={values.floorNum}
            onChange={HandleFormData("floorNum")}
            type="number"
            id="length"
            placeholder="Enter Floor"
            className="form-control desc"
          ></input>
        </div>
      </div>
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col error">{errors.bhk && errors.bhk.message}</div>
        <div className="col error">{errors.floor && errors.floor.message}</div>
      </div>
      <div
        className="row"
        style={{
          textAlign: "start",
          color: "gray",
        }}
      >
        <div className="col">
          <label>Attached</label>
          <select
            defaultValue={values.attached}
            {...register("attached", {
              required: "* Select any one",
            })}
            onChange={HandleFormData("attached")}
            className="custom-select"
            id="inputGroupSelect01"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="NO">No</option>
          </select>
        </div>

        <div className="col">
          <label>Western Toilet </label>
          <select
            {...register("westToilet", {
              required: "* Select any one",
            })}
            defaultValue={values.westToilet}
            onChange={HandleFormData("westToilet")}
            className="custom-select"
            id="inputGroupSelect01"
          >
            <option disabled value="">
              Select
            </option>

            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col error">
          {errors.attached && errors.attached.message}
        </div>
        <div className="col error">
          {errors.westToilet && errors.westToilet.message}
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
          <label>Furnished</label>
          <select
            defaultValue={values.furnished}
            onChange={HandleFormData("furnished")}
            className="custom-select"
            id="furnished"
          >
            <option value="">Select</option>

            <option value="Yes">Yes</option>
            <option value="NO">NO</option>
          </select>
        </div>

        <div className="col">
          <label>Car Parking</label>
          <select
            defaultValue={values.parking}
            onChange={HandleFormData("parking")}
            className="custom-select"
            id="parking"
          >
            <option disabled value="">
              Select
            </option>
            <option value="Yes">Yes</option>
            <option value="NO">NO</option>
          </select>
        </div>
      </div>
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col error">
          <></>
        </div>
        <div className="col error">
          {errors.parking && errors.parking.message}
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
          <label>Lift</label>
          <select
            defaultValue={values.lift}
            onChange={HandleFormData("lift")}
            className="custom-select"
            id="inputGroupSelect01"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Yes">Yes</option>
            <option value="NO">NO</option>
          </select>
        </div>

        <div className="col">
          <label>Phase</label>
          <input
            value={values.electricity}
            {...register("electricity", {
              required: "Enter Phase",
            })}
            onChange={HandleFormData("electricity")}
            type="text"
            id="electricity"
            placeholder="Ex: 3 Phase"
            className="form-control desc"
          ></input>
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
      </div>
    </form>
  );
}

export default PropertyDetails;
