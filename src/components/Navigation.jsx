import React from 'react';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const isFrench = location.pathname === '/fr';

  return (
    <>
      <div className="floating-nav">
        <div className="div-block-17">
          <div
            data-animation="default"
            className="navbar-2 w-nav"
            data-easing2="ease"
            data-easing="ease"
            data-collapse="medium"
            style={{ opacity: 0 }}
            data-w-id="0666e8b8-d79e-edc1-51e9-c5e487526a92"
            role="banner"
            data-duration="400"
          >
            <nav role="navigation" className="nav-menu-2 w-nav-menu">
              <a href="#hero" className="floating-nav__link arrow w-nav-link"></a>
              <a href="#hiw" className="floating-nav__link w-nav-link">
                {isFrench ? 'Comment ça marche' : 'How it works'}
              </a>
              <a href="#benefits" className="floating-nav__link w-nav-link">
                {isFrench ? 'Avantages' : 'Benefits'}
              </a>
              <a href="#services" className="floating-nav__link w-nav-link">
                {isFrench ? 'Services' : 'Services'}
              </a>
              <a href="#plans" className="floating-nav__link w-nav-link">
                {isFrench ? 'Tarification' : 'Pricing'}
              </a>
              <a href="#faq" className="floating-nav__link w-nav-link">
                {isFrench ? 'FAQ' : 'FAQs'}
              </a>
              <a
                href="https://client-portal-ebon-iota.vercel.app"
                ms-hide-element="true"
                className="floating-nav__link login w-nav-link"
              >
                {isFrench ? 'Connexion' : 'Login'}
              </a>
            </nav>
            <div className="w-nav-button">
              <div className="w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
