import { Box } from "@mui/material";
import { Colors } from "../../../../Theme/Theme";
import FAQAccordion from "../../Details/FAQAccordion/FAQAccordion";
import InputGathering from "../../Components/InputGatheringComponent/InputGathering";
import ContractInstruction from "../../Components/ContractInstruction/ContractInstruction";
import LoggedInNavbarLayout from "../../LoggedInNavBar/LoggedInNavbarLayout/LoggedInNavbarLayout";

function MakeContracts() {
  return (
    <>
      <LoggedInNavbarLayout />
      <Box
        sx={{
          display: "flex",
          p: "2rem 0 2rem 7rem",
          bgcolor: Colors.primaryBackColor,
        }}
      >
        <InputGathering forContract={true} />
        <Box sx={{ flexBasis: "30%", m: "0 1rem" }}>
          <ContractInstruction isContract={true} />
          <FAQAccordion isContract={true} />
        </Box>
      </Box>
    </>
  );
}

export default MakeContracts;
