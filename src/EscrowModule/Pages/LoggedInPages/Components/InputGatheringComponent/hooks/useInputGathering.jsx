import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function useInputGathering({ forContract }) {
  const isContract = forContract;
  const [terms, setTerms] = useState([]);
  const [index, setIndex] = useState(0);
  const containerRef = React.useRef(null);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const [attachments, setAttachments] = useState([]);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    setAttachments((prev) => [...prev, ...files]);
    setDialogOpen(false);
  };

  const removeAttachment = (index) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const heading = isContract ? "Terms and Conditions" : "Dispute Information";
  const description = isContract
    ? "Add the terms and conditions that will be upheld by both parties to ensure no issues occur when the transaction is done."
    : "Provide the necessary information about the dispute, including details that will help in resolution.";
  const navigateTO = isContract
    ? "/LoggedIn/EscrowHistory"
    : "/LoggedIn/EscrowDisputes";
  const label = isContract ? "Terms" : "Dispute Details";

  const deleteTerm = (index) => {
    const updatedTerms = terms.filter((_, i) => i !== index);
    setTerms(updatedTerms);
  };

  useEffect(() => {
    setIndex((prevIndex) => {
      setIndex(prevIndex + 1);
    });
  }, [terms]);
  const addTerm = () => {
    if (inputValue.trim() === "") {
      alert("Please enter a term before adding!");
      return;
    }
    setTerms((prevTerms) => [...prevTerms, inputValue.trim()]);
    setInputValue("");
  };
  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      addTerm();
    }
  };
  return {
    terms,
    setTerms,
    index,
    addTerm,
    setInputValue,
    inputValue,
    containerRef,
    deleteTerm,
    handleEnterKeyPress,
    navigate,
    attachments,
    isDialogOpen,
    setDialogOpen,
    setAttachments,
    handleFileSelect,
    removeAttachment,
    heading,
    description,
    navigateTO,
    label,
    isContract,
  };
}

export default useInputGathering;
