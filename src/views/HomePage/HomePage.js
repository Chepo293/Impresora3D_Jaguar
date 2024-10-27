import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

import styles from "assets/jss/material-kit-react/views/homePage.js";

// Sections for this page
import ParallaxSection from "./Sections/ParallaxSection.js";
import ProductSection from "./Sections/ProductSection.js";
import PartsSection from "./Sections/PartsSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Carousel {...settings}>
        <div>
          <img src={image1} alt="First slide" className="slick-image" />
          <div className="slick-caption">
            <h4>
              <LocationOn className="slick-icons" />
              Yellowstone National Park, United States
            </h4>
          </div>
        </div>
        <div>
          <img src={image2} alt="Second slide" className="slick-image" />
          <div className="slick-caption">
            <h4>
              <LocationOn className="slick-icons" />
              Somewhere Beyond, United States
            </h4>
          </div>
        </div>
        <div>
          <img src={image3} alt="Third slide" className="slick-image" />
          <div className="slick-caption">
            <h4>
              <LocationOn className="slick-icons" />
              Yellowstone National Park, United States
            </h4>
          </div>
        </div>
      </Carousel>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <ParallaxSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
