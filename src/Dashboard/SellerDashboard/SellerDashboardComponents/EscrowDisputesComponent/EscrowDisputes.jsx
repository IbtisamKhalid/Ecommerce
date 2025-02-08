import { Box, Typography } from "@mui/material";
import TabsPanel from "../../../../EscrowModule/Pages/LoggedInPages/DIsputeModule/TabsPanel/TabsPanel";
import { Colors, Fonts } from "../../../../EscrowModule/Theme/Theme";

const EscrowDisputes = () => {
  const Tabs = ["All", "Completed", "Ongoing", "Cancelled"];
  return (
    <Box
      sx={{
        bgcolor: "#f9f9f9",
      }}
    >
      <Box
        sx={{
          p: { xs: "1rem", sm: "1rem", md: "1rem" },
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
          My Disputes
        </Typography>
        <TabsPanel tabsName={Tabs} tableName="this Table" status={Tabs} />
      </Box>
    </Box>
  );
};

export default EscrowDisputes;
