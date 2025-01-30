import React from "react";
import MainProductCard from "../../Components/MainProductCard/MainProductCard";
import mobile from "../../StoreAssets/img/mobile2.jpg";
import laptop from "../../StoreAssets/img/laptop2.jpg";
import watch from "../../StoreAssets/img/watch2.jpg";
import speaker from "../../StoreAssets/img/speaker2.jpg";
import { Grid2 as Grid } from "@mui/material";

function MainProductsComponent() {
  return (
    <>
      <Grid container spacing={2} >
        <Grid item size={3}>
          <MainProductCard
            image={watch}
            topSubHeading={"BIG SCREEN"}
            bottomSubHeading={"Pay $399 to buy this Watch "}
            Heading={"Smart Watch Series 7"}
            text={"white"}
          />
        </Grid>
        <Grid item size={3}>
          <MainProductCard
            image={mobile}
            topSubHeading={"Smartphones"}
            bottomSubHeading={"Pay $2000 to buy this mobile "}
            Heading={"Iphone 16 Pro Max"}
            text={"black"}
          />
        </Grid>
        <Grid item size={3}>
          <MainProductCard
            image={laptop}
            topSubHeading={"Studio Display"}
            bottomSubHeading={"27 Inch 5K retina display"}
            Heading={"600 nits of Brightness "}
            text={"black"}
          />
        </Grid>
        <Grid item size={3}>
          <MainProductCard
            image={speaker}
            topSubHeading={"Home Speakers"}
            bottomSubHeading={"Pay $700 to buy this Item "}
            Heading={"Room Filling Sound"}
            text={"black"}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default MainProductsComponent;
