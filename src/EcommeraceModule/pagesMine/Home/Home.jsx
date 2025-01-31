import "./home.css";
import React, { useState } from "react";
import {
  first,
  sixth,
  seventh,
  ninth,
  tenth,
  Link,
  Box,
  Grid,
  Typography,
  FeaturedCollectionComponent,
  MainProductsComponent,
  SpecialProduct,
  RecomendedProduct,
  LogoSliderComponent,
  C,
  pictures,
  sectionPics1,
  useMediaQuery,
} from "./ImportsHome/ImportHome.js";

function Home() {
  const at936 = useMediaQuery("(min-width:936px)");
  const at600 = useMediaQuery("(min-width:600px)");
  const [value, setValue] = useState(-1);
  return (
    <>
      {/* Main Pictures Section */}
      <section>
        <Box
          display={{ xs: "block", md: "flex" }}
          sx={{ margin: "2rem 2rem 0", gap: 2 }}
        >
          <Box
            sx={{
              position: "relative",
              flexBasis: "50%",
              marginBottom: "1rem",
            }}
          >
            <img
              src={first}
              className="image-fluid rounded-3"
              alt="main banner"
              style={{ height: "100%", width: "100%" }}
            />
            <Box position={"absolute"} sx={{ top: "15%", left: "10%" }}>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "#bf4800", // Using CSS variable syntax
                  margin: "0 0 0.3rem",
                  letterSpacing: "0.3px",
                }}
              >
                SUPERCHARGED FOR PROS.
              </Typography>

              <Typography
                sx={{
                  fontSize: "42px",
                  lineHeight: "64px",
                  letterSpacing: "-2px",
                  fontWeight: 500,
                  textTransform: "none",
                }}
              >
                IPAD S13+ Pro.
              </Typography>

              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "28px",
                  letterSpacing: "0.4px",
                  margin: "0 0 36px",
                  color: "#131921", // Using CSS variable syntax
                }}
              >
                From $999.00 or $41.62/mo. <br /> for 24 mo. Footnote*
              </Typography>

              <Link className="button a">BUY NOW</Link>
            </Box>
          </Box>
          <Grid
            container
            spacing={2}
            sx={{ margin: "0 0 1rem", flexBasis: "50%", display: {} }}
          >
            {pictures.map((value, index) => {
              return (
                <Grid key={index} item sx={{ position: "relative" }} size={6}>
                  <img
                    src={value.picture}
                    alt="main banner "
                    className="rounded-3"
                    style={{ height: "100%", width: "100%" }}
                  />

                  <Box
                    className="small-banner-content "
                    sx={{ position: "absolute", top: "15%", left: "10%" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px",
                        lineHeight: "16px",
                        margin: "0 0 12px",
                        letterSpacing: "0.3px",
                        color: "#bf4800",
                      }}
                    >
                      {value.subHeading}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "19px",
                        margin: "5px 0 7px",
                        letterSpacing: "0px",
                        lineHeight: "32px",
                        fontWeight: 500,
                        textTransform: "none",
                      }}
                    >
                      {value.mainHeading}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "12px",
                        lineHeight: "18px",
                        width: "64%",
                        letterSpacing: "0.2px",
                        margin: "0 0 36px",
                        color: "#131921",
                      }}
                    >
                      {value.desc}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
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
                sx={{
                  display: { xs: "block", md: "flex" },
                  gap: 2,
                  alignItems: "center",
                  textAlign: { xs: "center", md: "left" },
                }}
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
                sx={{
                  display: { xs: "block", md: "flex" },
                  gap: 2,
                  alignItems: "center",
                  textAlign: { xs: "center", md: "left" },
                }}
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
                sx={{
                  display: { xs: "block", md: "flex" },
                  gap: 2,
                  alignItems: "center",
                  textAlign: { xs: "center", md: "left" },
                }}
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
                sx={{
                  display: { xs: "block", md: "flex" },
                  gap: 2,
                  alignItems: "center",
                  textAlign: { xs: "center", md: "left" },
                }}
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
            // className="categories"
            sx={{
              borderRadius: "8px",
              margin: "0 1rem",
              p: "1.5rem",
              backgroundColor: "white",
            }}
          >
            <Grid container>
              {sectionPics1.map((value, index) => (
                <Grid
                  item
                  size={at600 ? 4 : 6}
                  sx={{
                    p: "1rem 1rem",
                    alignItems: "center",
                    display: at936 ? "flex" : "block",
                    borderRight:
                      index !== sectionPics1.length - 1 &&
                      index !== sectionPics1.length - 4
                        ? "1px solid #ededed"
                        : "none",
                    justifyItems: at936 ? "space-between" : "center",
                    justifyContent: at936 ? "space-between" : "center",
                    borderBottom: value.border,
                  }}
                >
                  {!at936 && (
                    <img
                      src={value.picture}
                      alt="myPic"
                      style={{ width: "100px", height: "100px" }}
                    />
                  )}
                  <Box textAlign={at936 ? "left" : "center"}>
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
                  {at936 && (
                    <img
                      src={value.picture}
                      alt="myPic"
                      style={{ width: "100px", height: "100px" }}
                    />
                  )}
                </Grid>
              ))}
            </Grid>
            {/* <Grid container spacing={2}>
              {sectionPics2.map((value, index) => (
                <Grid
                  key={index}
                  item
                  size={at600 ? 4 : 6}
                  sx={{
                    borderRight:
                      index !== sectionPics1.length - 1
                        ? "1px solid #ededed"
                        : "none",
                    display: at936 ? "flex" : "block",
                    justifyItems: at936 ? "space-between" : "center",
                    justifyContent: at936 ? "space-between" : "center",
                    alignItems: "center",
                    p: "1rem 1rem",
                  }}
                >
                  {!at936 && (
                    <img
                      src={value.picture}
                      alt="myPic"
                      style={{ width: "100px", height: "100px" }}
                    />
                  )}
                  <Box textAlign={at936 ? "left" : "center"}>
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
                  {at936 && (
                    <img
                      src={value.picture}
                      alt="myPic"
                      style={{ width: "100px", height: "100px" }}
                    />
                  )}
                </Grid>
              ))}
            </Grid> */}
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
