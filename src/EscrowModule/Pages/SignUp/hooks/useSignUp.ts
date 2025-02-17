import React, { useContext, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function useSignUp({ isEscrow, role }) {
  const navigate = useNavigate();
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const name = document.getElementById("name");

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    if (!name.value || name.value.length < 1) {
      setNameError(true);
      setNameErrorMessage("Name is required.");
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage("");
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateInputs()) return;

    const data = new FormData(event.currentTarget);
    const userData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      role: role,
      address: "Some Default Address", // Add this
      phone: "1234567890", // Add this
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      if (response.ok) {
        handleClickOpen();
        const timer = setTimeout(() => {
          handleClose();
          navigate("/signin");
        }, 4000);
        return () => clearTimeout(timer);
      } else {
        console.log("Msg Is ", result.message || result.error); // Handle both 'message' and 'error'
        setMsg(result.message || result.error);
        handleClickOpen();
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to register user.");
    }
  };

  // const handleGoogleSignup = async (credential) => {
  //   console.log("Sending token to backend:", credential);  // Add this log to verify the token
  //   try {
  //     const response = await fetch("http://localhost:5000/api/auth/google-signup", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ token: credential }), // This is where the token is sent
  //     });

  //     const result = await response.json();
  //     if (response.ok) {
  //       alert("Google signup successful!");
  //     } else {
  //       alert(result.message);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("Google signup failed.");
  //   }
  // };

  // const googleLogin = useGoogleLogin({
  //   onSuccess: (tokenResponse) => {
  //     console.log("Token Response:", tokenResponse); // Check the response

  //     // Use the access_token instead of credential
  //     const accessToken = tokenResponse?.access_token;

  //     if (accessToken) {
  //       navigate("/loggedin/escrowhistory");
  //       handleGoogleSignup(accessToken); // Pass the access token to your signup handler
  //     } else {
  //       console.error("Google login failed: No access_token found.");
  //     }
  //   },
  //   onError: () => {
  //     alert("Google signup failed.");
  //   },
  // });

  return {
    handleSubmit,
    validateInputs,
    nameError,
    nameErrorMessage,
    passwordError,
    passwordErrorMessage,
    emailError,
    emailErrorMessage,
    handleClickOpen,
    handleClose,
    open,
    msg,
    // googleLogin,
  };
}

export default useSignUp;
