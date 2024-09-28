import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const isFrench = location.pathname === '/fr';

    return (
        <div className="footer-2">
            <div className="container">
                <div className="footer__wrapper">
                    <h1 data-w-id="8d8766e3-2749-093c-6cdd-8c088828d5f8" style={{ opacity: 0 }} className="heading-5">
                        {isFrench ? "Nous croyons que DesignJoy.ch est le choix parfait pour vos besoins." : "We believe DesignJoy.ch is the perfect fit for your needs."}
                    </h1>
                    <p data-w-id="c50a6184-8e34-64d9-e902-7e44828e6215" style={{ opacity: 0 }} className="inline">
                        {isFrench ? "Nous servons des individus et des entreprises exigeants à travers la Suisse. Découvrez DesignJoy pour explorer comment vous pouvez révolutionner votre présence en ligne." : "We serve discerning individuals and businesses throughout Switzerland. Take a guided tour of DesignJoy to explore how you can revolutionize your online presence."}
                    </p>
                    <div className="button__wrapper">
                        <a href="#plans" data-w-id="c6288447-6c4a-d637-39e8-3980fec408ae" style={{ opacity: 0 }} className="button w-inline-block">
                            <div className="button-inner">{isFrench ? "Commencer" : "Get Started"}</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container-large-11">
                <div className="padding-vertical padding-xxlarge">
                    <div className="padding-bottom padding-large">
                        <div className="w-layout-grid footer_top-wrapper">
                            <div className="w-layout-grid footer_menu-wrapper">
                                <div className="footer_link-list">
                                    <div className="margin-bottom-2 margin-xsmall">
                                        <div className="footer_heading">{isFrench ? "Pages" : "Pages"}</div>
                                    </div>
                                    <a href="https://client-portal-ebon-iota.vercel.app" className="footer_link"> {isFrench ? 'Connexion' : 'Login'}  </a>
                                    <a href="/about" className="footer_link"><span>{isFrench ? "À propos" : "About"}</span></a>
                                    <a href="https://www.DesignJoy.ch" className="footer_link">{isFrench ? "Études de cas" : "Case Studies"}</a>
                                </div>
                                <div className="footer_link-list">
                                    <div className="margin-bottom-2 margin-xsmall">
                                        <div className="footer_heading">{isFrench ? "Réseaux sociaux" : "Socials"}</div>
                                    </div>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="footer_social-link w-inline-block">
                                        <div className="icon-embed-xsmall w-embed">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--iconoir" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></path>
                                                    <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"></path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m17.5 6.51l.01-.011"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div>{isFrench ? "Instagram" : "Instagram"}</div>
                                    </a>
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="footer_social-link w-inline-block">
                                        <div className="icon-embed-xsmall w-embed">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--iconoir" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                                                    <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5ZM7 17v-7"></path>
                                                    <path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div>{isFrench ? "LinkedIn" : "LinkedIn"}</div>
                                    </a>
                                </div>
                            </div>
                            <div className="footer_left-wrapper">
                                <div className="margin-bottom-2 margin-small">
                                    <div className="text-style-muted">
                                        {isFrench ? "Abonnez-vous à notre newsletter pour rester informé de toutes les nouvelles et opinions sur les médias payants" : "Join our newsletter to stay up to date on all paid media news and opinion"}
                                    </div>
                                </div>
                                <div className="footer_form-block w-form">
                                    <form
                                        id="wf-form-Email-Form"
                                        name="wf-form-Email-Form"
                                        data-name="Email Form"
                                        redirect="https://app.audienceful.com/api/emails/subscribe/PpKVnPtX47fp7pygMFDzis?t=147"
                                        data-redirect="https://app.audienceful.com/api/emails/subscribe/PpKVnPtX47fp7pygMFDzis?t=147"
                                        action="https://app.audienceful.com/api/emails/subscribe/PpKVnPtX47fp7pygMFDzis?t=147"
                                        method="post"
                                        className="footer_form"
                                        data-wf-page-id="63e2809554fcc4c7ad8b151a"
                                        data-wf-element-id="3501567f-c580-6f33-c414-88d03acaab59"
                                        aria-label="Email Form"
                                    >
                                        <input
                                            className="form-input is-footer w-input"
                                            maxLength="256"
                                            name="Email-Form-2"
                                            data-name="Email Form 2"
                                            placeholder={isFrench ? "Entrez votre email" : "Enter your email"}
                                            type="email"
                                            id="Email-Form-2"
                                            required=""
                                        />
                                        <button
                                            type="submit"
                                            className="button-5 is-small is-footer w-button"
                                        >
                                            <strong>{isFrench ? "S'abonner" : "Subscribe"}</strong>
                                        </button>
                                    </form>
                                    <div
                                        className="success-message-7 w-form-done"
                                        tabIndex="-1"
                                        role="region"
                                        aria-label="Email Form success"
                                    >
                                        <div>{isFrench ? "Merci !" : "Thank you!"}</div>
                                    </div>
                                    <div
                                        className="error-message-6 w-form-fail"
                                        tabIndex="-1"
                                        role="region"
                                        aria-label="Email Form failure"
                                    >
                                        <div>{isFrench ? "Oups ! Quelque chose s'est mal passé lors de l'envoi du formulaire." : "Oops! Something went wrong while submitting the form."}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        src="https://assets-global.website-files.com/63e2809554fcc4d1708b1517/63ea2a79859230fa0a952fb5_footer-line.svg"
                        loading="lazy"
                        alt=""
                        className="footer-line-divider"
                    />
                    <div className="padding-top padding-medium">
                        <div className="footer_bottom-wrapper">
                            <div className="footer_credit-text">
                                {isFrench ? "©️ 2024 Copyright Concorde SA Conseil en Entreprises t/a DesignJoy.ch" : "©️ 2024 Copyright Concorde SA Conseil en Entreprises t/a DesignJoy.ch"}
                            </div>
                            <div className="w-layout-grid footer_legal-list">
                               
                                <a href="/privacy-policy" className="footer_legal-link">{isFrench ? "Politique de confidentialité" : "Privacy Policy"}</a>
                                <a href="/terms-of-service" className="footer_legal-link">{isFrench ? "Conditions de service" : "Terms of Service"}</a>
                                <a href="/cookies" className="footer_legal-link">{isFrench ? "Paramètres des cookies" : "Cookies Settings"}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
