// import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

const PopUp = ({ show, onHide, id }) => {
  const allUsers = useSelector((state) => state.app.user);
  const singleuser = allUsers.filter((ele) => ele.id === id);
  console.log("the single", singleuser);

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="m-auto" style={{ textAlign: "center" }}>
            {allUsers[0].name}
          </h4>
          <p>{singleuser[0].email}</p>
          <p>{singleuser[0].age}</p>
          <p>{singleuser[0].gender}</p>
        </Modal.Body>
        {/* <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default PopUp;
