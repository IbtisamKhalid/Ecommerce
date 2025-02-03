import React from "react";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import ProductPageContainer from "../../../Containers/ProductPageContainer/ProductPageContainer";

import mobile from "../../../StoreAssets/img/mobile2.jpg";
import laptop from "../../../StoreAssets/img/laptop2.jpg";
import watch from "../../../StoreAssets/img/watch2.jpg";
import speaker from "../../../StoreAssets/img/Speaker2.jpg";
import SP1 from "../../../StoreAssets/img/SpecialProduct1/SP1.jpg";
import SP2 from "../../../StoreAssets/img/SpecialProduct1/SP2.jpg";
import SP3 from "../../../StoreAssets/img/SpecialProduct1/SP3.jpg";
// import SP4 from "../../../StoreAssets/img/SpecialProduct1.jpg";
import sp1 from "../../../StoreAssets/img/SpecialProduct2/sp1.jpg";
import sp2 from "../../../StoreAssets/img/SpecialProduct2/sp2.jpg";
import sp3 from "../../../StoreAssets/img/SpecialProduct2/sp3.jpg";
// import  from "../../../StoreAssets/img/SpecialProduct.jpg";

function ImportsProductPage() {
  const products = [
    {
      category: 0,
      Images: [SP1, SP2, SP3],
      Name: "Honor T1 7.0 1 GB RAM 8 GB ROM 7 inch with Wi-Fi+3G Tablet",
      Price: "$100.00",
      Brand: "Havells",
      Tags: ["laptop", "oppo", "speaker", "tablet"],
      ProductColors: [
        "rgb(181, 206, 222)",
        "rgb(186, 183, 186)",
        "rgb(243, 203, 196)",
      ],
      // Description:
      //   "Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      Feedback: [
        { Stars: 4, Review: "Very Good Products" },
        { Stars: 4, Review: "Very Nice" },
        { Stars: 4, Review: "Very Beautiful Products" },
        { Stars: 4, Review: "Recomended" },
      ],
    },
  ];
  return {
    ProductPageContainer,
    products,
    Box,
  };
}

export default ImportsProductPage;
