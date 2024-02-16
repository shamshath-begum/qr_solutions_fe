import React, { useState } from "react";
import { url } from "../App";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { toast } from 'react-toastify';
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function TrainingRegistration() {
  let [Name, setName] = useState("");
  let [timing, setTiming] = useState("");
  let [status, setStatus] = useState("");

  let navigate = useNavigate();
  let token = sessionStorage.getItem("token");

  let handleClick = async () => {
    console.log(Name,
        timing,
        status,
        )
    try {
      let res = await axios.post(
        `${url}/training-registration`,
        {
            Name,
            timing,
            status,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res)
      // navigate('/display-lead')
      if (res.status === 201) {
        // sessionStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        navigate("/display-timing");
      }
      //   console.log(res);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h2>Training Registration Form</h2>
          </div>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Training Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Timing</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Timing"
                onChange={(e) => setTiming(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Status"
                onChange={(e) => setStatus(e.target.value)}
              />
            </Form.Group>

            

            {/* <select
              className="form-select"
              onChange={(e) => setCourse(e.target.value)}
            >
              <option selected>Courses</option>
              {courses.map((course) => (
                <option value={course}>{course}</option>
              ))}
            </select> */}

            <Button variant="primary" onClick={() => handleClick()}>
              Submit
            </Button>
          </Form>
        </div>
      </section>
    </>
  );
}

export default TrainingRegistration;
