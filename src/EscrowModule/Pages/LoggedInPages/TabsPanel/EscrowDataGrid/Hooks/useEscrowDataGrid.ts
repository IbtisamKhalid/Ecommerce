import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useEscrowHistory } from "../../../../../EscrowContext/Hooks/useEscrowContext";

function useEscrowDataGrif({ onRendered }) {
  const { escrowHistory, deleteEscrowTransaction, updateDisputeDetails } =
    useEscrowHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      if (onRendered) onRendered();
    }, 500);

    return () => clearTimeout(timer);
  }, [status]);

  const columns = [
    { headerName: "ID", m: "", textAlign: "left" },
    { headerName: "TITLE", m: "", textAlign: "left" },
    { headerName: "AMOUNT", m: "", textAlign: "left" },
    { headerName: "CREATED", m: "", textAlign: "left" },
    { headerName: "ROLE", m: "7rem", textAlign: "left" },
    { headerName: "STATUS", m: "", textAlign: "right" },
  ];

  /*
    {
      id: "13075658",
      title: "My Transaction",
      subtitle: "Domain Name",
      created: "Jan 12, 2025",
      amount: "$91.00 USD",
      role: "Buyer",
      status: {
        primary: "Awaiting Agreement",
        secondary: "Requires Seller's Action",
      },
      agreed:true,
      step:0,
      contract:[],
      dispute:false,
      disputeDetails:[],
    },
    */

  const rows = escrowHistory.map((transaction) => ({
    id: transaction.id,
    title: transaction.title,
    subtitle: transaction.subtitle,
    created: transaction.created,
    amount: transaction.amount,
    role: transaction.role,
    status: {
      primary: transaction.status.primary,
      secondary: transaction.status.secondary,
    },
    disputeDetails: transaction.disputeDetails,
    step: transaction.step,
    currency: transaction.currency,
  }));
  const navigate = useNavigate();

  const handleBoxClick = (item) => {
    navigate(`/LoggedIn/escrowdetails/${item.id}`, { state: { item } });
  };
  const handleAgreement = (item) => {
    navigate(`/LoggedIn/escrowdetails/${item.id}`, { state: { item } });
  };

  return {
    loading,
    columns,
    rows,
    handleBoxClick,
    handleAgreement,
  };
}

export default useEscrowDataGrif;
