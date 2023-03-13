import React, { useState } from "react";
import axios from "axios";
import { BsImageFill } from "react-icons/bs";
import { MdOutlineClear } from "react-icons/md";

import { MdModeEditOutline } from "react-icons/md";
import Image from "./Image";
function Search({ values }) {
  let token = localStorage.getItem("token");
  const [pathFlag, setPathFlag] = useState(false);
  let id = localStorage.getItem("userID");
  function update(details) {
    console.log(details._id);
    let data = { status: "Sold" };

    axios
      .patch(
        `https://real-estate-catalog-back-end.vercel.app/api/property/sold/${details._id}`,
        data,
        {
          headers: {
            token: token,
            id: id,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => alert("Unable to Updated"));
  }
  return (
    <>
      {values._id === "" ? (
        <>
          <h4>Property ID not Found</h4>
        </>
      ) : (
        <>
          <table
            className="table table-hover table-responsive-xl"
            style={{ marginTop: "15px" }}
          >
            <thead style={{ color: "#4C57B6" }}>
              <tr>
                <th scope="col">PPD ID</th>
                <th scope="col">Image</th>
                <th scope="col">Property</th>
                <th scope="col">Contact</th>
                <th scope="col">Area</th>
                <th scope="col">Views</th>
                <th scope="col">Status</th>
                <th scope="col">Days Left</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr key={values.ppdId}>
                <th scope="row">{values.ppdId}</th>
                <th scope="col" onClick={() => setPathFlag(true)}>
                  <BsImageFill />
                </th>
                <th scope="col">{values.property}</th>
                <th scope="col">{values.mobile}</th>
                <th scope="col">{values.area}</th>
                <th scope="col">{values.views}</th>
                <th onClick={() => update(values)} scope="col">
                  <button className="soldbtn">{values.status}</button>
                </th>
                <th scope="col">{values.daysLeft}</th>
                <th scope="col">
                  <MdModeEditOutline />
                </th>
              </tr>
            </tbody>
          </table>
          {pathFlag && (
            <div
              style={{
                width: "50%",
                height: "40%",
                minHeight: "40%",
                position: "absolute",
                top: "25%",
                left: "25%",
                display: "flex",
                flexDirection: "column",
              }}
              onClick={() => setPathFlag(false)}
            >
              <Image path={values.imageUrl.imageUrl} />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Search;
