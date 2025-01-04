import {
  StartHome,
  EscrowMethod,
  EscrowProducts,
} from "../Reused/reusableComponents";
import { Box } from "@mui/material";

function HomeEscrow() {
  return (
    <>
      <Box
        p={{ xs: "0 1.5rem", sm: "0 3rem", md: "0 6rem", lg: "0 8rem" }}
        backgroundColor="rgb(1, 66, 106)"
      >
        <StartHome />
      </Box>
      <Box
        p={{ xs: "0 1.5rem", sm: "0 3rem", md: "0 6rem", lg: "0 8rem" }}
        sx={{
          borderTop: `0.5px solid rgb(185, 194, 196)`,
          borderBottom: `0.5px solid rgb(185, 194, 196)`,
          m: "8rem 0 0 0",
        }}
      >
        <EscrowMethod />
      </Box>
      <Box
        p={{ xs: "0 1.5rem", sm: "0 3rem", md: "0 6rem", lg: "0 8rem" }}
        sx={{
          borderBottom: `0.5px solid rgb(185, 194, 196)`,
          justifyContent: "center",
          mb:"2rem"
        }}
      >
        <EscrowProducts />
      </Box>
    </>
  );
}

export default HomeEscrow;
