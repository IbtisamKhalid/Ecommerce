import React, { useState } from "react";
import axios from "axios"; // Ensure axios is imported
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
function useSignIn() {
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const validateInputs = () => {
    let isValid = true;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password || password.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateInputs()) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      if (response.status===200 && response.data) {
        console.log("User Logged In:", response.data);
        navigate("/escrow/UserDashboard");
      }
    } catch (error) {
      console.error("Error Logging In user:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
        alert(`Error: ${error.response.data.message || "Login failed"}`);
      } else {
        alert("Unable to connect to the server. Please try again later.");
      }
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      navigate("/escrow/UserDashboard");
    },
    onError: () => {
      console.error("Google Signup Failed");
    },
  });
  return {
    validateInputs,
    handleSubmit,
    handleClickOpen,
    handleClose,
    googleLogin,
    emailError,
    emailErrorMessage,
    passwordError,
    passwordErrorMessage,
    open,
    setEmail,
    setPassword
  };
}

export default useSignIn;
