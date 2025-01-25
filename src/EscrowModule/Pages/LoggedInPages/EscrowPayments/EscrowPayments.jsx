import { Box, Typography } from "@mui/material";
import TabsPanel from "../TabsPanel/TabsPanel";
import { Colors,Fonts } from "../../../Theme/Theme";

const EscrowPayments = () => {
  const Tabs = ["All", "Completed", "Ongoing", "Cancelled"];
  return (
    <Box
    sx={{
      bgcolor: Colors.primaryBackColor,
      p: { xs: "1rem", sm: "1rem 2rem" },
      "@media (min-width:760px)": { p: "1.5rem 4rem" },
      "@media (min-width:960px)": { p: "2rem 6rem" },
    }}
  >
    <Box
      sx={{
        p: { xs: "2rem 1rem", sm: "2rem", md: "3rem 2.5rem" },
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 ,color:Colors.secondary,font:Fonts.secondaryFont}}>
        My Payments
      </Typography>
      <TabsPanel tabsName={Tabs} tableName="this Table" status={Tabs} />
    </Box>
  </Box>
  );
};

export default EscrowPayments;
