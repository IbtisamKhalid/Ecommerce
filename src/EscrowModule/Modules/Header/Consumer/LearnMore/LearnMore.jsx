import React from "react";
import { Typography, Box, Container, Grid2 as Grid } from "@mui/material";
import { Colors, Fonts } from "../../../../Theme/Theme";

const LearnMore = () => {
  return (
    <Container sx={{ width: "100%" }}>
      <Box
        sx={{
          padding: "2.5rem 2rem 2.5rem 2rem",
          backgroundColor: "white",
          borderRadius: "8px",
          m: "0 5rem 0 9rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontFamily: Fonts.primaryFont, color: Colors.fontColor, mb: 2 }}
        >
          What is TrustBridge?
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: Fonts.primaryFont, color: Colors.fontColor, mb: 2 }}
        >
          TrustBridge is an online escrow payment service headquartered in San
          Francisco, California. We’re registered in California, licensed as an
          escrow service, and accredited with the Better Business Bureau.
        </Typography>

        <Grid container spacing={2} sx={{p:"2rem 1rem"}}>
          <Grid size={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: Fonts.primaryFont,
                color: Colors.fontColor,
                mb: 1,
                bgcolor:Colors.backColor,
                p:"0.7rem",
                fontSize:"1rem"
              }}
            >
              Registered in the State of California
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: Fonts.primaryFont,
                color: Colors.fontColor,
                mb: 2,
              }}
            >
              We’re registered in California as a corporation under the name
              Internet Escrow Service, Inc (SM) (IES).
            </Typography>
          </Grid>

          <Grid size={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: Fonts.primaryFont,
                color: Colors.fontColor,
                mb: 1,
                bgcolor:Colors.backColor,
                p:"0.7rem",
                fontSize:"1rem"
              }}
            >
              Licensed as an Escrow Company
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: Fonts.primaryFont,
                color: Colors.fontColor,
                mb: 2,
              }}
            >
              Our firm is one of only four licensed escrow companies in the
              state, according to the California Department of Financial
              Protection & Innovation.
            </Typography>
          </Grid>

          <Grid size={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: Fonts.primaryFont,
                color: Colors.fontColor,
                mb: 1,
                bgcolor:Colors.backColor,
                p:"0.7rem",
                fontSize:"1rem"
              }}
            >
              Accredited with an “A” Rating by the BBB
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: Fonts.primaryFont,
                color: Colors.fontColor,
                mb: 2,
              }}
            >
              We have been awarded an “A” rating accreditation from the Better
              Business Bureau (BBB), a non-profit organization in North America
              that protects consumers from fraudulent businesses.
            </Typography>
          </Grid>
        </Grid>

        <Typography
          variant="h4"
          sx={{ fontFamily: Fonts.primaryFont, color: Colors.fontColor, mb: 2 }}
        >
          What does “escrow” mean?
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: Fonts.primaryFont, color: Colors.fontColor, mb: 2 }}
        >
          An escrow is a financial and legal agreement designed to protect
          Buyers and Sellers in a transaction. For a fee, an independent third
          party holds payment until everyone fulfills their responsibilities in
          the transaction.
        </Typography>

        <Typography
          variant="h4"
          sx={{ fontFamily: Fonts.primaryFont, color: Colors.fontColor, mb: 2 }}
        >
          How does TrustBridge work?
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: Fonts.primaryFont, color: Colors.fontColor, mb: 2 }}
        >
          TrustBridge reduces the risk of fraud by acting as a trusted
          third-party that collects, holds, and only disburses funds when both
          the Buyer and Seller are satisfied.
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: Fonts.primaryFont, color: Colors.fontColor, mb: 1 }}
        >
          1. Buyer and seller agree to terms.
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: Fonts.primaryFont, color: Colors.fontColor, mb: 1 }}
        >
          2. Buyer pays TrustBridge.
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: Fonts.primaryFont, color: Colors.fontColor, mb: 1 }}
        >
          3. Seller ships merchandise to Buyer.
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: Fonts.primaryFont, color: Colors.fontColor, mb: 1 }}
        >
          4. Buyer accepts merchandise.
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: Fonts.primaryFont, color: Colors.fontColor, mb: 1 }}
        >
          5. TrustBridge pays the Seller.
        </Typography>
      </Box>
    </Container>
  );
};

export default LearnMore;
