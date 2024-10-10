import "./hero.css";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Portfolio from "./Portfolio";
import Hiw from "./Hiw";
import Benefits from "./Benefits";
import Services from "./Services";
import Footer from "./Footer";
import ScopeMarquee from "./ScopeMarquee";
import FAQ from "./FAQs";
import Pricing from "./Pricing";
import lottie from "lottie-web";
import LanguageSwitcher from "./LanguageSwitchers";
import { API_URL } from "../utils/constants";
import InfiniteSlider from "./infinite-slider/infinite-slider";

const HeroFR = () => {
  const [header, setHeader] = useState({ title: "", secondary_title: "" });
  const animationContainer = useRef(null);

  const currentPath = window.location.pathname;
  const isFrench = currentPath.includes("/fr");

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "./assets/frontend/json/available_animation.json",
    });

    return () => {
      animation.destroy();
    };
  }, []);

  useEffect(() => {
    const fetchHeader = async () => {
      try {
        const currentPath = window.location.pathname;
        const language = currentPath.includes("/fr") ? "fr" : "en";
        const response = await axios.get(
          `${API_URL}/api/headers?lang=${language}`
        );
        const headers = response.data;

        // Filter headers to match the version of the selected language
        const filteredHeader = headers.find(
          (header) => header.version === language
        );

        if (filteredHeader) {
          setHeader({
            logo: filteredHeader.logo,
            title: filteredHeader.title.replace(/�/g, "é"),
            secondary_title: filteredHeader.secondary_title.replace(/�/g, "é"),
          });
        } else {
          console.error("No header found for the specified language.");
        }
      } catch (err) {
        console.error("Error fetching header:", err);
      }
    };

    fetchHeader();
  }, []);

  return (
    <>
      <LanguageSwitcher />
      <div className="top-nav">
        <a href="/" className="nav__logo-wrapper w-inline-block">
          <img src={header.logo} loading="lazy" alt="" className="image-84" />
        </a>
      </div>
      <div className="site-wrapper">
        <div className="inner-frame">
          <div id="hero" className="hero">
            <div className="container">
              <div className="hero__wrapper">
                <h1 className="heading-5 title">
                  {/* Replace with dynamic content if needed */}
                  {header.title}
                </h1>
                <p className="inline subtitle">
                  {/* Replace with dynamic content if needed */}
                  {header.secondary_title}
                </p>
                <div className="button__wrapper">
                  <a href="#plans" className="button w-inline-block btn-ani">
                    <div className="button-inner">
                      {" "}
                      {isFrench ? "Voir les plans" : "See plans"}
                    </div>
                  </a>
                </div>
                <div className="available-component avail-n">
                  <div
                    ref={animationContainer}
                    className="lottie-animation"
                    data-w-id="316837f8-528a-b56f-48e4-3137d46769ff"
                    data-animation-type="lottie"
                    data-loop="1"
                    data-direction="1"
                    data-autoplay="1"
                    data-is-ix2-target="0"
                    data-renderer="svg"
                    data-default-duration="1.8333333333333333"
                    data-duration="1.8333333333333333"
                  ></div>
                  <p className="small-print">Available now</p>
                </div>
              </div>
            </div>
            <img
              src="./assets/frontend/svg/svg_1.svg"
              loading="lazy"
              data-w-id="b6b533bd-6d39-1760-75b0-7dddde4807d0"
              alt=""
              className="hero__shape-1"
            />
            <img
              src="./assets/frontend/svg/Element 6.svg"
              loading="lazy"
              data-w-id="7cf09021-c425-283c-6217-b3640a03411f"
              alt=""
              className="hero__shape-2"
            />
          </div>

          <Portfolio />
          <InfiniteSlider />

          <Hiw />
          <Benefits />
          <Services />
          <Pricing />
          <FAQ />
          <ScopeMarquee />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HeroFR;
