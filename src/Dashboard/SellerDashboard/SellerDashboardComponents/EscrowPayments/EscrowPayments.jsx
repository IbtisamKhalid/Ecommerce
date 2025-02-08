import { Box, Typography } from "@mui/material";
import TabsPanel from "../../../../EscrowModule/Pages/LoggedInPages/TabsPanel/TabsPanel";
import { Colors, Fonts } from "../../../../EscrowModule/Theme/Theme";

const EscrowPayments = () => {
  const Tabs = ["All", "Completed", "Ongoing", "Cancelled"];
  return (
    <Box
      sx={{
        bgcolor: Colors.primaryBackColor,
      }}
    >
      <Box
        sx={{
          p: { xs: "1rem 0.5rem", sm: "1rem", md: "1rem 1rem" },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            mb: 2,
            color: Colors.secondary,
            font: Fonts.secondaryFont,
          }}
        >
          My Payments
        </Typography>
        <TabsPanel tabsName={Tabs} tableName="this Table" status={Tabs} />
      </Box>
    </Box>
  );
};

export default EscrowPayments;
