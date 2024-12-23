import first from "../../assets/images/main-banner-1.jpg";
import second from "../../assets/images/catbanner-01.jpg";
import third from "../../assets/images/catbanner-02.jpg";
import fourth from "../../assets/images/catbanner-03.jpg";
import fifth from "../../assets/images/catbanner-04.jpg";
import sixth from "../../assets/images/service.png";
import seventh from "../../assets/images/service-02.png";
import eighth from "../../assets/images/service-03.png";
import ninth from "../../assets/images/service-04.png";
import tenth from "../../assets/images/service-05.png";
import Camerapic from "../../assets/images/camera.jpg";
import { Link } from "react-router-dom";
import './home.css'

const pictures      = [
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
const pictures2     = [
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
const section2Pics  = [
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
                {pictures.map((value) => {
                  return (
                    <div className="small-banner position-relative p-2">
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
                {pictures2.map((value) => {
                  return (
                    <div className="small-banner position-relative p-2">
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
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5 px-0 overflow-hidden">
        <div className="contianer-xxl">
          <div className="row">
            <div className="col-12 px-0">
              <div className="sevices d-flex align-items-center justify-content-between px-5">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-block">
                <div className="d-flex align-items-center justify-content-between">
                  {section2Pics.map((value) => {
                    return (
                      <>
                        <div className="CategoriesItems d-flex align-items-center">
                          <div className="">
                            <h6>{value.Heading}</h6>
                            <p>{value.items}</p>
                          </div>
                          <img src={value.picture} alt="myPic" />
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="categoriesItem2 d-flex align-items-center">
                  {section2Pics2.map((value) => {
                    return (
                      <>
                        <div className="CategoriesItems d-flex align-items-center">
                          <div>
                            <h6>{value.Heading}</h6>
                            <p>{value.items}</p>
                          </div>
                          <img src={value.picture} alt="myPic" />
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
