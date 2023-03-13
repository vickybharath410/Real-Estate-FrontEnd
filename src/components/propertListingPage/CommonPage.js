import React, { useEffect, useState } from "react";
import "./table.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FcSearch } from "react-icons/fc";
import { MdOutlineClear } from "react-icons/md";
import Details from "./Details";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Table from "./Table";
import Search from "./Search";
function CommonPage() {
  function clearData() {
    setSearchFlag(false);
    setValues({
      property: "",
      length: 0,
      breadth: 0,
      imageUrl: {
        imageUrl: "",
        public_id: "",
      },
      area: 0,
      _id: "",
      mobile: "",
      negotiable: "",
      price: "",
      ownership: "",
      propertyAge: "",
      propApproved: "",
      propDescription: "",
      bankLoan: "",
      areaUnit: "",
      bhk: "",
      floorNum: "",
      attached: "",
      westToilet: "",
      furnished: "",
      parking: "",
      lift: "",
      electricity: "",
      facing: "",
      name: "",
      postedBy: "",
      saleType: "",
      package: "",
      ppdPackage: "",
      email: "",
      city: "",
      addArea: "",
      pincode: "",
      address: "",
      landmark: "",
      latitude: "",
      longitude: "",
    });
  }
  let token = localStorage.getItem("token");
  let id = localStorage.getItem("userID");
  const navigate = useNavigate();
  const [searchId, setSearchId] = useState("");
  const [searchFlag, setSearchFlag] = useState(false);
  const [values, setValues] = useState({
    property: "",
    length: 0,
    breadth: 0,
    image: [],
    area: 0,
    _id: "",
    mobile: "",
    negotiable: "",
    price: "",
    ownership: "",
    propertyAge: "",
    propApproved: "",
    propDescription: "",
    bankLoan: "",
    areaUnit: "",
    bhk: "",
    floorNum: "",
    attached: "",
    westToilet: "",
    furnished: "",
    parking: "",
    lift: "",
    electricity: "",
    facing: "",
    name: "",
    postedBy: "",
    saleType: "",
    package: "",
    ppdPackage: "",
    email: "",
    city: "",
    addArea: "",
    pincode: "",
    address: "",
    landmark: "",
    latitude: "",
    longitude: "",
  });
  useEffect(() => {
    console.log(values);
  }, [values]);
  function searchingById() {
    let userid = localStorage.getItem("email");
    console.log(token, id);
    setSearchFlag(true);
    let url = `https://real-estate-catalog-back-end.vercel.app/api/search/${searchId}/${userid}`;
    axios
      .get(url)
      .then((res) => {
        setValues(res.data.details);
        setSearchId("");
      })
      .catch((e) => {
        setSearchId("");
        console.log(e);
      });
  }
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <div className="col container" style={{ maxWidth: "80%" }}>
          <Details />
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "40px",
              width: "100%",
            }}
          >
            <div
              style={{
                maxWidth: "70%",
              }}
            >
              <div className="input-group mb-3">
                <input
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    borderTopLeftRadius: "25px",
                    borderBottomLeftRadius: "25px",
                  }}
                  type="text"
                  className="form-control"
                  placeholder="search"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div
                  className="input-group-append"
                  onClick={() => searchingById()}
                >
                  <span
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",

                      borderTopRightRadius: "25px",
                      borderBottomRightRadius: "25px",
                    }}
                    className="input-group-text"
                    id="basic-addon2"
                  >
                    <FcSearch />
                  </span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => navigate("/add")}
              className="btn btn-info"
              style={{
                fontSize: "larger",
                display: "flex",
                alignItems: "center",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                justifyContent: "center",
                borderRadius: "35px",
              }}
            >
              <IoIosAddCircleOutline />

              <span className="ms-1 d-none d-sm-inline">Add Property</span>
            </button>
          </div>
          {searchFlag ? (
            <>
              <div
                className="row"
                style={{
                  display: "flex",
                  marginTop: "15px",
                  justifyContent: "flex-end",
                  paddingRight: "35px",
                }}
              >
                <button
                  type="button"
                  onClick={() => clearData()}
                  className="btn btn-info"
                  style={{
                    fontSize: "larger",
                    display: "flex",
                    color: "white",
                    alignItems: "center",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    justifyContent: "center",
                    borderRadius: "35px",
                  }}
                >
                  <MdOutlineClear />

                  <span className="ms-1 d-none d-sm-inline">Clear</span>
                </button>
              </div>
              <Search values={values} />
            </>
          ) : (
            <>
              <Table />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommonPage;
