/* eslint-disable react-refresh/only-export-components */
import { useState, useContext } from "react";
import { createContext } from "react";

export const EscrowHistoryContext = createContext();
export const DisputeHistoryContext = createContext();
export const PaymentHistoryContext = createContext();
export const StepperStepContext = createContext();
export const UserContext = createContext();
export const UserEmailContext = createContext();
export const IsUserLoggedIn = createContext();
export const useEscrowHistory = () => {
  return useContext(EscrowHistoryContext);
};
export const useDisputeHistory = () => {
  return useContext(DisputeHistoryContext);
};
// Create contexts

function useEscrowContext() {
  const [user, setUser] = useState();
  const [userEmail, setUserEmail] = useState();
  const [stepperStep, setStepperStep] = useState(2);
  const [escrowHistory, setEscrowHistory] = useState([
    {
      agreed: false,
      amount: "10",
      contract: ["hehehhehe", "heheheh"],
      created: "1737915881575",
      currency: "USD",
      dispute: false,
      disputeDetails: [],
      id: "1737915",
      role: "Buyer",
      step: 0,
      status: {
        primary: "Awaiting Agreement",
        secondary: "Requires Seller's Action",
      },
      subtitle: "Domain Name",
      title: "My Transaction",
    },
    {
      agreed: false,
      amount: "10",
      contract: ["hehehhehe", "heheheh"],
      created: "1737915881575",
      currency: "USD",
      dispute: false,
      disputeDetails: [],
      id: "1737915",
      role: "Seller",
      step: 0,
      status: {
        primary: "Awaiting Agreement",
        secondary: "Requires Seller's Action",
      },
      subtitle: "Domain Name",
      title: "My Transaction",
    },
    {
      agreed: true,
      amount: "10",
      contract: ["hehehhehe", "heheheh"],
      created: "1737915881575",
      currency: "USD",
      dispute: false,
      disputeDetails: [],
      id: "1737915",
      role: "Buyer",
      step: 1,
      status: {
        primary: "Awaiting Agreement",
        secondary: "Requires Seller's Action",
      },
      subtitle: "Domain Name",
      title: "LOLOLOLO",
    },

    {
      agreed: false,
      amount: "10",
      contract: ["hehehhehe", "heheheh"],
      created: "1737915881575",
      currency: "USD",
      dispute: false,
      disputeDetails: [],
      id: "1737915",
      role: "Seller",
      step: 2,
      status: {
        primary: "Awaiting Agreement",
        secondary: "Requires Seller's Action",
      },
      subtitle: "Domain Name",
      title: "My Transaction",
    },
    {
      agreed: false,
      amount: "10",
      contract: ["hehehhehe", "heheheh"],
      created: "1737915881575",
      currency: "USD",
      dispute: false,
      disputeDetails: [],
      id: "1737915",
      role: "Buyer",
      step: 2,
      status: {
        primary: "Awaiting Agreement",
        secondary: "Requires Seller's Action",
      },
      subtitle: "Domain Name",
      title: "My Transaction",
    },
    {
      agreed: true,
      amount: "100",
      contract: ["hehehhehe", "heheheh"],
      created: "17379158899",
      currency: "pkr",
      dispute: true,
      disputeDetails: [
        "the Issue Arised because hw did not send me the right product",
        "the Issue Arised because hw did not send me the right product",
      ],
      id: "1737915",
      role: "Buyer",
      step: 3,
      status: {
        primary: "Awaiting Agreement",
        secondary: "Requires Seller's Action",
      },
      disputeStatus: {
        primary: "Being Resolved",
      },
      subtitle: "Domain Name",
      title: "My Disputee",
    },

    {
      agreed: false,
      amount: "10",
      contract: ["hehehhehe", "heheheh"],
      created: "1737915881575",
      currency: "USD",
      dispute: false,
      disputeDetails: [],
      id: "1737915",
      role: "Buyer",
      step: 4,
      status: {
        primary: "Awaiting Agreement",
        secondary: "Requires Seller's Action",
      },
      subtitle: "Domain Name",
      title: "My Transaction",
    },
  ]);
  const [disputeHistory, setDisputeHistory] = useState([]);
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  // Add a new escrow transaction
  const addEscrowTransaction = (newTransaction) => {
    setEscrowHistory((prevHistory) => [...prevHistory, newTransaction]);
    console.log(newTransaction);
  };

  // Delete a specific escrow transaction by id
  const deleteEscrowTransaction = (id) => {
    setEscrowHistory((prevHistory) =>
      prevHistory.filter((transaction) => transaction.id !== id)
    );
  };

  // Update dispute details for a specific escrow transaction by id
  const updateDisputeDetails = (id, disputeDetails) => {
    setEscrowHistory((prevHistory) =>
      prevHistory.map((transaction) =>
        transaction.id === id
          ? { ...transaction, dispute: true, disputeDetails }
          : transaction
      )
    );
  };
  return {
    useEscrowHistory,
    user,
    setUser,
    userEmail,
    setUserEmail,
    stepperStep,
    setStepperStep,
    escrowHistory,
    setEscrowHistory,
    disputeHistory,
    setDisputeHistory,
    paymentHistory,
    setPaymentHistory,
    isUserLoggedIn,
    setIsUserLoggedIn,
    addEscrowTransaction,
    deleteEscrowTransaction,
    updateDisputeDetails,
    EscrowHistoryContext,
    DisputeHistoryContext,
    PaymentHistoryContext,
    StepperStepContext,
    UserContext,
    UserEmailContext,
    IsUserLoggedIn,
  };
}

export default useEscrowContext;
