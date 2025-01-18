import { Box, Typography } from "@mui/material";
import TabsPanel from "../TabsPanel/TabsPanel";

const EscrowPayments = () => {
  const Tabs = ["All", "Completed", "Ongoing", "Cancelled"];
  return (
    <Box
      sx={{
        bgcolor: "#f9f9f9",
        p: { xs: "1rem", sm: "1rem 5rem" },
        "@media (min-width:760px)": { p: "1.5rem 8rem" },
        "@media (min-width:960px)": { p: "2rem 12rem" },
      }}
    >
      <Box
        sx={{
          p: { xs: "2rem 1rem", sm: "2rem", md: "3rem 3rem" },
          bgcolor: "white",
          borderRadius: "8px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          My Transactions
        </Typography>
        <TabsPanel tabsName={Tabs} tableName="this Table" status={Tabs} />
      </Box>
    </Box>
  );
};

export default EscrowPayments;
