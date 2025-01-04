import React, { useEffect, useState } from "react";

import {
  Typography,
  Box,
  Button,
  Select,
  MenuItem,
  TextField,
  Autocomplete,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import PropTypes from "prop-types";

import { Link, useHref } from "react-router-dom";

import Circles from "../../EscrowAssets/svgs/Circles";
import TickSvg from "../../EscrowAssets/Untick.png";
import CarIcon from "../../EscrowAssets/EscrowCarIcon.png";
import BoxIcon from "../../EscrowAssets/EscrowBox.png";
import ServiceIcon from "../../EscrowAssets/EscrowService.png";

//Escrow Method Imports
import EscrowIcon1 from "../../EscrowAssets/Icons-01.png";
import EscrowIcon2 from "../../EscrowAssets/Icons-02.png";
import EscrowIcon3 from "../../EscrowAssets/Icons-03.png";
import EscrowIcon4 from "../../EscrowAssets/Icons-04.png";
import EscrowIcon5 from "../../EscrowAssets/Icons-05.png";

//Escrow Products Imports
import Domain from "../../EscrowAssets/Icon-06-01.png";
import Vehicle from "../../EscrowAssets/Icon-06-02.png";
import Electronic from "../../EscrowAssets/Icon-06-03.png";
import Merchandise from "../../EscrowAssets/Icon-06-04.png";
import Milestone from "../../EscrowAssets/Icon-06-05.png";
import Item from "../../EscrowAssets/Icon-06-06.png";

import "./reusableComponents.css";

const Colors = {
  subNavGradient: "linear-gradient(rgb(1, 66, 106), rgb(0, 29, 66))",
  button: "rgb(60, 185, 93)",
  buttonHover: "rgb(76, 170, 99)",
  secondaryColor: "rgb(79, 87, 89)",
  fontColor: "#2b3340",
};

const Fonts = {
  primaryFont:
    "Montserrat, Helvetica, Arial, 'Microsoft Yahei', STXihei, sans-serif",
};

export const GetStartedButton = ({ additionalStyles = {},Link = "" }) => {
  return (
    <>
      <Button
      component={Link}
      to={Link}
        variant="primary"
        sx={{
          p: "0.8rem",
          bgcolor: Colors.button,
          fontSize: "0.9rem",
          fontWeight: "500",
          "&:hover": {
            bgcolor: Colors.buttonHover,
          },
          ...additionalStyles,
        }}
      >
        Get Started Now
      </Button>
    </>
  );
};

export function SubMenuNavComponent({ data }) {
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
          transition: "all 1s ease",
          zIndex: 10,
        }}
      >
        <Grid container>
          {data.map((submenuItem) => (
            <Grid
              key={submenuItem.index}
              component={Link}
              to={"/escrow/home"}
              size={4}
              sx={{
                transition: "all 0.4s ease",
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
            >
              {submenuItem.mainHeading}
              <Typography variant="body2">{submenuItem.subHeading}</Typography>
            </Grid>
          ))}
        </Grid>
        {/* Start Escrow component */}
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
          <GetStartedButton />
        </Box>
      </Box>
    </>
  );
}

SubMenuNavComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      mainHeading: PropTypes.string.isRequired,
      subHeading: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export const BarTypography = (props) => (
  <Typography sx={{ color: Colors.secondaryColor }}>{props.Text}</Typography>
);
export const BarSelect = ({ options, rolee, setRolee }) => (
  <Select
    value={rolee}
    onChange={(e) => setRolee(e.target.value)}
    sx={{
      width: "100%",
      "& .MuiSelect-select": {
        padding: "0 0 0 5px !important",
        textAlign: "left",
      },
      "& .MuiSelect-icon": {
        p: "0",
        m: 0,
      },
      "& fieldset": { border: "none", p: "0" },
    }}
  >
    {options.map((item) => (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    ))}
  </Select>
);
export const BarAutocomplete = ({ option, value, setValue }) => (
  <Autocomplete
    options={option}
    value={value}
    onChange={(event, newValue) => setValue(newValue)}
    renderInput={(params) => <TextField {...params} />}
    sx={{
      width: "100%",
      "& .MuiAutocomplete-inputRoot": { height: "40px" },
      "& .MuiInputBase-root": { height: "40px" },
      "& fieldset": { border: "none" },
    }}
  />
);

export function StartHome() {
  const [role, setRole] = useState("Selling");
  const [curreny, setCurreny] = useState("PKR");
  const [value, setValue] = useState("Domains");
  const [currentIndex, setCurrentIndex] = useState(0);
  const selectOptions1 = ["Selling", "Buying", "Brokering"];
  const selectOptions2 = ["PKR", "USD", "CAD", "UK"];
  const AutoCompleteOptions1 = [
    "Domains",
    "Cars, Trucks, etc.",
    "Contracted Services",
    "Milestone Transactions",
    "Jewelry",
    "Electronics",
  ];
  const spanStyle1 = {
    position: "relative",
    display: "block",
    height: "1px",
    width: "170%" /* Adjust the width as needed */,
    backgroundColor: "rgb(224, 221, 221)",
    transform: "rotate(270deg)",
    left: "-208px",
    top: "-235px",
  };
  const spanStyle2 = {
    position: "relative",
    display: "block",
    height: "1px",
    width: "55%" /* Adjust the width as needed */,
    backgroundColor: "#fff",
    transform: "rotate(270deg)",
    left: "-56px",
    top: "72px",
  };

  const imgStyle = {
    position: "absolute",
    right: "425px",
    zIndex: 5,
    top: "96px",
    animation: "slideFromTopimg 1s ease-out",
  };
  const myobj = [
    {
      picture: BoxIcon,
      MainHeading: ["Complete", "protection", "for merchandise"],
      subheading: [
        { text: "Buyer and seller agree on terms" },
        { text: "Buyer pays TrustBridge" },
        { text: "Seller ships the merchandise" },
        { text: "Buyer inspects goods" },
        { text: "Buyer approves goods" },
        { text: "TrustBridge pays the seller" },
      ],
    },
    {
      picture: CarIcon,
      MainHeading: [
        "Buy or sell ",
        "your vehicle",
        "safely and",
        "confidently",
      ],
      subheading: [
        { text: " Buyer and seller agree on terms" },
        { text: "Buyer pays TrustBridge" },
        { text: "Seller ships the vehicle" },
        { text: "Buyer inspects vehicle" },
        { text: "Buyer approves vehicle" },
        { text: "TrustBridge pays the seller" },
      ],
    },
    {
      picture: ServiceIcon,
      MainHeading: [
        "Pay for services",
        "as you go with ",
        "milestone",
        "payments",
      ],
      subheading: [
        { text: "Buyer and seller agree on terms" },
        { text: "Buyer pays TrustBridge" },
        { text: "Seller provides the service" },
        { text: "Seller provides the service" },
        { text: "Buyer approves the milestone" },
        { text: "TrustBridge pays the seller" },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % myobj.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "rgb(1, 66, 106)",
          display: { xs: "block" },
          "@media (min-width:720px)": { display: "flex" },
          flexDirection: {},
          gap: 2,
          p: "1rem 0 9rem",
        }}
      >
        {/* First Box (Form Section) */}
        <Box
          sx={{
            pt: 7,
            flex: 1,
            color: "white",
            animation: "slideFromLeft 1s ease-out",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              marginBottom: 2,
              fontWeight: "700",
              fontSize: "41px",
              fontFamily:
                "Montserrat, Helvetica, Arial, 'Microsoft Yahei', STXihei, sans-serif",
            }}
          >
            Never buy or sell online <br /> without using <br /> TrustBridge
          </Typography>
          <Typography
            variant="h6"
            sx={{
              marginBottom: 3,
              fontFamily:
                "Montserrat, Helvetica, Arial, 'Microsoft Yahei', STXihei, sans-serif",
            }}
          >
            With TrustBridge you can buy and sell anything safely <br /> without
            the risk of chargebacks. Truly secure payments.
          </Typography>
          <Box
            sx={{
              display: "flex",
              p: "0.1rem 1rem",
              bgcolor: "white",
              borderRadius: "4px",
              width: "100%",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderRight: `1px solid ${Colors.secondaryColor}`,
                textAlign: "center",
                width: "40%",
                height: "85%",
              }}
            >
              <BarTypography Text={"I'm"} />
              <BarSelect
                options={selectOptions1}
                rolee={role}
                setRolee={setRole}
              />
            </Box>
            <BarAutocomplete
              option={AutoCompleteOptions1}
              value={value}
              setValue={setValue}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              p: "0.1rem 1rem",
              bgcolor: "white",
              borderRadius: "4px",
              mt: "0.5rem",
              width: "100%",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                // borderRight: `1px solid ${Colors.secondaryColor}`,
                textAlign: "center",
                width: "100%",
                height: "75%",
              }}
            >
              <BarTypography Text={"for"} />
              <TextField
                id="standard-basic"
                defaultValue="1000"
                variant="standard"
                fullWidth
                sx={{
                  "& .MuiInput-underline:before": {
                    borderBottom: "none", // Removes the default underline
                  },
                  "& .MuiInput-underline:after": {
                    borderBottom: "none", // Ensures no underline after focus
                  },
                  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                    borderBottom: "none", // Removes hover underline
                  },
                  "& .MuiInput-root": {
                    padding: "5px 0 5px 12px", // Align with other items
                    m: 0,
                  },
                  "& :hover": {
                    borderBottom: "none",
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                width: "60%",
                justifyContent: "center",
                borderLeft: `1px solid ${Colors.secondaryColor}`,
                height: "55%",
              }}
            >
              <BarSelect
                options={selectOptions2}
                rolee={curreny}
                setRolee={setCurreny}
              />
            </Box>
          </Box>
          <GetStartedButton additionalStyles={{ mt: "0.5rem" }} />
        </Box>

        {/* Second Box (Dynamic Content) */}
        <Box
          sx={{
            flex: 1,
            display: "block",
            // "@media (min-width:800)": {display:"block"} ,
            color: "white",
            textAlign: "Left",
            animation: "slideFromTop 1s ease-out",
          }}
        >
          <Box sx={{ display: { sm: "block", md: "flex" }, zIndex: 1100 }}>
            <Box sx={{ p: "0 1rem 0 0" }}>
              <img
                src={myobj[currentIndex].picture}
                alt=""
                height={192}
                width={200}
                style={imgStyle}
              />
              <Circles />
            </Box>
            <Box sx={{ p: "2.5rem 0 0 0" }}>
              {myobj[currentIndex].MainHeading.map((item, index) => (
                <Typography
                  key={index}
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    lineHeight: "1.4",
                    fontFamily:
                      "Montserrat, Helvetica, Arial, 'Microsoft Yahei', STXihei, sans-serif",
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box></Box>
            {/* Subheadings */}
            <Box sx={{ p: "0 3.8rem 0 0" }}>
              <span style={spanStyle1}></span>
              {myobj[currentIndex].subheading.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: "0.5rem",
                  }}
                >
                  <img
                    src={TickSvg}
                    alt=""
                    style={{ height: "30px", width: "30px" }}
                  />
                  <Typography
                    sx={{
                      fontFamily:
                        "Montserrat, Helvetica, Arial, 'Microsoft Yahei', STXihei, sans-serif",
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              ))}
              <span style={spanStyle2}></span>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export const EscrowMethod = () => {
  const escrowSteps = [
    { Img: EscrowIcon1, caption: "1. Buyer and Seller agree to terms" },
    { Img: EscrowIcon2, caption: "2. Buyer submits payment to TrustBridge " },
    {
      Img: EscrowIcon3,
      caption: "3. Seller delivers goods or service to buyer ",
    },
    { Img: EscrowIcon4, caption: "4. Buyer approves goods or services " },
    {
      Img: EscrowIcon5,
      caption: "5. TrustBridge.com releases payment to seller ",
    },
  ];

  return (
    <>
      <Box
        sx={{
          justifyItems: "center",
          display: "block",
          m: "1rem",
        }}
      >
        <Box
          sx={{
            justifyItems: "center",
            textAlign: { xs: "left", md: "center" },
            m: {
              xs: "2.5rem 1rem 1.5rem",
              sm: "3rem 3rem 1.5rem",
              md: "5rem 10rem 3.5rem",
              lg: "5rem 10rem 3.5rem",
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              mb: "1rem",
              fontFamily: Fonts.primaryFont,
              color: Colors.fontColor,
            }}
          >
            Your Transactions, Secured and Simplified with TrustBridge
          </Typography>
          <Typography
            sx={{
              fontFamily: Fonts.primaryFont,
              fontWeight: 400,
              color: Colors.fontColor,
            }}
          >
            Escrow is the most secure payment method from a counterparty risk
            perspective - safeguarding both buyer and seller, all funds
            transacted using escrow are kept in trust.
          </Typography>
        </Box>

        <Box
          sx={{
            display: { sm: "block", md: "flex" },
            justifyContent: "space-between",
            textAlign: "center",
            mb: "2rem",
          }}
        >
          {escrowSteps.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: { xs: "flex", md: "block" },
                justifyContent: { xs: "left", md: "center" },
              }}
            >
              <img
                src={item.Img}
                style={{ height: "150px", width: "150px", m: "0.5rem 0" }}
              />
              <Typography
                sx={{
                  fontFamily: Fonts.primaryFont,
                  fontWeight: "bold",
                  color: Colors.fontColor,
                  alignContent: "center",
                }}
              >
                {item.caption}
              </Typography>
            </Box>
          ))}
        </Box>
        <GetStartedButton additionalStyles={{ color: "white" }} />
        <Typography
          component={Link}
          to={"#"}
          sx={{
            display: "block",
            m: "1rem 0 5rem 0",
            fontFamily: Fonts.primaryFont,
            textDecoration: "none",
            color: Colors.button,
            "&:hover": {
              textDecoration: "underline",
              color: Colors.buttonHover,
            },
          }}
        >
          Learn More about Escrow
        </Typography>
      </Box>
    </>
  );
};

export const EscrowProducts = () => {
  const escrowProducts = [
    {
      Link: "#",
      Img: Domain,
      Heading: "Domain Names",
      description:
        "Escrow.com is the dominant payment method for the buying & selling of domain names, with transactions including uber.com, snapchat.com, spacex.com, twitter.com, instagram.com, freelancer.com, gmail.com, slack.com, wechat.com, chrome.com and wordpress.com.",
    },
    {
      Link: "#",
      Img: Vehicle,
      Heading: "Motor Vehicles",
      description:
        "When buying classic cars, a used sailboat or even an aircraft engine Escrow.com ensures money transfer and vehicle delivery with every sale. Our experienced personnel can even help you with shipping documentation, titles, liens and more.",
    },
    {
      Link: "#",
      Img: Electronic,
      Heading: "Electronics",
      description:
        "Escrow.com handles the buying and selling large scale computer setups, professional sound systems and all manner of electronic equipment both big and small.",
    },
    {
      Link: "#",
      Img: Merchandise,
      Heading: "General Merchandise",
      description:
        "From computer hardware to luxury goods, you can safely and easily buy and sell merchandise all over the world with the protection of Escrow.com.",
    },
    {
      Link: "#",
      Img: Milestone,
      Heading: "Milestone Transactions",
      description:
        "Paying for a good or service and want money released only at certain stages? Use Escrow to assure that money is released only when you're happy with each step.",
    },
    {
      Link: "#",
      Img: Item,
      Heading: "Jewelry, Watches, and Fashion",
      description:
        "Buying and selling expensive jewelry online can be difficult, as it is extremely difficult to spot a scam. Escrow.com's simple 5-step process ensures money transfer and jewelry delivery with every sale.",
    },
  ];
  return (
    <>
      <Box sx={{ justifyItems: "center" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            mb: "1rem",
            fontFamily: Fonts.primaryFont,
            color: Colors.fontColor,
            textAlign: { xs: "left", md: "center" },
            m: {
              xs: "2.5rem 1rem 1.5rem",
              sm: "3rem 5rem 1.5rem",
              md: "5rem 5rem 3.5rem",
              lg: "5rem 5rem 3.5rem",
            },
            fontSize:"2.2rem"
          }}
        >
          Safely buy and sell products and services of any amount.
        </Typography>
        <Box>
          <Grid container 
          spacing={2}
          sx={{
            m: {
              xs: "2rem 0.5rem 1.5rem",
              sm: "3rem 1.5rem 1.5rem",
              md: "5rem 5rem 1.5rem",
              lg: "5rem 5rem 1.5rem",
            },
          }}>
            {escrowProducts.map((item, index) => {
              return (
              <Grid size={{xs:12,md:6}} key={index} display={"block"} sx={{p:"0 3rem 0 4rem"}}>
                <img src={item.Img} alt="" style={{height:"100px",width:"100px"}}/>
                <Typography variant="h6">{item.Heading}</Typography>
                <Typography variant="body">{item.description}</Typography>
                <Typography
                  component={Link}
                  to={item.Link}
                  sx={{
                    display: "block",
                    m: "1rem 0 5rem 0",
                    fontFamily: Fonts.primaryFont,
                    textDecoration: "none",
                    color: Colors.button,
                    "&:hover": {
                      textDecoration: "underline",
                      color: Colors.buttonHover,
                    },
                  }}
                >
                  Learn More
                </Typography>
              </Grid>
              )
            })}
          </Grid>
        </Box>
        <GetStartedButton additionalStyles={{color:"white"}} />
      </Box>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default function reusableComponents() {
  return <></>;
}
