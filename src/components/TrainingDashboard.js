import React, { useEffect, useState } from "react";
import { url } from "../App";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";

function TrainingDashboard() {
  let token = sessionStorage.getItem("token");

  let [timing, setTiming] = useState([]);

  let navigate = useNavigate();

  let getData = async () => {
    // console.log("hello");
    try {
      let res = await axios.get(`${url}/display-timing`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        setTiming(res.data.timing);
        // toast.success("Lead Added Successfully");

        console.log(res.data.courses);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      if (error.response.status === 401) handleLogout();
    }
  };

  let deleteTiming = async (id) => {
    try {
      let res = await axios.delete(`${url}/delete-course/${id}`);
      if (res.status === 200) {
        console.log(res);
        getData();
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  let handleLogout = async () => {
    sessionStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    if (token) {
      getData();
    } else {
      handleLogout();
    }
  }, [token]);

  return (
    <>
      <div className="container-fluid">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>timing</th>
              <th></th>
              {/* <th>Mobile</th> */}
              <th>status</th>
              {/* <th>Background</th> */}
              {/* <th>Profession</th> */}
              {/* <th>PreferredBatch</th> */}
              {/* <th>Status</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {timing?.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.Name}</td>
                  <td>{e.timing}</td>
                  <td>{e.status}</td>
                  {/* <td>{e.mobile}</td> */}
                  {/* <td>{e.course}</td> */}
                  {/* <td>{e.background}</td> */}
                  {/* <td>{e.profession}</td> */}
                  {/* <td>{e.preferredBatch}</td> */}
                  {/* <td>{e.status}</td> */}
                  <td>
                    <Button onClick={() => navigate(`/manage-timing/${e._id}`)}>
                      Edit
                    </Button>
                    &nbsp;&nbsp;
                    <Button onClick={() => deleteTiming(e._id)}>Delete</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Button variant="danger" onClick={() => navigate("/home")}>
          Home
        </Button>
      </div>
    </>
  );
}

export default TrainingDashboard;