import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { EditUser } from '../features/userDetails';
const initialState = {
  name: "",
  email: "",
  age: "",
  gender: "",
};
const Update = () => {
  const[updatedData, setupdatedData]= useState(initialState)
  const navigate= useNavigate()
  const dispatch= useDispatch()
    const {id}= useParams()
    // console.log("id", id)
    const{user, loading}= useSelector((state)=>state.app)
   
    useEffect(()=>{
      if(id){
        const singleData = user.find((user) => user.id === id);
        // console.log(singleData)
        setupdatedData({...singleData})
      }
    },[])
    const getData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name, value)
        setupdatedData({
          ...updatedData,
          [name]: value,
        }); 
        // console.log(updatedData)
      };
      //
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(EditUser({ id: id, updatedData: updatedData }))
       navigate('/read')
      }
      if(loading){
        <h2>Loading...</h2>
      }
  return (
    <>
    {
      updatedData &&(
        <div className="container mt-3">
        <section className="d-flex justify-content-between flex-lg-row flex-column-reverse align-items-center">
          <div className="left col-lg-5 mx-auto">
            <div className="text text-center mb-3">Sign Up</div>
            <form>
              <div className="mb-3" controlId="name">
                <input type="text" className="form-control" onChange={getData} name="name" value={updatedData.name}placeholder="Enter Your Name" />
              </div>
              <div className="mb-3" controlId="email">
                <input type="email" className="form-control" onChange={getData} name="email" value={updatedData.email} placeholder="Enter Your Email" />
              </div>
              <div className="mb-3" controlId="age">
                <input type="email" className="form-control" onChange={getData} name="age" value={updatedData.age} placeholder="Enter Your Age" />
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  checked={updatedData.gender === "Male"}
                  value='Male'
                  onChange={getData}
                />
                <label>Male</label>
                <input
                  type="radio"
                  // name="gender"
                  checked={updatedData.gender=== "female"}
                  value="female"
                  onChange={getData}
                />
                <label>Famale</label>
              </div>
              <button type="submit" className="btn btn-primary col-lg-6" onClick={handleSubmit}>Submit</button>
            </form>
          </div>
        </section>
      </div>
      )
    }
     
    
    </>
  )
}

export default Update
