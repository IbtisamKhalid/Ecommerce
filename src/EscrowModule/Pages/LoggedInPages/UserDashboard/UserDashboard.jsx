/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { IsUserLoggedIn,UserContext } from "../../../EscrowContext/Hooks/useEscrowContext";
function UserDashboard() {
  const { user, setUser } = useContext(UserContext);
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(IsUserLoggedIn);

  return (
    <>
      {console.log("Context Values Updated:",isUserLoggedIn )}
      {console.log("Context Values Updated:",user )}
    </>
  );
}

export default UserDashboard;
