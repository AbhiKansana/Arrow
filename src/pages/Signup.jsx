import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../CSS/signup.css";

 const Signup = ({ googleButtonImage, appleButtonLogo }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("user in signup:", user);

    let error = null;
    let response = await axios
      .post("http://localhost:8080/auth/signup", user)
      .catch((err) => {
        console.log("err:", err);
        error = err.response.data.message;
      });

    if (response) {
      console.log("response:", response.data[0]);
      localStorage.setItem("token", response.data[0]);
    //   navigate(`/${response.data[0]}`);
    }
    if (error) {
      console.log("error:", error);
      window.alert(error);
    }
  };

  return (
    <div id="signup">
      <form id="signupForm" onSubmit={handleSubmit}>
        <input
          className="signupFormInput"
          type="email"
          name="email"
          placeholder="    Email"
          required
          onChange={handleChange}
        />

        <input
          className="signupFormInput"
          type="password"
          name="password"
          placeholder="    Password"
          required
          onChange={handleChange}
        />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup