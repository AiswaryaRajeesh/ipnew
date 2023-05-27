import React from "react";
import "./InterestPage.css";

function InterestPage() {
  const col1 = ["Programming", "Python", "Java", "Data Science", "DBMS"];
  const col2 = ["Cricket", "football", "Athletics", "Badminton", "Fitness", "Gym"];
  const col3 = ["Music", "Dance", "Arts", "Writing", "Painting"];

  return (
    <div className="main w-100 d-flex align-items-center justify-content-around flex-column">
      <div className="fw-bolder my-3">
        <p className="head fw-bolder">CHOOSE YOUR INTRESTS</p>
      </div>
      <div className="interest-div w-75 mx-3 bg-light d-flex justify-content-around align-items-center rounded shadow-lg">
        <div className="inside-div bg-info d-flex justify-content-start flex-column align-items-start rounded py-3 px-2">
          {col1.map((val) => (
            <div className="mx-3 form-check">
              <input id={val} type="checkbox" className="form-check-input" />
              <label htmlFor={val} className="form-check-label text-white">{val}</label>
            </div>
          ))}
        </div>
        <div className="inside-div bg-info d-flex justify-content-start flex-column align-items-start rounded py-3 px-2">
          {col2.map((val) => (
            <div className="mx-3 form-check">
              <input id={val} type="checkbox" className="form-check-input" />
              <label htmlFor={val} className="form-check-label text-white">{val}</label>
            </div>
          ))}
        </div>
        <div className="inside-div bg-info d-flex justify-content-start flex-column align-items-start rounded py-3 px-2">
          {col3.map((val) => (
            <div className="mx-3 form-check">
              <input id={val} type="checkbox" className="form-check-input" />
              <label htmlFor={val} className="form-check-label text-white">{val}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="w-50 bg-light px-3 py-3 rounded shadow-lg">
        <input className="px-2 py-3 w-100 form-control" placeholder="Others,specify it" />
      </div>
      <div>
        <button className="px-2 py-2 bg-danger btn btn-outline-light">Submit</button>
      </div>
    </div>
  );
}

export default InterestPage;