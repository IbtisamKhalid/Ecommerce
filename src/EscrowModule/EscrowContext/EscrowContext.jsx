/* eslint-disable react/prop-types */
import useEscrowContext from "./Hooks/useEscrowContext";

// Provider component
export const EscrowProvider = ({ children }) => {
  const {
    user,
    setUser,
    userEmail,
    setUserEmail,
    stepperStep,
    setStepperStep,
    escrowHistory,
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
    setEscrowHistory,
  } = useEscrowContext();
  return (
    <EscrowHistoryContext.Provider
      value={{
        escrowHistory,
        setEscrowHistory,
        addEscrowTransaction,
        deleteEscrowTransaction,
        updateDisputeDetails,
      }}
    >
      <DisputeHistoryContext.Provider
        value={{ disputeHistory, setDisputeHistory }}
      >
        <PaymentHistoryContext.Provider
          value={{ paymentHistory, setPaymentHistory }}
        >
          <StepperStepContext.Provider value={{ stepperStep, setStepperStep }}>
            <IsUserLoggedIn.Provider
              value={{ isUserLoggedIn, setIsUserLoggedIn }}
            >
              <UserContext.Provider value={{ user, setUser }}>
                <UserEmailContext.Provider value={{ userEmail, setUserEmail }}>
                  {children}
                </UserEmailContext.Provider>
              </UserContext.Provider>
            </IsUserLoggedIn.Provider>
          </StepperStepContext.Provider>
        </PaymentHistoryContext.Provider>
      </DisputeHistoryContext.Provider>
    </EscrowHistoryContext.Provider>
  );
};
