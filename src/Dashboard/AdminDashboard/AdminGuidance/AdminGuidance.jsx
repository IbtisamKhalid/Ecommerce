import { Typography, Box, Grid2 as Grid, Paper } from "@mui/material";
import { Fonts } from "../../../EscrowModule/Theme/Theme";

function AdminGuidance() {
  return (
    <Box
      sx={{
        padding: "1rem 2rem 0",
        backgroundColor: "white",
        m: {
          xs: "0 1rem 0 0.5rem",
          sm: "0 2rem 0 1.5rem",
          md: "0 3rem 0 4rem",
        },
      }}
    >
      <Grid container spacing={4}>
        {/* Left Side - Main Content */}
        <Grid item xs={12} md={8}>
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: Fonts.primaryFont,
                color: "rgb(1, 66, 106)",
                mb: 2,
                fontWeight: 700,
                fontSize: "34px",
              }}
            >
              Admin Guidance
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontFamily: Fonts.primaryFont, color: "rgb(79, 87, 89)", mb: 2 }}
            >
              As an admin, your primary role is to mediate disputes and conflicts occurring during escrow transactions,
              ensuring a fair resolution. You oversee compliance with escrow policies and ensure platform integrity.
            </Typography>
          </Box>

          {/* Admin Responsibilities */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "rgb(1, 66, 106)", fontFamily: Fonts.primaryFont, mb: 2 }}
            >
              Admin Responsibilities
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              As an administrator, your duties include:
            </Typography>
            <ul>
              <li>Reviewing disputed transactions and gathering necessary evidence from both parties.</li>
              <li>Ensuring that all escrow transactions comply with platform policies.</li>
              <li>Making fair and unbiased decisions based on available evidence and transaction agreements.</li>
              <li>Handling user complaints and queries related to disputes.</li>
              <li>Preventing fraudulent activities by identifying suspicious behaviors and taking corrective actions.</li>
              <li>Communicating resolutions effectively to all parties involved.</li>
            </ul>
          </Box>
        </Grid>

        {/* Right Side - FAQs */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: "1.5rem", backgroundColor: "#f9f9f9" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "rgb(1, 66, 106)", fontFamily: Fonts.primaryFont, mb: 2 }}
            >
              Frequently Asked Questions
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              1. What is my role as an admin?
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Your role is to ensure fair resolution of disputes, maintain transaction integrity, and oversee escrow compliance.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              2. How do I resolve disputes?
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              You should review transaction details, collect evidence from both parties, and apply platform policies to make a fair decision.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              3. What happens if a user is unhappy with the resolution?
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Users can appeal a decision by providing additional evidence. Your responsibility is to reassess the case fairly.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              4. What should I do if I suspect fraud?
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              If fraud is suspected, gather all relevant evidence and take necessary action, such as freezing accounts or escalating the case.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdminGuidance;
