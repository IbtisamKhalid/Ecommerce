import first from "../../StoreAssets/images/main-banner-1.jpg";
import second from "../../StoreAssets/images/catbanner-01.jpg";
import third from "../../StoreAssets/images/catbanner-02.jpg";
import fourth from "../../StoreAssets/images/catbanner-03.jpg";
import fifth from "../../StoreAssets/images/catbanner-04.jpg";
import sixth from "../../StoreAssets/images/service.png";
import seventh from "../../StoreAssets/images/service-02.png";
import eighth from "../../StoreAssets/images/service-03.png";
import ninth from "../../StoreAssets/images/service-04.png";
import tenth from "../../StoreAssets/images/service-05.png";
import Camerapic from "../../StoreAssets/img/SpecialProduct2/sp1.jpg";
import TV from "../../StoreAssets/images/tv.jpg";
import Speaker from "../../StoreAssets/img/speakerhover.jpg";
import Watch from "../../StoreAssets/img/watchhovered.jpg";
import HP from "../../StoreAssets/img/HP.jpg";
import Console from "../../StoreAssets/img/Console.jpg";
import Accesories from "../../StoreAssets/img/Accesories.jpg";
import Monitor from "../../StoreAssets/img/SpecialProduct3/sp1.jpg";
import { Link } from "react-router-dom";
import "./home.css";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import FeaturedCollectionComponent from "../FeaturedCollection/FeaturedCollectionComponent";
import MainProductsComponent from "../MainProductsComponent/MainProductsComponent";
import SpecialProduct from "../SpecialProductComponent/SpecialProduct";
import RecomendedProduct from "../RecomendedProductComponent/RecomendedProduct";
import LogoSliderComponent from "../LogoSliderComponent/LogoSliderComponent";
import { ColorsEcommrace as C } from "../../Theme/EcommeraceTheme";

const pictures = [
  {
    picture: second,
    subHeading: "SUPERCHARGED FOR PROS.",
    mainHeading: "IPAD S13+ Pro.",
    desc: "From $999.00 or $41.62/mo. <br /> for 24 mo.",
    lineebreak: "",
  },
  {
    picture: third,
    subHeading: "SUPERCHARGED FOR PROS.",
    mainHeading: "IPAD S13+ Pro.",
    desc: "From $999.00 or $41.62/mo. <br /> for 24 mo.",
    lineebreak: "",
  },
];
const pictures2 = [
  {
    picture: fourth,
    subHeading: "SUPERCHARGED FOR PROS.",
    mainHeading: "IPAD S13+ Pro.",
    desc: "From $999.00 or $41.62/mo. <br /> for 24 mo.",
    lineebreak: "",
  },
  {
    picture: fifth,
    subHeading: "SUPERCHARGED FOR PROS.",
    mainHeading: "IPAD S13+ Pro.",
    desc: "From $999.00 or $41.62/mo. <br /> for 24 mo.",
    lineebreak: "",
  },
];
const sectionPics1 = [
  {
    Heading: "Camera & Videos",
    items: "12 Items",
    picture: Camerapic,
  },
  {
    Heading: "Smart Television",
    items: "10 Items",
    picture: TV,
  },
  {
    Heading: "Smart Watches",
    items: "17 Items",
    picture: Watch,
  },
  {
    Heading: "Music & Gaming",
    items: "16 Items",
    picture: Console,
  },
];
const sectionPics2 = [
  {
    Heading: "Headphones",
    items: "4 Items",
    picture: HP,
  },
  {
    Heading: "Accessories",
    items: "20 Items",
    picture: Monitor,
  },
  {
    Heading: "Poratable Speaker",
    items: "15 Items",
    picture: Speaker,
  },
  {
    Heading: "Home Appliances",
    items: "15 Items",
    picture: Accesories,
  },
];

function Home() {
  return (
    <>
      {/* Main Pictures Section */}
      <section className="home-wrapper-1 py-5">
        <Box className="container-xxl">
          <Box className="row overflow-hidden">
            <Box className="col-6 p-0 m-0">
              <Box className="main-banner position-relative p-2">
                <img
                  src={first}
                  className="image-fluid rounded-3 "
                  alt="main banner"
                />
                <Box className="main-banner-content position-absolute">
                  <h5>SUPERCHARGED FOR PROS.</h5>
                  <h3>IPAD S13+ Pro.</h3>
                  <p>
                    From $999.00 or $41.62/mo. <br /> for 24 mo. Footnote*
                  </p>
                  <Link className="button a">BUY NOW</Link>
                </Box>
              </Box>
            </Box>

            <Box className="col-3 p-0">
              <Box className="d-flex flex-wrap justify-content-between align-items-center ">
                {pictures.map((value, index) => {
                  return (
                    <Box
                      key={index}
                      className="small-banner position-relative p-2"
                    >
                      <img
                        src={value.picture}
                        className="image-fluid rounded-4"
                        alt="main banner"
                      />

                      <Box className="small-banner-content position-absolute">
                        <h5>{value.subHeading}</h5>
                        <h3>{value.mainHeading}</h3>
                        <p>{value.desc}</p>
                        {/* {console.log(value.subHeading)} */}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Box className="col-3 p-0">
              <Box className="d-flex flex-wrap justify-content-between align-items-center ">
                {pictures2.map((value, index) => {
                  return (
                    <Box
                      key={index}
                      className="small-banner position-relative p-2"
                    >
                      <img
                        src={value.picture}
                        className="image-fluid rounded-4"
                        alt="main banner"
                      />

                      <Box className="small-banner-content position-absolute">
                        <h5>{value.subHeading}</h5>
                        <h3>{value.mainHeading}</h3>
                        <p>{value.desc}</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </section>

      <Box sx={{ backgroundColor: "#f5f5f7" }}>
        
        
        
        
        {/* Advantages */}
        <section className="home-wrapper-2" style={{ padding: "3rem 2rem " }}>
          <Box>
            <Grid container spacing={2}>
              <Grid
                item
                size={{ xs: 3, sm: 6, md: 3 }}
                sx={{ display: "flex", gap: 2, alignItems: "center" }}
              >
                <img
                  src={sixth}
                  alt=""
                  style={{ height: "27px", width: "30px" }}
                />
                <Box>
                  <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                    Free Shipping
                  </Typography>
                  <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                    For orders above $100
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                size={{ xs: 3, sm: 6, md: 3 }}
                sx={{ display: "flex", gap: 2, alignItems: "center" }}
              >
                <img
                  src={seventh}
                  alt=""
                  style={{ height: "30px", width: "30px" }}
                />
                <Box>
                  <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                    Daily Surprise offer
                  </Typography>
                  <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                    Save upto 25% off
                  </Typography>
                </Box>
              </Grid>
              {/* <Grid
                item
                size={{ xs: 2.4, sm: 6, md: 2.4 }}
                sx={{ display: "flex", gap: 2, alignItems: "center" }}
              >
                <img
                  src={eighth}
                  alt=""
                  style={{ height: "33px", width: "30px" }}
                />
                <Box>
                  <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                    24/7 support
                  </Typography>
                  <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                    SHop with an expert
                  </Typography>
                </Box>
              </Grid> */}
              <Grid
                item
                size={{ xs: 3, sm: 6, md: 3 }}
                sx={{ display: "flex", gap: 2, alignItems: "center" }}
              >
                <img
                  src={ninth}
                  alt=""
                  style={{ height: "30px", width: "30px" }}
                />
                <Box>
                  <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                    Affordable Prices
                  </Typography>
                  <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                    get Factory Direct price
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                size={{ xs: 3, sm: 6, md: 3 }}
                sx={{ display: "flex", gap: 2, alignItems: "center" }}
              >
                <img
                  src={tenth}
                  alt=""
                  style={{ height: "25px", width: "30px" }}
                />
                <Box>
                  <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                    Secure Payments
                  </Typography>
                  <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                    100% proteceted payment
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </section>
        
        
        {/* Categories Link */}
        <section style={{ pb: 5 }}>
          <Box
            className="categories"
            sx={{
              borderRadius: "8px",
              margin: "0 1rem",
              p: "1.5rem",
              backgroundColor: "white",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{ borderBottom: "1px solid  #ededed" }}
            >
              {sectionPics1.map((value) => {
                return (
                  <>
                    <Grid
                      item
                      size={3}
                      sx={{
                        borderRight: "1px solid  #ededed",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        p: "1rem 1rem",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            colors: C.colorFeaturedCollectionHeading,
                            fontWeight: "600",
                            fontFamily: "Rubik, Sans Serif",
                            cursor: "pointer",
                            "&:hover": { textDecoration: "underline" },
                          }}
                        >
                          {value.Heading}
                        </Typography>
                        <Typography
                          sx={{
                            colors: C.colorCategoriesSubHeading,
                            fontSize: "14px",
                          }}
                        >
                          {value.items}
                        </Typography>
                      </Box>
                      <img
                        src={value.picture}
                        alt="myPic"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </Grid>
                  </>
                );
              })}
            </Grid>
            <Grid container spacing={2}>
              {sectionPics2.map((value) => {
                return (
                  <>
                    <Grid
                      item
                      size={3}
                      sx={{
                        borderRight: "1px solid  #ededed",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        p: "1rem 1rem",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            colors: C.colorFeaturedCollectionHeading,
                            fontWeight: "600",
                            fontFamily: "Rubik, Sans Serif",
                            cursor: "pointer",
                            "&:hover": { textDecoration: "underline" },
                          }}
                        >
                          {value.Heading}
                        </Typography>
                        <Typography
                          sx={{
                            colors: C.colorCategoriesSubHeading,
                            fontSize: "14px",
                          }}
                        >
                          {value.items}
                        </Typography>
                      </Box>
                      <img
                        src={value.picture}
                        alt="myPic"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Box>
        </section>

        {/* Featured Collection */}
        <section>
          <Box>
            <FeaturedCollectionComponent />
          </Box>
        </section>
        
        {/* Main Products Collection */}
        <section>
          <Box>
            <MainProductsComponent />
          </Box>
        </section>
        
        {/* Recomended Products Collection */}
        <section>
          <Box>
            <LogoSliderComponent />
          </Box>
        </section>
        
        {/* Special Products Collection */}
        <section>
          <Box>
            <SpecialProduct />
          </Box>
        </section>
        
        {/* Recomended Products Collection */}
        <section>
          <Box>
            <RecomendedProduct />
          </Box>
        </section>
      </Box>
    </>
  );
}

export default Home;
