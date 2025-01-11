import React, { useState, useEffect } from "react";

function useReusableComponent({ BoxIcon, CarIcon, ServiceIcon }) {
  const [role, setRole] = useState("Selling");
  const [curreny, setCurreny] = useState("PKR");
  const [value, setValue] = useState("Domains");
  const [currentIndex, setCurrentIndex] = useState(0);
  const selectOptions2 = ["PKR", "USD", "CAD", "UK"];
  const spanStyle1 = {
    // position: "relative",
    display: "block",
    height: "1px",
    // width: "150%" /* Adjust the width as needed */,
    backgroundColor: "rgb(224, 221, 221)",
    transform: "rotate(270deg)",
    // right: "123px",
    // right: "33.5%",
    // bottom: "182px",
    zIndex: 11,
  };
  const spanStyle2 = {
    // position: "relative",
    display: "block",
    height: "1px",
    // width: "55%" /* Adjust the width as needed */,
    backgroundColor: "#fff",
    transform: "rotate(270deg)",
    // right: "33.5%",
    // top: "170px",
  };

  const imgStyle = {
    position: "absolute",
    right: "405px",
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
  const [activeIndex, setActiveIndex] = useState(0); // Initial active index
  const totalItems = 6;
  const totalMembers = 3;
  useEffect(() => {
    // Update activeIndex every 1 second
    const activeIndexInterval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 1500);

    // Update currentIndex every 8 seconds
    const currentIndexInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalMembers);
    }, 9000);

    // Cleanup intervals
    return () => {
      clearInterval(activeIndexInterval);
      clearInterval(currentIndexInterval);
    };
  }, [totalItems]);
  return {
    role,
    value,
    curreny,
    currentIndex,
    selectOptions2,
    spanStyle1,
    spanStyle2,
    imgStyle,
    myobj,
    activeIndex,
    setRole,
    setCurreny,
    setValue,
  };
}

export default useReusableComponent;
