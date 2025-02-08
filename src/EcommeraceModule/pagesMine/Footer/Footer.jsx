// import { Box, Typography } from "@mui/material";
// import { Link } from "react-router-dom";
// import { Colors, Fonts } from "../../Theme/Theme";
// import { footerData } from "../../../constants";

import {
  Box,
  Container,
  Grid2 as Grid,
  Typography,
  Link,
  Button,
} from "@mui/material";
import { Twitter, Facebook, Instagram } from "@mui/icons-material";
import { Colors } from "../../../EscrowModule/Theme/Theme";

// import React from "react";
// import {
//   Box,
//   Container,
//   Grid2 as Grid,
//   Typography,
//   Button,
//   Divider,
// } from "@mui/material";
// import {
//   Facebook,
//   Twitter,
//   Google,
//   Instagram,
//   Home,
//   Email,
//   Phone,
//   Print,
// } from "@mui/icons-material";

function Footer() {
  return (
    // <Box
    //   sx={{
    //     bgcolor: Colors.primary,
    //     p: {
    //       xs: "1rem 1.5rem 1rem",
    //       sm: "1.5rem 3rem 2rem",
    //       md: "4rem 9rem 3rem",
    //     },
    //     color: "white",
    //   }}
    // >
    //   <Box
    //     sx={{
    //       bgcolor: Colors.primary,
    //       display: { xs: "block", sm: "block", md: "flex" },
    //       justifyContent: "space-between",
    //       gap: 4,
    //     }}
    //   >
    //     {footerData.map((section, index) => (
    //       <Box
    //         key={index}
    //         sx={{
    //           paddingRight: { sm: "2rem", md: "3rem" },
    //         }}
    //       >
    //         <Typography
    //           variant="h6"
    //           sx={{
    //             mb: 2,
    //             fontWeight: "bold",
    //             borderBottom: { xs: "1px solid white" },
    //             pb: "1rem",
    //           }}
    //         >
    //           {section.mainHeading}
    //         </Typography>
    //         {Array.isArray(section.subHeading) ? (
    //           section.subHeading.map((sub, subIndex) => (
    //             <Typography
    //               component={Link}
    //               to={sub.to}
    //               key={subIndex}
    //               variant="body2"
    //               sx={{
    //                 textDecoration: "none",
    //                 color: "inherit",
    //                 display: "block",
    //                 margin: "0 0.5rem 1rem 0",
    //                 transition: "color 0.2s",
    //                 width:"fit-content",
    //                 "&:hover": {
    //                   color: "rgb(142, 153, 102)",

    //                 },
    //               }}
    //             >
    //               {sub.text}
    //             </Typography>
    //           ))
    //         ) : (
    //           <Typography variant="body2">{section.subHeading}</Typography>
    //         )}
    //       </Box>
    //     ))}
    //   </Box>
    //   <Box
    //     sx={{
    //       p: "1rem 0 0 0",
    //       borderTop: "1px solid white",
    //       display: "flex",
    //       alignContent: "center",
    //       textAlign: "left",
    //       justifyContent: "space-between",
    //       m: "1rem 0 0",
    //     }}
    //   >
    //     <Box>
    //       <Typography variant="h4" sx={{ font: Fonts.primaryFont }}>
    //         TrustBridge
    //       </Typography>
    //       {/*  */}
    //       <Typography
    //         variant="title"
    //         sx={{ font: Fonts.primaryFont, fontSize: "13px" }}
    //       >
    //         Copyright © 2024-2026 TrustBridge.com, Inc. All rights reserved
    //       </Typography>
    //     </Box>
    //   </Box>
    // </Box>
    <Box>
      <Box sx={{bgcolor: Colors.primary, py: 10, color:"white"
      }}>
        <Container>
          <Grid container justifyContent={"center"}>
            <Grid item xs={12} textAlign={"center"}>
              <Typography variant="h4" sx={{ mb: 2 }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{ fontWeight: "bold", color: "inherit" }}
                >
                  TrustBridge
                </Link>
              </Typography>
              <Box sx={{ mb: 2, display:{xs:"block", md:"flex"}}}>
                <Typography>
                  <Link
                    href="#"
                    underline="none"
                    sx={{ mx: 1, color: "inherit" }}
                  >
                    Home
                  </Link>
                </Typography>
                <Typography>
                  <Link
                    href="#"
                    underline="none"
                    sx={{ mx: 1, color: "inherit" }}
                  >
                    Faq&apos;s
                  </Link>
                </Typography>
                <Typography>
                  <Link
                    href="#"
                    underline="none"
                    sx={{ mx: 1, color: "inherit" }}
                  >
                    About
                  </Link>
                </Typography>
                <Typography>
                  <Link
                    href="#"
                    underline="none"
                    sx={{ mx: 1, color: "inherit" }}
                  >
                    License
                  </Link>
                </Typography>
                <Typography>
                  <Link
                    href="/escrow"
                    underline="none"
                    sx={{ mx: 1, color: "inherit" }}
                  >
                    Escrow
                  </Link>
                </Typography>
                <Typography>
                  <Link
                    href="#"
                    underline="none"
                    sx={{ mx: 1, color: "inherit" }}
                  >
                    Contact
                  </Link>
                </Typography>
              </Box>

              <Box>
                <Button href="#" sx={{ mx: 1, color: "inherit" }}>
                  <Twitter />
                </Button>
                <Button href="#" sx={{ mx: 1, color: "inherit" }}>
                  <Facebook />
                </Button>
                <Button href="#" sx={{ mx: 1, color: "inherit" }}>
                  <Instagram />
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" sx={{ mt: 5 }}>
            <Grid item xs={12} textAlign="center">
              <Typography variant="body2" color={Colors.secondaryColor} sx={{fontSize: "13px" }}>
                Copyright © 2024-2026 TrustBridge.com, Inc. All rights reserved
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
    // <>
    //   <Box sx={{ backgroundColor: "#45526e", color: "white", p: 4 }}>
    //     {/* <Container> */}
    //     <Grid container spacing={2}>
    //       {/* Company Name */}
    //       <Grid item size={4}>
    //         <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
    //           Company name
    //         </Typography>
    //         <Typography variant="body2">
    //           Here you can use rows and columns to organize your footer content.
    //           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //         </Typography>
    //       </Grid>
    //       <Grid size={8}>
    //         <Box display={"flex"} sx={{justifyContent:"space-around"}}>

    //         {/* Products */}
    //         <Box>
    //           <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
    //             Products
    //           </Typography>
    //           <Typography variant="body2">
    //             <a href="#" style={{ color: "white", textDecoration: "none" }}>
    //               MDBootstrap
    //             </a>
    //           </Typography>
    //           <Typography variant="body2">
    //             <a href="#" style={{ color: "white", textDecoration: "none" }}>
    //               MDWordPress
    //             </a>
    //           </Typography>
    //           <Typography variant="body2">
    //             <a href="#" style={{ color: "white", textDecoration: "none" }}>
    //               BrandFlow
    //             </a>
    //           </Typography>
    //           <Typography variant="body2">
    //             <a href="#" style={{ color: "white", textDecoration: "none" }}>
    //               Bootstrap Angular
    //             </a>
    //           </Typography>
    //         </Box>

    //         {/* Useful Links */}
    //         <Box>
    //           <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
    //             Useful links
    //           </Typography>
    //           <Typography variant="body2">
    //             <a href="#" style={{ color: "white", textDecoration: "none" }}>
    //               Your Account
    //             </a>
    //           </Typography>
    //           <Typography variant="body2">
    //             <a href="#" style={{ color: "white", textDecoration: "none" }}>
    //               Become an Affiliate
    //             </a>
    //           </Typography>
    //           <Typography variant="body2">
    //             <a href="#" style={{ color: "white", textDecoration: "none" }}>
    //               Shipping Rates
    //             </a>
    //           </Typography>
    //           <Typography variant="body2">
    //             <a href="#" style={{ color: "white", textDecoration: "none" }}>
    //               Help
    //             </a>
    //           </Typography>
    //         </Box>

    //         {/* Contact */}
    //         <Box>
    //           <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
    //             Contact
    //           </Typography>
    //           <Typography variant="body2">
    //             <Home sx={{ mr: 1 }} /> New York, NY 10012, US
    //           </Typography>
    //           <Typography variant="body2">
    //             <Email sx={{ mr: 1 }} /> info@gmail.com
    //           </Typography>
    //           <Typography variant="body2">
    //             <Phone sx={{ mr: 1 }} /> + 01 234 567 88
    //           </Typography>
    //           <Typography variant="body2">
    //             <Print sx={{ mr: 1 }} /> + 01 234 567 89
    //           </Typography>
    //         </Box>
    //         </Box>

    //       </Grid>
    //     </Grid>

    //     <Divider sx={{ my: 3, borderColor: "white" }} />

    //     <Grid container alignItems="center" justifyContent="space-between">
    //       <Grid item>
    //         <Typography variant="body2">
    //           &copy; 2020 Copyright:{" "}
    //           <a
    //             href="https://mdbootstrap.com/"
    //             style={{ color: "white", textDecoration: "none" }}
    //           >
    //             MDBootstrap.com
    //           </a>
    //         </Typography>
    //       </Grid>

    //       <Grid item size>
    //         <Button sx={{ color: "white" }}>
    //           <Facebook />
    //         </Button>
    //         <Button sx={{ color: "white" }}>
    //           <Twitter />
    //         </Button>
    //         <Button sx={{ color: "white" }}>
    //           <Google />
    //         </Button>
    //         <Button sx={{ color: "white" }}>
    //           <Instagram />
    //         </Button>
    //       </Grid>
    //     </Grid>
    //     {/* </Container> */}
    //   </Box>
    // </>
  );
}

export default Footer;
