import React from "react";
import "./contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const [inputValue, setInputValue] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    message: "",
  });
  //console.log(inputValue);
  const handleChange = (e) => {
    setInputValue(() => {
      return { ...inputValue, [e.target.name]: e.target.value };
    });
  };
  const handleContact = async (e) => {
    e.preventDefault();
    const { fname, lname, email, mobile, message } = inputValue;
    if (fname === "") {
      toast.error("First name is required");
    } else if (lname === "") {
      toast.error("Last name is required");
    } else if (email === "") {
      toast.error("Email name is required");
    } else if (!email.includes("@")) {
      toast.error("Invalid email");
    } else if (mobile === "") {
      toast.error("mobile number is required");
    } else if (message === "") {
      toast.error("message is required");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:8007/contact",
          inputValue,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        if (response.data.status === 201) {
          toast.success("your response submitted successfully");
          setInputValue({
            fname: "",
            lname: "",
            email: "",
            mobile: "",
            message: "",
          });
        } else {
          toast.error("Your response submission is failed");
        }
      } catch (error) {
        console.log("something went wrong");
      }
    }
  };
  return (
    <>
      <div className="container mb-3 contact"></div>
      <h2 className="text-center">Contact Us</h2>
      <div className="container mt-2">
        <Form className="row mt-2">
          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="fname" value={inputValue.fname} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="lname" value={inputValue.lname} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={inputValue.email}  onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" name="mobile" value={inputValue.mobile} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              value={inputValue.message}
              onChange={handleChange}
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              type="submit"
              className="col-lg-6"
              onClick={handleContact}
            >
              Submit
            </Button>
          </div>
        </Form>
        <ToastContainer />
      </div>
    </>
  );
}

export default Contact;
