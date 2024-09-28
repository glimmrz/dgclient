import React, { useEffect, useState } from "react";
import axios from "axios";
import PricingTabs from "./PricingTabs";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/constants";

const Pricing = () => {
  //   const [bookingLink, setBookingLink] = useState('');

  //   useEffect(() => {
  //     const fetchBookingLink = async () => {
  //       try {
  //         const response = await axios.get('API_ENDPOINT'); // Replace with your API endpoint
  //         setBookingLink(response.data.bookingLink); // Adjust based on your API response structure
  //       } catch (error) {
  //         console.error('Error fetching booking link:', error);
  //       }
  //     };

  //     fetchBookingLink();
  //   }, []);

  const navigate = useNavigate();

  const [stripeLink, setStripeLink] = useState({
    web_basic: null,
    web_standard: null,
    web_pro: null,
    logo_basic: null,
    logo_standard: null,
    logo_pro: null,
    marketing_basic: null,
    marketing_standard: null,
    marketing_pro: null,
    subscription_basic: null,
    subscription_standard: null,
    subscription_pro: null,
  });

  useEffect(() => {
    // Fetch the Stripe link from the API
    const fetchStripeLink = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/stripe-routes`); // Assuming ID 1 or change as needed
        const linkData = response.data[0]; // Or web_standard, web_pro, etc.
        setStripeLink({
          web_basic: linkData.web_basic,
          web_standard: linkData.web_standard,
          web_pro: linkData.web_pro,
          logo_basic: linkData.logo_basic,
          logo_standard: linkData.logo_standard,
          logo_pro: linkData.logo_pro,
          marketing_basic: linkData.marketing_basic,
          marketing_standard: linkData.marketing_standard,
          marketing_pro: linkData.marketing_pro,
          subscription_basic: linkData.subscription_basic,
          subscription_standard: linkData.subscription_standard,
          subscription_pro: linkData.subscription_pro,
        });
      } catch (error) {
        console.error("Error fetching the Stripe link:", error);
      }
    };

    fetchStripeLink();
  }, []);

  const [prices, setPrices] = useState({
    web_basic: null,
    web_standard: null,
    web_pro: null,
    logo_basic: null,
    logo_standard: null,
    logo_pro: null,
    marketing_basic: null,
    marketing_standard: null,
    marketing_pro: null,
    subscription_basic: null,
    subscription_standard: null,
    subscription_pro: null,
  });

  useEffect(() => {
    // Fetch prices from backend
    const fetchPrices = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/prices`);
        const priceData = response.data[0]; // Assuming you want the first object from the array
        setPrices({
          web_basic: priceData.web_basic,
          web_standard: priceData.web_standard,
          web_pro: priceData.web_pro,
          logo_basic: priceData.logo_basic,
          logo_standard: priceData.logo_standard,
          logo_pro: priceData.logo_pro,
          marketing_basic: priceData.marketing_basic,
          marketing_standard: priceData.marketing_standard,
          marketing_pro: priceData.marketing_pro,
          subscription_basic: priceData.subscription_basic,
          subscription_standard: priceData.subscription_standard,
          subscription_pro: priceData.subscription_pro,
        });
      } catch (err) {
        console.error("Error fetching the Prices:", err);
      }
    };

    fetchPrices();
  }, []);

  const [bookingLink, setBookingLink] = useState("");

  useEffect(() => {
    const fetchBookingLink = async () => {
      try {
        const response = await fetch(`${API_URL}/api/booking-link`);
        const data = await response.json();
        setBookingLink(data.bookingLink);
      } catch (error) {
        console.error("Error fetching booking link:", error);
      }
    };

    fetchBookingLink();
  }, []);

  const handleButtonClick = (packageType) => {
    let price, product, path;

    switch (packageType) {
      case "standard":
        price = 999;
        product = "Web Standard Design";
        break;
      case "pro":
        price = 1299;
        product = "Web Pro Design";
        break;
      default:
        price = 799;
        product = "Web Basic Design";
    }

    path = "/form/web";

    navigate(`${path}?price=${price}&product=${encodeURIComponent(product)}`);
  };
  const currentPath = window.location.pathname;
  const isFrench = currentPath.includes("/fr");

  return (
    <div id="plans" className="pricing">
      <div className="container">
        <div
          data-w-id="1973bfe6-8075-674b-57c6-174cce2c7940"
          style={{ opacity: 0 }}
          className="divider__wrapper"
        >
          <div className="pricing_head">
            <h2 className="hiw-heading">
              {isFrench ? "Nos prestations" : "Our services"}
            </h2>
            <p className="hiw__sub">
              {isFrench
                ? "Des designs primés, et rien de moins."
                : "Award winning designs, and nothing less."}
            </p>
          </div>
          <img
            src="./assets/frontend/svg/pricing.svg"
            loading="lazy"
            style={{ opacity: 0 }}
            data-w-id="1973bfe6-8075-674b-57c6-174cce2c7941"
            alt=""
            className="divider m-t-20 m-2-30"
          />
        </div>
        <div className="w-layout-grid benefits__grid_custom">
          <div
            data-w-id="895bc74e-6c1c-7c4e-3c2e-57a1a886b0ee"
            style={{ opacity: 0 }}
            className="pricing__left"
          >
            <div className="pricing__left-top">
              <div className="available__pill">
                <div className="slots-available">
                  <div
                    className="lottie-animation"
                    data-w-id="d3880d67-09ed-8f12-9f44-d6b801514986"
                    data-animation-type="lottie"
                    data-src="./assets/frontend/Member_ship_animation_7.json"
                    data-loop="1"
                    data-direction="1"
                    data-autoplay="1"
                    data-is-ix2-target="0"
                    data-renderer="svg"
                    data-default-duration="1.8333333333333333"
                    data-duration="0"
                  ></div>
                  <p className="small-print">
                    {isFrench ? "Places disponibles" : "Slots available"}
                  </p>
                </div>
              </div>
              <h1
                className="pricing__left-heading"
                style={{ fontSize: "3rem" }}
              >
                {isFrench ? "Rejoignez\nDesignJoy" : "Join\nDesignJoy"}
              </h1>
            </div>
            <div className="pricing__left-bottom">
              <a
                href={bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="pricing__left-inside-card top w-inline-block"
              >
                <div className="pricing__left-inside-card-left">
                  <h5 className="pricing__left-card-small-heading">
                    {isFrench
                      ? "Réservez un appel d'intro de 30 minutes"
                      : "Book a 30-min intro call"}
                  </h5>
                  <p className="p-small smaller smallest m-b-0">
                    {isFrench
                      ? "En savoir plus sur le fonctionnement de DesignJoy et comment il peut vous aider."
                      : "Learn more about how DesignJoy works and how it can help you."}
                  </p>
                </div>
                <img
                  src="./assets/frontend/svg/svg_12_arow.svg"
                  loading="lazy"
                  alt=""
                />
              </a>
              <a
                href="https://DesignJoy.ch"
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
                className="pricing__left-inside-card w-inline-block"
              >
                <div className="pricing__left-inside-card-left">
                  <h5 className="pricing__left-card-small-heading _4">
                    {isFrench
                      ? "Référez un ami & gagnez"
                      : "Refer a friend & earn"}
                  </h5>
                  <p className="p-small smaller smallest m-b-0">
                    {isFrench
                      ? "Gagnez 5 % de commissions récurrentes pour chaque recommandation."
                      : "Earn 5% recurring commissions for each referral."}
                  </p>
                </div>
                <img
                  src="./assets/frontend/svg/svg_12_arow.svg"
                  loading="lazy"
                  alt=""
                />
              </a>
            </div>
            <img
              src="./assets/frontend/svg/svg_13.svg"
              loading="lazy"
              alt=""
              className="image-79"
            />
          </div>

          <div
            className="pricing__right-card"
            data-w-id="215f8bbc-1d94-22cb-c472-3975de472baf"
            style={{ opacity: 0 }}
          >
            <h4 className="heading-8">
              {" "}
              {isFrench ? "Conception Web" : "Web Design"}
            </h4>
            <div
              className="tabs w-tabs"
              data-current="Tab 1"
              data-easing="ease"
              data-duration-in="300"
              data-duration-out="100"
            >
              <div className="tabs-menu w-tab-menu">
                <a
                  data-w-tab="Tab 3"
                  className="tab_custom w-tab-link_custom w-tab-link w--current"
                >
                  <div> {isFrench ? "De base" : "Basic"}</div>
                </a>
                <a
                  data-w-tab="Tab 1"
                  className="tab_custom w-tab-link_custom w-tab-link "
                >
                  <div>{isFrench ? "Standard" : "Standard"}</div>
                </a>
                <a
                  data-w-tab="Tab 2"
                  className="tab_custom w-tab-link_custom w-tab-link"
                >
                  <img
                    loading="lazy"
                    src="./assets/frontend/svg/svg_14.svg"
                    alt=""
                    className="tab__bolt"
                  />
                  <div className="text-block">{isFrench ? "Pro" : "Pro"}</div>
                </a>
              </div>
              <div className="w-tab-content">
                <div data-w-tab="Tab 3" className="w-tab-pane w--tab-active">
                  <div className="pricing__right-top">
                    <h4 className="m-b-0">CHF {prices.web_basic}</h4>
                  </div>
                  <div className="pricing__right-bottom">
                    <p className="p-small smaller smallest">
                      {isFrench ? "Ce qui est inclus" : "What's included"}
                    </p>
                    <div className="w-layout-grid pricing__right-grid">
                      <ul
                        id="w-node-e550c3c3-661b-05d2-81c4-a474c1e7c807-25345308"
                        role="list"
                      >
                        <li>
                          <p className="p-small smaller smallest">
                            {isFrench
                              ? "Intégration de contenu : 3-5 pages"
                              : "Content integration : 3-5 pages"}
                          </p>
                        </li>
                        <li>
                          <p className="p-small smaller smallest">
                            {isFrench
                              ? "Langue : 1 langue"
                              : "Language : 1 language"}
                          </p>
                        </li>
                        <li>
                          <p className="p-small smaller smallest">
                            {isFrench
                              ? "Plan d'hébergement web 1 an gratuit"
                              : "Web hosting plan 1 free year"}
                          </p>
                        </li>
                        <li>
                          <div className="div-block-24">
                            <p className="p-small smaller smallest web">
                              {isFrench
                                ? "Nom de domaine non inclus"
                                : "Domain name not included"}
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="div-block-24">
                            <p className="p-small smaller smallest web">
                              {isFrench
                                ? "Maintenance non incluse"
                                : "Maintenance not included"}
                            </p>
                          </div>
                        </li>
                      </ul>
                      <ul
                        id="w-node-d77ee87c-05fc-f6a1-0852-343d9ba27069-25345308"
                        role="list"
                      >
                        <li>
                          <p className="p-small smaller smallest">
                            {isFrench
                              ? "Statistiques du site Web (Google Search Console)"
                              : "Website statistics (Google Search Console)"}
                          </p>
                        </li>
                        <li>
                          <p className="p-small smaller smallest">
                            {isFrench
                              ? "Certification SSL 1 an gratuit"
                              : "SSL certification 1 free year"}
                          </p>
                        </li>
                        <li>
                          <p className="p-small smaller smallest web">
                            {isFrench
                              ? "MAINTENANCE non incluse"
                              : "MAINTENANCE not included"}
                          </p>
                        </li>
                        <li>
                          <p className="p-small smaller smallest web">
                            {isFrench
                              ? "Mise en ligne – 20 jours ouvrables"
                              : "Go live – 20 working days"}
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="pricing__right-cta-wrapper">
                      <div className="button__wrapper m-t-0">
                        <a
                          href={stripeLink.web_basic}
                          className="button w-inline-block"
                        >
                          <div className="button-inner">
                            {isFrench ? "Commencer" : "Get started"}
                          </div>
                        </a>
                      </div>
                      <div
                        data-w-id="3de1f8c9-ebe1-2a4d-4279-3259e26ea939"
                        style={{ opacity: 0 }}
                        className="text-block-4"
                      >
                        {isFrench ? "ou" : "or"}
                        <a
                          href="#"
                          onClick={() => handleButtonClick("basic", "web")}
                          target="_blank"
                          className="link-2"
                        >
                          {isFrench ? "Obtenez un devis" : "Get a Quote"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                  <div className="pricing__right-top">
                    <h4 className="m-b-0">
                      CHF {prices.web_standard}
                      <span className="per-month"></span>
                    </h4>
                  </div>
                  <div className="pricing__right-bottom">
                    <p className="p-small smaller smallest">
                      {isFrench ? "Ce qui est inclus" : "What's included"}
                    </p>
                    <div className="w-layout-grid pricing__right-grid">
                      <ul
                        id="w-node-e550c3c3-661b-05d2-81c4-a474c1e7c807-25345308"
                        role="list"
                      >
                        <li>
                          <p className="p-small smaller smallest">
                            {isFrench
                              ? "Étude préliminaire"
                              : "Preliminary study"}
                          </p>
                        </li>
                        <li>
                          <p className="p-small smaller smallest">
                            {isFrench
                              ? "Intégration de contenu : 6-9 pages"
                              : "Content integration : 6-9 pages"}
                          </p>
                        </li>
                        <li>
                          <p className="p-small smaller smallest">
                            {isFrench
                              ? "Langue : 1 langue"
                              : "Language : 1 language"}
                          </p>
                        </li>
                        <li>
                          <div className="div-block-24">
                            <p className="p-small smaller smallest web">
                              {isFrench
                                ? "Plan d'hébergement web 1 an gratuit"
                                : "Web hosting plan 1 free year"}
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="div-block-24">
                            <p className="p-small smaller smallest web">
                              {isFrench
                                ? "SEO inclus (de base – seulement 2 mots-clés)"
                                : "SEO included (basic – only 2 keywords)"}
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="div-block-24">
                            <p className="p-small smaller smallest web">
                              {isFrench
                                ? "Certification SSL pour un an"
                                : "SSL certification for a year"}
                            </p>
                          </div>
                        </li>
                      </ul>
                      <ul
                        id="w-node-d77ee87c-05fc-f6a1-0852-343d9ba27069-25345308"
                        role="list"
                      >
                        <li>
                          <p className="p-small smaller smallest">
                            {isFrench
                              ? "Nom de domaine inclus"
                              : "Domain name included"}
                          </p>
                        </li>
                        <li>
                          <p className="p-small smaller smallest">
                            {isFrench
                              ? "Compte e-mail professionnel pour un an"
                              : "Business email account for a year"}
                          </p>
                        </li>
                        <li>
                          <p className="p-small smaller smallest web">
                            {isFrench
                              ? "Statistiques du site Web (Google Search Console)"
                              : "Website statistics (Google Search Console)"}
                          </p>
                        </li>
                        <li>
                          <p className="p-small smaller smallest web">
                            {isFrench
                              ? "Maintenance mise à jour régulière (6 mois)"
                              : "Maintenance regular update (6 months)"}
                          </p>
                        </li>
                        <li>
                          <p className="p-small smaller smallest web">
                            {isFrench
                              ? "Mise en ligne – 35 jours ouvrables"
                              : "Go live – 35 working days"}
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="pricing__right-cta-wrapper">
                      <div className="button__wrapper m-t-0">
                        <a
                          href={stripeLink.web_standard}
                          className="button w-inline-block"
                        >
                          <div className="button-inner">
                            {isFrench ? "Commencer" : "Get started"}
                          </div>
                        </a>
                      </div>
                      <div
                        data-w-id="3de1f8c9-ebe1-2a4d-4279-3259e26ea939"
                        style={{ opacity: 0 }}
                        className="text-block-4"
                      >
                        {isFrench ? "ou" : "or"}
                        <a
                          href="#"
                          onClick={() => handleButtonClick("standard", "web")}
                          className="link-2"
                        >
                          {isFrench ? "Obtenez un devis" : "Get a Quote"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 2" className="w-tab-pane">
                  <div className="pricing__right-top">
                    <h4 className="m-b-0">CHF {prices.web_pro}</h4>
                  </div>
                  <div className="pricing__right-bottom">
                    <p className="p-small smaller smallest">
                      {isFrench ? "Ce qui est inclus" : "What's included"}
                    </p>
                    <div className="w-layout-grid pricing__right-grid">
                      <ul
                        id="w-node-_4d1ba718-62d7-e091-d8fb-0c60a3c1cabe-25345308"
                        role="list"
                      >
                        <li>
                          <p className="p-small smaller smallest">
                            <span className="highlight">
                              {isFrench
                                ? "Étude préliminaire"
                                : "Preliminary study"}
                            </span>
                          </p>
                        </li>
                        <li>
                          <p className="p-small smaller smallest">
                            {isFrench ? "Conception web" : "Web design"}
                          </p>
                        </li>
                        <li>
                          <p className="p-small smaller smallest">
                            {isFrench
                              ? "Conception graphique (4 ensembles)"
                              : "Graphic design (4 sets)"}
                          </p>
                        </li>
                      </ul>
                      <ul
                        id="w-node-_4d1ba718-62d7-e091-d8fb-0c60a3c1cacd-25345308"
                        role="list"
                      >
                        <li>
                          <div className="div-block-24">
                            <p className="p-small smaller smallest web">
                              {isFrench
                                ? "Intégration de contenu : ~ 12 pages"
                                : "Content integration : ~ 12 pages"}
                            </p>
                          </div>
                        </li>
                        <li>
                          <p className="p-small smaller smallest">
                            {isFrench
                              ? "Langue : 1 langue"
                              : "Language : 1 language"}
                          </p>
                        </li>
                        <li>
                          <p className="p-small smaller smallest web">
                            {isFrench ? "E-catalogue" : "E-catalogue"}
                          </p>
                        </li>
                        <li>
                          <p className="p-small smaller smallest web">
                            {isFrench
                              ? "Plan d'hébergement web 1 an gratuit"
                              : "Web hosting plan 1 free year"}
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="pricing__right-cta-wrapper">
                      <div className="button__wrapper m-t-0">
                        <a
                          href={stripeLink.web_pro}
                          className="button w-inline-block"
                        >
                          <div className="button-inner">
                            {isFrench ? "Commencer" : "Get started"}
                          </div>
                        </a>
                      </div>
                      <div className="text-block-5">
                        {isFrench ? "ou" : "or"}
                        <a
                          href="#"
                          onClick={() => handleButtonClick("pro", "web")}
                          className="link-2"
                        >
                          {isFrench ? "Obtenez un devis" : "Get a Quote"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PricingTabs
          prices={prices}
          bookingLink={bookingLink}
          stripeLink={stripeLink}
        />
      </div>
    </div>
  );
};

export default Pricing;
