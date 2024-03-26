import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Showuser, deleteUser } from "../features/userDetails";
import PopUp from "./PopUp";
import "../App.css";
import { Link } from "react-router-dom";

const Read = () => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState();
  // console.log("id", id);
  const dispatch = useDispatch();
  const { user, loading, Text } = useSelector((state) => state.app);

  const handleShow = (userId) => {
    setShow(true);
    setId(userId);
  };
  const handleClose = () => {
    setShow(false);
  };
  useEffect(() => {
    dispatch(Showuser());
  }, [dispatch]);
  //delete function
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  if (loading) {
    return <h3>Loading Your Data Please Wait....</h3>;
  }

  return (
    <div className="read">
      {show && <PopUp show={show} onHide={handleClose} id={id} />}

      <Table striped="columns">
        <thead>
          <tr>
            <th align="center">full Name</th>
            <th>Edit/Delete</th>
            {/* <th>Age</th> */}
            <th>View</th>
          </tr>
        </thead>
        <tbody>
  {user && user.filter((ele) => {
    if (Text.length === 0) {
      return true; // Return true to include all elements when Text is empty
    } else {
      return ele.name.toLowerCase().includes(Text.toLowerCase());
    }
  }).map((user) => (
    <tr key={user.id}>
      <td>{user.name}</td>
      {/* <td>{user.email}</td> */}
      <td>
        <Link
          style={{ textDecoration: "none", marginRight: "10px" }}
          to={`/edit/${user.id}`}
        >
          Edit
        </Link>
        <Button onClick={() => handleDelete(user.id)}>Delete</Button>
      </td>
      <td>
        <Button onClick={() => handleShow(user.id)}>View</Button>
      </td>
    </tr>
  ))}
</tbody>

      </Table>
    </div>
  );
};

export default Read;
