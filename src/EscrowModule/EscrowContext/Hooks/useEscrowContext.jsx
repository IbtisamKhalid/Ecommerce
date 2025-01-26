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
// Create contexts

function useEscrowContext() {
  const [user, setUser] = useState();
  const [userEmail, setUserEmail] = useState();
  const [stepperStep, setStepperStep] = useState(2);
  const [escrowHistory, setEscrowHistory] = useState([]);
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
