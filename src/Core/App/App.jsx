import Routes from "../Routes/Routes";
import { EscrowProvider } from "../../EscrowModule/EscrowContext/EscrowContext";
function App() {
  return (
    <>
      <EscrowProvider>
        <Routes />
      </EscrowProvider>
    </>
  );
}

export default App;
