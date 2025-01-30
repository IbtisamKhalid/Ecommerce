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
import Camerapic from "../../StoreAssets/images/camera.jpg";
import { Link } from "react-router-dom";
import "./home.css";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import FeaturedCollectionComponent from "../FeaturedCollection/FeaturedCollectionComponent";
import MainProductsComponent from "../MainProductsComponent/MainProductsComponent";
import SpecialProduct from "../SpecialProductComponent/SpecialProduct";

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
const section2Pics = [
  {
    Heading: "Camera",
    items: "10 Items",
    picture: Camerapic,
  },
  {
    Heading: "Camera",
    items: "10 Items",
    picture: Camerapic,
  },
  {
    Heading: "Camera",
    items: "10 Items",
    picture: Camerapic,
  },
  {
    Heading: "Camera",
    items: "10 Items",
    picture: Camerapic,
  },
];
const section2Pics2 = [
  {
    Heading: "Camera",
    items: "10 Items",
    picture: Camerapic,
  },
  {
    Heading: "Camera",
    items: "10 Items",
    picture: Camerapic,
  },
  {
    Heading: "Camera",
    items: "10 Items",
    picture: Camerapic,
  },
  {
    Heading: "Camera",
    items: "10 Items",
    picture: Camerapic,
  },
];

function Home() {
  return (
    <>
      {/* Main Pictures Section */}
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row overflow-hidden">
            <div className="col-6 p-0 m-0">
              <div className="main-banner position-relative p-2">
                <img
                  src={first}
                  className="image-fluid rounded-3 "
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h5>SUPERCHARGED FOR PROS.</h5>
                  <h3>IPAD S13+ Pro.</h3>
                  <p>
                    From $999.00 or $41.62/mo. <br /> for 24 mo. Footnote*
                  </p>
                  <Link className="button a">BUY NOW</Link>
                </div>
              </div>
            </div>

            <div className="col-3 p-0">
              <div className="d-flex flex-wrap justify-content-between align-items-center ">
                {pictures.map((value, index) => {
                  return (
                    <div
                      key={index}
                      className="small-banner position-relative p-2"
                    >
                      <img
                        src={value.picture}
                        className="image-fluid rounded-4"
                        alt="main banner"
                      />

                      <div className="small-banner-content position-absolute">
                        <h5>{value.subHeading}</h5>
                        <h3>{value.mainHeading}</h3>
                        <p>{value.desc}</p>
                        {/* {console.log(value.subHeading)} */}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-3 p-0">
              <div className="d-flex flex-wrap justify-content-between align-items-center ">
                {pictures2.map((value, index) => {
                  return (
                    <div
                      key={index}
                      className="small-banner position-relative p-2"
                    >
                      <img
                        src={value.picture}
                        className="image-fluid rounded-4"
                        alt="main banner"
                      />

                      <div className="small-banner-content position-absolute">
                        <h5>{value.subHeading}</h5>
                        <h3>{value.mainHeading}</h3>
                        <p>{value.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Box sx={{ backgroundColor: "#f5f5f7" }}>
        <section className="home-wrapper-2" style={{ padding: "2rem " }}>
          <Box className="sevices d-flex align-items-center justify-content-between px-5">
            <div>
              <img src={sixth} alt="" />
              <div>
                <h6>Free Shipping</h6>
                <p>For all the orders above $100</p>
              </div>
            </div>
            <div>
              <img src={seventh} alt="" />
              <div>
                <h6>Daily Surprise offer</h6>
                <p>Save upto 25% off</p>
              </div>
            </div>
            <div>
              <img src={eighth} alt="" />
              <div>
                <h6>24/7 support</h6>
                <p>SHop with an expert</p>
              </div>
            </div>
            <div>
              <img src={ninth} alt="" />
              <div>
                <h6>Affordable Prices</h6>
                <p>get Factory Direct price</p>
              </div>
            </div>
            <div>
              <img src={tenth} alt="" />
              <div>
                <h6>Secure Payments</h6>
                <p>100% proteceted payment</p>
              </div>
            </div>
          </Box>
        </section>

        {/* Advantages */}
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
              {section2Pics.map((value) => {
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
                      }}
                    >
                      <Box>
                        <Typography>{value.Heading}</Typography>
                        <Typography>{value.items}</Typography>
                      </Box>
                      <img src={value.picture} alt="myPic" />
                    </Grid>
                  </>
                );
              })}
            </Grid>
            <Grid container spacing={2}>
              {section2Pics.map((value) => {
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
                      }}
                    >
                      <Box>
                        <Typography>{value.Heading}</Typography>
                        <Typography>{value.items}</Typography>
                      </Box>
                      <img src={value.picture} alt="myPic" />
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
        {/* Special Products Collection */}
        <section>
          <Box>
            <SpecialProduct />
          </Box>
        </section>
      </Box>
    </>
  );
}

export default Home;
