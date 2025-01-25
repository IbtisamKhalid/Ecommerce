import { Box } from "@mui/material";
import { Colors } from "../../../../Theme/Theme";
import FAQAccordion from "../../Details/FAQAccordion/FAQAccordion";
import InputGathering from "../../Components/InputGatheringComponent/InputGathering";
import ContractInstruction from "../../Components/ContractInstruction/ContractInstruction";
import LoggedInNavbarLayout from "../../LoggedInNavBar/LoggedInNavbarLayout/LoggedInNavbarLayout";
function FileDispute() {
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
        <InputGathering forContract={false} />
        <Box sx={{ flexBasis: "30%", m: "0 1rem" }}>
          <ContractInstruction isContract={false} />
          <FAQAccordion isContract={false} />
        </Box>
      </Box>

</>  )
}

export default FileDispute