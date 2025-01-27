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
    { headerName: "ID", m: 2, textAlign: "left" },
    { headerName: "TITLE", m: 2, textAlign: "left" },
    { headerName: "AMOUNT", m: 2, textAlign: "left" },
    { headerName: "CREATED AT", m: 2, textAlign: "left" },
    { headerName: "ROLE", m: 1, textAlign: "left" },
    { headerName: "STATUS", m: 3, textAlign: "right" },
  ];

   // .filter((transaction) => transaction.dispute) // Include only disputed transactions
  const rows = escrowHistory.map((transaction) => {
      let primaryStatus = "";
      let secondaryStatus = "";

      // Assign values based on the step
      switch (transaction.step) {
        case 0:
          primaryStatus = "Awaiting Agreement";
          secondaryStatus = "Requires Seller's Action";
          break;
        case 1:
          primaryStatus = "Agreement Reached";
          secondaryStatus = "Awaiting Payment";
          break;
        case 2:
          primaryStatus = "Payment Received";
          secondaryStatus = "Awaiting Delivery";
          break;
        case 3:
          if (transaction.dispute) {
            primaryStatus = "In Dispute";
            secondaryStatus = "Inspection Period";
          } else {
            primaryStatus = "Delivery Confirmed";
            secondaryStatus = "Inspection Period";
          }
          break;
        default:
          primaryStatus = "Transaction Closed";
          secondaryStatus = "Thank You for your Trust";
      }

      return {
        id: transaction.id,
        title: transaction.title,
        subtitle: transaction.subtitle,
        created: transaction.created,
        amount: transaction.amount,
        role: transaction.role,
        status: {
          primary: primaryStatus,
          secondary: secondaryStatus,
        },
        dispute: transaction.dispute,
        disputeDetails: transaction.disputeDetails,
        step: transaction.step,
        currency: transaction.currency,
        agreed: transaction.agreed,
        contract: transaction.contract,
        disputeStatus: {
          primary: primaryStatus,
        },
      };
    });
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
