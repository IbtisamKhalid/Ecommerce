import React from "react";
import {
  Typography,
  Box,
  Button,
  ListItem,
  ListItemText,
  ListItemButton,
  List,
  Drawer,
  Divider,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CssBaseline from "@mui/material/CssBaseline";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const Colors = {
  subNavGradient: "linear-gradient(rgb(1, 66, 106), rgb(0, 29, 66))",
  button: "rgb(60, 185, 93)",
  buttonHover: "rgb(109, 219, 138)",
};
const navItems = [
  { index: 0, name: "Comsumer" },
  { index: 1, name: "About" },
  { index: 2, name: "Help" },
];

const submenuData = [
  [
    { index:0,mainHeading: "Escrow", subHeading: "What is Escrow" },
    { index:1,mainHeading: "Learn More", subHeading: "How It Works" },
    // { index:2,mainHeading: "Learn More", subHeading: "Why Choose Us" },
  ],
  [
    { index:0,mainHeading: "About", subHeading: "Company History" },
    { index:1,mainHeading: "Team", subHeading: "Leadership Team" },
    { index:2,mainHeading: "Careers", subHeading: "Find Jobs" },
  ],
  [
    { index:0,mainHeading: "Help", subHeading: "FAQs" },
    { index:1,mainHeading: "Support Center", subHeading: "talk with Support Center" },
    { index:2,mainHeading: "Contact", subHeading: "How to Contact Us" },
  ],
];


export function DrawerAppBar(props) {
  // eslint-disable-next-line react/prop-types
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [hoveredButton, setHoveredButton] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [itemIndex,setItemIndex]= React.useState(null)

  const handleMouseEnter = (index,name) => {
    setHoveredButton(name);
    setName(name);
    setItemIndex(index);
    console.log(itemIndex)
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
    setName(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TrustBridge
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: { sm: "none" } }}>
        <Button sx={{ color: "black" }}>Login</Button>
        <Button sx={{ color: "black" }}>SignUp</Button>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", position: "relative" }}
    >
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: { xs: "0 1.5rem", sm: "0 3rem", md: "0 6rem", lg: "0 9rem" },
          background: Colors.subNavGradient,
          color: "white",
          // height: "70px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ paddingRight: "1rem" }}
          >
            TrustBridge
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Box key={item.name} onMouseLeave={handleMouseLeave} sx={{}}>
                <Button
                  sx={{
                    transition: "all 0.4s ease",
                    color: "white",
                    "&:hover": {
                      borderBottom: "1px solid rgba(190, 206, 218, 0.5)",
                      bgcolor: "rgba(21,98,153,0.5)",
                    },
                    p: "1rem 1rem 1rem",
                    m: "0.4rem 0",
                  }}
                  onMouseEnter={() => handleMouseEnter(item.index,item.name)}
                  endIcon={
                    hoveredButton === item.name ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )
                  }
                >
                  {item.name}
                </Button>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            "@media (max-width:560px)": { display: "none" },
          }}
        >
          <Button sx={{ color: "white" }}>Login</Button>
          <Button sx={{ color: "white" }}>SignUp</Button>
        </Box>
      </Box>

      {/* { */}
      {hoveredButton && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "65px",
            left: 0,
            width: "100%",
            backgroundColor: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 10,
            transition: "all 0.4s ease",
          }}
          transition
          onMouseEnter={() => handleMouseEnter(itemIndex,name)}
          onMouseLeave={handleMouseLeave}
        >
          <StartEscrow data={submenuData[itemIndex]} />
          {console.log(submenuData[itemIndex],itemIndex)}
        </Box>
        )
      }

      {/* Drawer Section */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export function StartEscrow({data}) {
  return (
    <>
      <Box
        sx={{
          backgroundImage: Colors.subNavGradient,
          p: {
            xs: "0.8rem 0",
            sm: "1rem 5rem",
            md: "1.8rem 9rem",
            lg: "2.5rem 12rem",
          },
          transition: "padding 0.3s ease",
          borderTop: "1px solid white",
        }}
      >
        <Grid container spacing={3}>
        {data.map((submenuItem) => (
        <Grid
          key={submenuItem.index}
          component={Link}
            to={"/escrow/home"}
            size={4}
            sx={{
              transition: "all 0.4s ease",
              border: "1px solid white",
              p: "11px 16px ",
              borderRadius: "4px",
              color: "white",
              cursor: "pointer",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "600",
              "&:hover": {
                bgcolor: "rgba(21,98,153,0.5)",
              },
            }}
            className="hehehe"
        >
          {submenuItem.mainHeading}
          <Typography variant="body2">{submenuItem.subHeading}</Typography>
        </Grid>
      ))}
        </Grid>
        {/* Start Escrow component */}{" "}
        <Box
          className="firstBox"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: "1rem",
            border: "1px solid white",
            m: { md: "2rem 0 0" },
            borderRadius: "10px",
            color: "white",
          }}
        >
          {" "}
          <Box className="" sx={{ fontSize: "10px" }}>
            {" "}
            <Typography
              variant="h4"
              sx={{ fontSize: "16px", fontWeight: "600" }}
            >
              {" "}
              Start A Transaction With Escrow{" "}
            </Typography>{" "}
            <Typography
              variant="h6"
              sx={{ fontSize: "14px", fontWeight: "500" }}
            >
              {" "}
              Sell, buy or broker anything from domain names to vehicles{" "}
            </Typography>{" "}
          </Box>{" "}
          <Button
            variant="primary"
            sx={{
              p: "0.8rem",
              bgcolor: Colors.button,
              fontSize: "0.9rem",
              fontWeight: "500",
              "&:hover":{
                bgcolor: Colors.buttonHover,
              }
            }}
          >
            {" "}
            Get Started Now{" "}
          </Button>{" "}
        </Box>{" "}
      </Box>{" "}
    </>
  );
}

StartEscrow.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      mainHeading: PropTypes.string.isRequired,
      subHeading: PropTypes.string.isRequired,
    })
  ).isRequired,
};


// eslint-disable-next-line react-refresh/only-export-components
export default function reusableComponents() {
  return <></>;
}













// const drawerWidth = 240;
// const navItems = [{ name: "Consumer" }, { name: "About Us" }, { name: "Help" }];
// const Colors = {
//   subNavGradient: "linear-gradient(rgb(1, 66, 106), rgb(0, 29, 66))",
//   button: "rgb(60, 185, 93)",
// };
// const subMenuItems = [{}, {}, {}, {}, {}];

// export function DrawerAppBar(props) {
//   const { window } = props;
//   const [name, setName] = React.useState(null);
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [hoveredButton, setHoveredButton] = React.useState(null);
//   const [isMouseEntered, setisMouseEntered] = React.useState(false);
//   const [subMenuDisplay, setSubMenuDisplay] = React.useState("none");
//   const handleMouseEnter = (name) => {
//     setHoveredButton(name);
//   };
//   const handleMouseLeave = (name) => {
//     console.log("Left:", name);
//     if (hoveredButton === name) {
//       setHoveredButton(null);
//     }
//   };

//   const handleDrawertoggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };
//   const drawer = (
//     <Box onClick={handleDrawertoggle} sx={{ textAlign: "center" }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         TrustBridge
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item.name} disablePadding>
//             <ListItemButton
//               component={Link} // Use the Link component here
//               to={item.link} // Pass the route from the item
//               sx={{ textAlign: "center" }}
//             >
//               {" "}
//               <ListItemText primary={item.name} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Box
//         sx={{
//           display: {
//             sm: "none",
//           },
//         }}
//       >
//         <Button sx={{ color: "black" }}>Login</Button>
//         <Button sx={{ color: "black" }}>SignUp</Button>
//       </Box>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <>
//       <Box
//         sx={{ display: "flex", flexDirection: "column", position: "relative" }}
//       >
//         <CssBaseline />
//         {/* AppBar Section */}
//         <AppBar
//           component="nav"
//           sx={{
//             p: { xs: "0 0", sm: "0 3rem", md: "0 6rem", lg: "0 9rem" },
//             transition: "padding 0.3s ease",
//             textAlign: "center",
//           }}
//         >
//           <Toolbar
//             sx={{ justifyContent: "space-between", p: "0 0", height: "1px" }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: { xs: 1, sm: 2 },
//                 textAlign: "center",
//               }}
//             >
//               <IconButton
//                 color="inherit"
//                 aria-label="open drawer"
//                 edge="start"
//                 onClick={handleDrawertoggle}
//                 sx={{ display: { xs: "block", md: "none" } }}
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Typography
//                 variant="h6"
//                 component="div"
//                 sx={{ paddingRight: "2rem" }}
//               >
//                 TrustBridge
//               </Typography>
//               <Box
//                 sx={{
//                   display: { xs: "none", md: "flex" },
//                   gap: { xs: 1, md: 2 },
//                 }}
//               >
//                 {navItems.map((item) => (
//                   <Box
//                     className="hoveredBox"
//                     key={item.name}
//                     sx={{ position: "relative" }}
//                   >
//                     <Button
//                       className={item.name}
//                       sx={{ color: "#fff" }}
//                       onMouseEnter={() => handleMouseEnter(item.name)}
//                       onMouseLeave={() => handleMouseLeave(item.name)}
//                       endIcon={
//                         hoveredButton === item.name ? (
//                           <KeyboardArrowUpIcon />
//                         ) : (
//                           <KeyboardArrowDownIcon />
//                         )
//                       }
//                     >
//                       {item.name}
//                     </Button>
//                   </Box>
//                 ))}
//               </Box>
//             </Box>

//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 2,
//                 "@media (max-width:599px)": {
//                   display: "none",
//                 },
//               }}
//             >
//               <Button sx={{ color: "white" }}>Login</Button>
//               <Button sx={{ color: "white" }}>SignUp</Button>
//             </Box>
//           </Toolbar>
//         </AppBar>

//         {/* StartEscrow Section */}

//         <Box
//           className="startEscrow"
//           onMouseEnter={() => setisMouseEntered(true)}
//           onMouseLeave= {() => handleMouseLeave(name)}
//           sx={{
//             position: "absolute",
//             top: "64px", // Adjust based on the height of your AppBar
//             width: "100%",
//             zIndex: 10,
//             backgroundColor: "white",
//             boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//             display: subMenuDisplay,
//           }}
//           >
//           {/*here i want to show the startEscrow component  */}
//           <StartEscrow />
//         </Box>

//         {/* Drawer Section */}
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawertoggle}
//           ModalProps={{
//             keepMounted: true,
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//     </>
//   );
// }
// export function StartEscrow() {
//   return (
//     <>
//       <Box
//         sx={{
//           backgroundImage: Colors.subNavGradient,

//           p: {
//             xs: "0.8rem 0",
//             sm: "1rem 5rem",
//             md: "1.8rem 9rem",
//             lg: "2.5rem 12rem",
//           },
//           transition: "padding 0.3s ease",
//           borderTop: "1px solid white",
//         }}
//       >
//         <Grid container spacing={3}>
//           <Grid
//             component={Link}
//             to={"/escrow/home"}
//             size={4}
//             sx={{
//               border: "1px solid white",
//               p: "11px 16px ",
//               borderRadius: "4px",
//               color: "white",
//               cursor: "pointer",
//             }}
//             className="hehehe"
//           >
//             component one
//             <Typography className="hehe">inner component</Typography>
//           </Grid>
//           <Grid
//             component={Link}
//             to={"/escrow/home"}
//             size={4}
//             sx={{ border: "2px solid black" }}
//           >
//             component one
//           </Grid>
//           <Grid
//             component={Link}
//             to={"/escrow/home"}
//             size={4}
//             sx={{ border: "2px solid black" }}
//           >
//             component one
//           </Grid>
//           <Grid
//             component={Link}
//             to={"/escrow/home"}
//             size={4}
//             sx={{ border: "2px solid black" }}
//           >
//             component one
//           </Grid>
//         </Grid>

//         {/* Start Escrow component  */}
//         <Box
//           className="firstBox"
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             p: "1rem",
//             border: "1px solid white",
//             m: { md: "2rem 0 0" },
//             borderRadius: "10px",
//           }}
//         >
//           <Box className="" sx={{ fontSize: "10px" }}>
//             <Typography
//               variant="h4"
//               sx={{ fontSize: "16px", fontWeight: "500" }}
//             >
//               Start A Transaction With Escrow
//             </Typography>
//             <Typography
//               variant="h6"
//               sx={{ fontSize: "14px", fontWeight: "400" }}
//             >
//               Sell, buy or broker anything from domain names to vehicles
//             </Typography>
//           </Box>
//           <Button
//             variant="primary"
//             sx={{
//               p: "0.8rem",
//               bgcolor: Colors.button,
//               fontSize: "0.8rem",
//               fontWeight: "400",
//             }}
//           >
//             Get Started Now
//           </Button>
//         </Box>
//       </Box>
//     </>
//   );
// }
