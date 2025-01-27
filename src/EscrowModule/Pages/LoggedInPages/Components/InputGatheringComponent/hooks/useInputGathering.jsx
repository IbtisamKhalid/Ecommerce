/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useEscrowHistory } from "../../../../../EscrowContext/Hooks/useEscrowContext";

function useInputGathering({ item, forContract, addingTerms }) {
  const isContract = forContract;
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [terms, setTerms] = useState([]);
  const containerRef = React.useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [attachments, setAttachments] = useState([]);
  const { escrowHistory, setEscrowHistory, addEscrowTransaction } =
    useEscrowHistory();
  const [isDialogOpen, setDialogOpen] = useState(false);
  console.log("item?", item);
  useEffect(() => {
    if (addingTerms) {
      if (isContract) {
        setTerms(item?.contract || []);
      } else {
        setTerms(item?.disputeDetails || []);
      }
    } else {
      setTerms([]);
    }
  }, [addingTerms, item?.contract]);
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

  const contractHandling = (index) => {
    if (addingTerms) {
      // If adding terms, find and update the existing transaction
      const updatedHistory = escrowHistory.map((transaction) => {
        if (transaction.id === item.id) {
          return {
            ...transaction,
            contract: terms, // Update the contract with new terms
          };
        }
        return transaction;
      });

      setEscrowHistory(updatedHistory); // Save the updated history
      console.log("Updated transaction:", updatedHistory);
    } else if (!addingTerms) {
      // If not adding terms, create a new transaction
      const transaction = {
        id: Date.now().toString(),
        title: item.TransactionTitle,
        subtitle: item.ItemCategory,
        created: Date.now().toString(),
        amount: item.Price,
        currency: item.Currency,
        role: item.MyRole,
        status: {
          primary: "Awaiting Agreement",
          secondary: "Requires Seller's Action",
        },
        agreed: false,
        step: 0,
        contract: terms,
        dispute: false,
        disputeDetails: [],
        inspectionPeriod: item.InspectionPeriod,
        itemDescription: item.ItemDescription,
        itemName: item.ItemName,
        secondPersonEmail: item.secondPersonEmail,
        secondPersonNumber: item.secondPersonNumber,
      };
      addEscrowTransaction(transaction);
      console.log("New transaction:", transaction);
    }

    navigate(navigateTO);
  };
  const disputeHandling = () => {
    // Find the escrow history object that matches the item's id
    const updatedHistory = escrowHistory.map((transaction) => {
      if (transaction.id === item.id) {
        // Add entered terms to the disputeDetails and set dispute to true
        const updatedDisputeDetails = [
          ...transaction.disputeDetails,
          ...terms, // Append new terms to existing dispute details
        ];

        return {
          ...transaction,
          dispute: true, // Mark as disputed
          disputeDetails: updatedDisputeDetails, // Update disputeDetails
        };
      }
      return transaction;
    });

    // Save the updated escrow history
    setEscrowHistory(updatedHistory);

    // Update item with the same dispute details
    item.dispute = true;
    item.disputeDetails = [...(item.disputeDetails || []), ...terms];

    console.log("Updated escrow history with dispute details:", updatedHistory);
    console.log("Updated item with dispute details:", item);

    navigate(navigateTO); // Navigate to the appropriate page
  };

  const handleSave = () => {
    if (terms.length > 0) {
      if (forContract) {
        contractHandling();
      } else {
        disputeHandling();
      }
    } else {
      alert("Please add at least one term before saving!");
    }
  };

  // const handleSave = () => {
  //   if (terms.length > 0) {
  //     console.log(item);
  //     const transaction = {
  //       id: Date.now().toString(),
  //       title: item.TransactionTitle,
  //       subtitle: "Domain Name",
  //       created: Date.now().toString(),
  //       amount: item.Price,
  //       currency: item.Currency,
  //       role: item.MyRole,
  //       status: {
  //         primary: "Awaiting Agreement",
  //         secondary: "Requires Seller's Action",
  //       },
  //       agreed: false,
  //       step: 0,
  //       contract: terms,
  //       dispute: false,
  //       disputeDetails: [],
  //     };
  //     console.log(transaction);

  //     addEscrowTransaction(transaction);
  //     navigate(navigateTO);
  //   } else {
  //     console.log("nope");
  //   }
  // };
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
    attachments,
    isDialogOpen,
    setDialogOpen,
    setAttachments,
    handleFileSelect,
    removeAttachment,
    heading,
    description,
    label,
    isContract,
    handleSave,
  };
}

export default useInputGathering;
