import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import NotFound from "./components/NotFound";
import Custom from "./components/custom";
import LogoForm from "./components/LogoForm"; // Assuming your form component is in LogoForm.jsx
import MarketingForm from "./components/MarketingForm";
import WebForm from "./components/WebForm";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import HeroFR from "./components/HeroFR";
import ThankYouPage from "./pages/ThankYouPage";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const App = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration
      once: true, // Animation happens only once - while scrolling down
    });
    AOS.refresh(); // Refresh AOS for lazy-loaded content or dynamic pages
  }, []);

  AOS.init({
    duration: 1000,
    once: true,
    disable: "mobile", // Disable animations on mobile
  });

  useEffect(() => {
    // Load the Google Analytics script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-QF0DMQNTRE";
    document.head.appendChild(script);

    // Initialize the gtag function
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-QF0DMQNTRE");
    };
  }, []);

  React.useEffect(() => {
    const scripts = [
      "https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js",
      "https://cdn.jsdelivr.net/npm/@popperjs/core@2.x.x/dist/umd/popper.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js",
      "https://cdn.jsdelivr.net/npm/bootstrap@5.x.x/dist/js/bootstrap.bundle.min.js",
      "/assets/frontend/js/swiper.min.js",
      "https://www.googletagmanager.com/gtag/js?id=UA-74383838-1",
      "/assets/frontend/js/fs-cc.js",
      "/assets/frontend/js/calendly_widget.js",
      "/assets/frontend/js/main.js",
    ];

    // Clear existing scripts to avoid duplicates
    document
      .querySelectorAll("script[data-route]")
      .forEach((script) => script.remove());

    // Add new scripts based on the route
    scripts.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.defer = true;
      script.setAttribute("data-route", location.pathname);
      document.body.appendChild(script);
    });

    return () => {
      document
        .querySelectorAll("script[data-route]")
        .forEach((script) => script.remove());
    };
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        {location.pathname !== "/logo" && (
          <>
            <link rel="preconnect" href="https://fonts.bunny.net" />
            <link
              href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap"
              rel="stylesheet"
            />
            <link
              href="/assets/frontend/css/main_custom.min.css"
              rel="stylesheet"
            />
            <link
              href="/assets/frontend/css/footer_style.css"
              rel="stylesheet"
            />
            <link href="/assets/frontend/css/style.css" rel="stylesheet" />
            <link
              href="/assets/frontend/css/calendly_widget.css"
              rel="stylesheet"
            />
          </>
        )}
        <script
          src="https://api.memberstack.io/static/memberstack.js?custom"
          data-memberstack-id="3975ff834033ff0cc12c91f6a288ec41"
          defer
        ></script>
      </Helmet>

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/fr" element={<HeroFR />} />
        <Route path="/form/logo" element={<LogoForm />} />
        <Route path="/form/web" element={<WebForm />} />
        <Route path="/form/marketing" element={<MarketingForm />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} /> {/* Handle 404 */}
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
      <Custom />
    </>
  );
};

const AppWrapper = () => (
  <HelmetProvider>
    <Router>
      <App />
      {!window.location.pathname.startsWith("/form") && <Navigation />}
    </Router>
  </HelmetProvider>
);

export default AppWrapper;
