import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import Image from "./Image";
import {useNavigate } from "react-router-dom";
import { createUser } from "../features/userDetails";
const Create = () => {

  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate= useNavigate()
  const getData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value)
    setData({
      ...data,
      [name]: value,
    }); 
    // console.log(data)
  };
  //
  const handleSubmit = (e) => {
    e.preventDefault();
   console.log('the data', data)
   dispatch(createUser(data))
   navigate('/read')
  }
  return (
    <>
   
   <div className="container mt-3">
  <section className="d-flex justify-content-between flex-lg-row flex-column-reverse align-items-center">
    <div className="left col-lg-5 mx-auto">
      <div className="text text-center mb-3">Sign Up</div>
      <form>
        <div className="mb-3" controlId="name">
          <input type="text" className="form-control" onChange={getData} name="name" placeholder="Enter Your Name" />
        </div>
        <div className="mb-3" controlId="email">
          <input type="email" className="form-control" onChange={getData} name="email" placeholder="Enter Your Email" />
        </div>
        <div className="mb-3" controlId="age">
          <input type="email" className="form-control" onChange={getData} name="age" placeholder="Enter Your Age" />
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            // checked={getData.gender === "Female"}
            value="Male"
            onChange={getData}
          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            // checked={this.state.selectedOption === "Female"}
            value="Female"
            onChange={getData}
          />
          <label>Famale</label>
        </div>
        <button type="submit" className="btn btn-primary col-lg-6" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  </section>
</div>

</>
  );
};

export default Create;
