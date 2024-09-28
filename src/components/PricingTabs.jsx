import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const PricingTabs = ({ prices, bookingLink, stripeLink }) => {

    const navigate = useNavigate();
    const handleButtonClick = (packageType, category) => {
        let price, product, path;
    
        switch (packageType) {
            case 'standard':
                if (category === 'marketing') {
                    price = 799;
                    product = 'Marketing Standard Package';
                } else if (category === 'logo') {
                    price = 499;
                    product = 'Logo Standard Design';
                }
                break;
            case 'pro':
                if (category === 'marketing') {
                    price = 999;
                    product = 'Marketing Pro Package';
                } else if (category === 'logo') {
                    price = 599;
                    product = 'Logo Pro Design';
                }
                break;
            default:
                if (category === 'marketing') {
                    price = 599;
                    product = 'Marketing Basic Package';
                } else if (category === 'logo') {
                    price = 399;
                    product = 'Logo Basic Design';
                }
        }
    
        if (category === 'marketing') {
            path = '/form/marketing';
        } else if (category === 'logo') {
            path = '/form/logo';
        }
    
        navigate(`${path}?price=${price}&product=${encodeURIComponent(product)}`);
    };
    
    const currentPath = window.location.pathname;
    const isFrench = currentPath.includes('/fr');
    
  return (
    <div className="w-layout-grid benefits__grid_custom">
   <div data-w-id="215f8bbc-1d94-22cb-c472-3975de472baf" className="pricing__right-card_custom">
    <h4 className="heading-9">Logo Design</h4>
    <div className="tabs w-tabs" data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100">
        <div className="tabs-menu w-tab-menu">
            <a data-w-tab="Tab 3" className="tab_custom w-tab-link_custom w-tab-link w--current">
                <div>{isFrench ? "De base" : "Basic"}</div>
            </a>
            <a data-w-tab="Tab 1" className="tab_custom w-tab-link_custom w-tab-link ">
                <div>Standard</div>
            </a>
            <a data-w-tab="Tab 2" className="tab_custom w-tab-link_custom w-tab-link">
                <img loading="lazy" src="/assets/frontend/svg/svg_14.svg" alt="" className="tab__bolt" />
                <div className="text-block">Pro</div>
            </a>
        </div>
        <div className="w-tab-content">
            <div data-w-tab="Tab 3" className="w-tab-pane w--tab-active">
                <div className="pricing__right-top">
                    <h4 className="m-b-0">
                        CHF {prices.logo_basic}
                    </h4>
                </div>
                <div className="pricing__right-bottom">
            <p className="p-small smaller smallest">
                {isFrench ? "Ce qui est inclus" : "What's included"}
            </p>
            <div className="w-layout-grid pricing__right-grid">
                <ul id="w-node-e550c3c3-661b-05d2-81c4-a474c1e7c807-25345308" role="list">
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "5 propositions de design" : "5 design suggestions"}
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "2 tours de feedback" : "2 feedback rounds"}
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Logo dans divers formats de fichier" : "Logo in various file formats"}
                        </p>
                    </li>
                </ul>
                <ul id="w-node-d77ee87c-05fc-f6a1-0852-343d9ba27069-25345308" role="list">
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Photos de stock illimitées" : "Unlimited stock photos"}
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest web">
                            {isFrench ? "Pause ou annulation à tout moment" : "Pause or cancel anytime"}
                        </p>
                    </li>
                </ul>
            </div>
            <div className="pricing__right-cta-wrapper">
                <div className="button__wrapper m-t-0">
                    <a href={stripeLink.logo_basic} className="button w-inline-block">
                        <div className="button-inner">
                            {isFrench ? "Commencer" : "Get started"}
                        </div>
                    </a>
                </div>
                <div className="text-block-4">
                    {isFrench ? "ou" : "or"}
                    <a href="#" onClick={() => handleButtonClick('basic', 'logo')} className="link-2">
                        {isFrench ? "Obtenez un devis" : "Get a Quote"}
                    </a>
                </div>
            </div>
        </div>
            </div>
            <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                <div className="pricing__right-top">
                    <h4 className="m-b-0">
                        CHF {prices.logo_standard}
                    </h4>
                </div>
                <div className="pricing__right-bottom">
            <p className="p-small smaller smallest">
                {isFrench ? "Ce qui est inclus" : "What's included"}
            </p>
            <div className="w-layout-grid pricing__right-grid">
                <ul id="w-node-e550c3c3-661b-05d2-81c4-a474c1e7c807-25345308" role="list">
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "10 propositions de design" : "10 design suggestions"}
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "3 tours de feedback" : "3 feedback rounds"}
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Logo dans divers formats de fichier" : "Logo in various file formats"}
                        </p>
                    </li>
                    <li>
                        <div className="div-block-24">
                            <p className="p-small smaller smallest web">
                                {isFrench ? "Cartes de visite (impression incluse)" : "Business cards (including printing)"}
                            </p>
                        </div>
                    </li>
                </ul>
                <ul id="w-node-d77ee87c-05fc-f6a1-0852-343d9ba27069-25345308" role="list">
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Photos de stock illimitées" : "Unlimited stock photos"}
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Utilisateurs illimités" : "Unlimited users"}
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest web">
                            {isFrench ? "Pause ou annulation à tout moment" : "Pause or cancel anytime"}
                        </p>
                    </li>
                </ul>
            </div>
            <div className="pricing__right-cta-wrapper">
                <div className="button__wrapper m-t-0">
                    <a href={stripeLink.logo_standard} className="button w-inline-block">
                        <div className="button-inner">
                            {isFrench ? "Commencer" : "Get started"}
                        </div>
                    </a>
                </div>
                <div className="text-block-4">
                    {isFrench ? "ou" : "or"}
                    <a href="#" onClick={() => handleButtonClick('standard', 'logo')} className="link-2">
                        {isFrench ? "Obtenez un devis" : "Get a Quote"}
                    </a>
                </div>
            </div>
        </div>
            </div>
            <div data-w-tab="Tab 2" className="w-tab-pane">
                <div className="pricing__right-top">
                    <h4 className="m-b-0">
                        CHF {prices.logo_pro}
                    </h4>
                </div>
                <div className="pricing__right-bottom">
            <p className="p-small smaller smallest">
                {isFrench ? "Ce qui est inclus" : "What's included"}
            </p>
            <div className="w-layout-grid pricing__right-grid">
                <ul id="w-node-_4d1ba718-62d7-e091-d8fb-0c60a3c1cabe-25345308" role="list">
                    <li>
                        <p className="p-small smaller smallest">
                            <span className="highlight">
                                {isFrench ? "15 propositions de design" : "15 design suggestions"}
                            </span>
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "4 tours de retours" : "4 feedback rounds"}
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Logo dans divers formats de fichiers" : "Logo in various file formats"}
                        </p>
                    </li>
                </ul>
                <ul id="w-node-_4d1ba718-62d7-e091-d8fb-0c60a3c1cacd-25345308" role="list">
                    <li>
                        <div className="div-block-24">
                            <p className="p-small smaller smallest web">
                                {isFrench ? "Vectorisation du logo" : "Vectorize logo"}
                            </p>
                        </div>
                    </li>
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Utilisateurs illimités" : "Unlimited users"}
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest web">
                            {isFrench ? "Pause ou annulation à tout moment" : "Pause or cancel anytime"}
                        </p>
                    </li>
                    <li>
                        <div className="div-block-24">
                            <p className="p-small smaller smallest web">
                                {isFrench ? "Cartes de visite (y compris impression)" : "Business cards (including printing)"}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="pricing__right-cta-wrapper">
                <div className="button__wrapper m-t-0">
                    <a href={stripeLink.logo_pro} className="button w-inline-block">
                        <div className="button-inner">{isFrench ? "Commencer" : "Get started"}</div>
                    </a>
                </div>
                <div className="text-block-5">
                    {isFrench ? "ou" : "or"}
                    <a href="#" onClick={() => handleButtonClick('pro', 'logo')} target="_blank" className="link-2">
                        {isFrench ? "Obtenir un devis" : "Get a Quote"}
                    </a>
                </div>
            </div>
        </div>
            </div>
        </div>
    </div>
</div>

<div data-w-id="215f8bbc-1d94-22cb-c472-3975de472baf" className="pricing__right-card_custom">
    <h4 className="heading-9">Online Marketing</h4>
    <div className="tabs w-tabs" data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100">
        <div className="tabs-menu w-tab-menu">
            <a data-w-tab="Tab 3" className="tab_custom w-tab-link_custom w-tab-link w--current">
                <div>{isFrench ? "De base" : "Basic"}</div>
            </a>
            <a data-w-tab="Tab 1" className="tab_custom w-tab-link_custom w-tab-link ">
                <div>Standard</div>
            </a>
            <a data-w-tab="Tab 2" className="tab_custom w-tab-link_custom w-tab-link">
                <img loading="lazy" src="./assets/frontend/svg/svg_14.svg" alt="" className="tab__bolt" />
                <div className="text-block">Pro</div>
            </a>
        </div>
        <div className="w-tab-content">
          
            <div data-w-tab="Tab 3" className="w-tab-pane">
                <div className="pricing__right-top">
                    <h4 className="m-b-0">
                        CHF {prices.marketing_basic}
                    </h4>
                </div>
                <div className="pricing__right-bottom">
            <p className="p-small smaller smallest">
                {isFrench ? "Ce qui est inclus" : "What's included"}
            </p>
            <div className="w-layout-grid pricing__right-grid">
                <ul id="w-node-e550c3c3-661b-05d2-81c4-a474c1e7c807-25345308" role="list">
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Création de profils sur Facebook, Twitter, Instagram et LinkedIn" : "Profile creation on Facebook, Twitter, Instagram & LinkedIn"}
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Branding complet (photos de profil et de couverture selon l'identité de la marque)" : "Complete branding (profile & cover photos as per brand identity)"}
                        </p>
                    </li>
                </ul>
                <ul id="w-node-e550c3c3-661b-05d2-81c4-a474c1e7c807-25345308" role="list">
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Compléter les profils pour maximiser la visibilité sur les moteurs de recherche" : "Completing the profiles to maximize visibility over search engines"}
                        </p>
                    </li>
                </ul>
            </div>
            <div className="pricing__right-cta-wrapper">
                <div className="button__wrapper m-t-0">
                    <a href={stripeLink.marketing_basic} className="button w-inline-block">
                        <div className="button-inner">{isFrench ? "Commencer" : "Get started"}</div>
                    </a>
                </div>
                <div className="text-block-4">
                    {isFrench ? "ou" : "or"}
                    <a href="#" onClick={() => handleButtonClick('basic', 'marketing')} target="_blank" className="link-2">
                        {isFrench ? "Obtenir un devis" : "Get a Quote"}
                    </a>
                </div>
            </div>
        </div>
            </div>
          
            <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                <div className="pricing__right-top">
                    <h4 className="m-b-0">
                        CHF {prices.marketing_standard}
                    </h4>
                </div>
                <div className="pricing__right-bottom">
            <p className="p-small smaller smallest">
                {isFrench ? "Ce qui est inclus" : "What's included"}
            </p>
            <div className="w-layout-grid pricing__right-grid">
                <ul id="w-node-e550c3c3-661b-05d2-81c4-a474c1e7c807-25345308" role="list">
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Création de profils & branding complet" : "Profiles creation & complete branding"}
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Mises à jour hebdomadaires/publications sur les profils pour augmenter les likes & l'engagement des clients/visiteurs" : "Weekly updates/posting on profiles to increase likes & client/visitor engagement"}
                        </p>
                    </li>
                </ul>
                <ul id="w-node-e550c3c3-661b-05d2-81c4-a474c1e7c807-25345308" role="list">
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Campagnes actives bimensuelles pour la notoriété de la marque/du produit" : "Biweekly active campaigns for brand/product awareness"}
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Rapports d'analyse mensuels sur l'engagement des clients" : "Monthly analytics reports on customer/client engagement"}
                        </p>
                    </li>
                </ul>
            </div>
            <div className="pricing__right-cta-wrapper">
                <div className="button__wrapper m-t-0">
                    <a href={stripeLink.marketing_standard} className="button w-inline-block">
                        <div className="button-inner">{isFrench ? "Commencer" : "Get started"}</div>
                    </a>
                </div>
                <div className="text-block-4">
                    {isFrench ? "ou" : "or"}
                    <a href="#" onClick={() => handleButtonClick('standard', 'marketing')} target="_blank" className="link-2">
                        {isFrench ? "Obtenir un devis" : "Get a Quote"}
                    </a>
                </div>
            </div>
        </div>
            </div>
           
            <div data-w-tab="Tab 2" className="w-tab-pane">
                <div className="pricing__right-top">
                    <h4 className="m-b-0">
                        CHF {prices.marketing_pro}
                    </h4>
                </div>
                <div className="pricing__right-bottom">
            <p className="p-small smaller smallest">
                {isFrench ? "Ce qui est inclus" : "What's included"}
            </p>
            <div className="w-layout-grid pricing__right-grid">
                <ul id="w-node-_4d1ba718-62d7-e091-d8fb-0c60a3c1cabe-25345308" role="list">
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Création de profils & branding complet" : "Profiles creation & complete branding"}
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Mises à jour hebdomadaires/publications sur les profils pour augmenter les likes & l'engagement des clients/visiteurs" : "Weekly updates/posting on profiles to increase likes & client/visitor engagement"}
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "2 campagnes payantes sur Google & Facebook" : "2 X Paid campaigns on Google & Facebook"}
                        </p>
                    </li>
                   
                </ul>
                <ul id="w-node-_4d1ba718-62d7-e091-d8fb-0c60a3c1cabe-25345308" role="list">
                 
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Campagnes actives bimensuelles pour la notoriété de la marque/du produit" : "Biweekly active campaigns for brand/product awareness"}
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Gestion de la réputation sur les réseaux sociaux" : "Social media reputation management"}
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Réponse aux messages privés des clients & gestion des avis (si applicable)" : "Reply to clients' private messages & reviews management (if applicable)"}
                        </p>
                    </li>
                </ul>
            </div>
            <div className="pricing__right-cta-wrapper">
                <div className="button__wrapper m-t-0">
                    <a href={stripeLink.marketing_pro} className="button w-inline-block">
                        <div className="button-inner">{isFrench ? "Commencer" : "Get started"}</div>
                    </a>
                </div>
                <div className="text-block-5">
                    {isFrench ? "ou" : "or"}
                    <a href="#" onClick={() => handleButtonClick('pro', 'marketing')} target="_blank" className="link-2">
                        {isFrench ? "Obtenir un devis" : "Get a Quote"}
                    </a>
                </div>
            </div>
        </div>
            </div>
        </div>
    </div>
</div>
    
<div data-w-id="215f8bbc-1d94-22cb-c472-3975de472baf" className="pricing__right-card_custom">
    <h4 className="heading-9">Subscription</h4>
    <div className="tabs w-tabs" data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100">
        <div className="tabs-menu w-tab-menu">
            <a data-w-tab="Tab 3" className="tab_custom w-tab-link_custom w-tab-link w--current">
                <div>{isFrench ? "De base" : "Basic"}</div>
            </a>
            <a data-w-tab="Tab 1" className="tab_custom w-tab-link_custom w-tab-link">
                <div>Standard</div>
            </a>
            <a data-w-tab="Tab 2" className="tab_custom w-tab-link_custom w-tab-link">
                <img loading="lazy" src="./assets/frontend/svg/svg_14.svg" alt="" className="tab__bolt" />
                <div className="text-block">Pro</div>
            </a>
        </div>
        <div className="w-tab-content">
          
            <div data-w-tab="Tab 3" className="w-tab-pane">
                <div className="pricing__right-top">
                    <h4 className="m-b-0">
                        CHF {prices.subscription_basic}
                    </h4>
                </div>
                <div className="pricing__right-bottom">
            <p className="p-small smaller smallest">
                {isFrench ? "Ce qui est inclus" : "What's included"}
            </p>
            <div className="w-layout-grid pricing__right-grid">
                <ul id="w-node-e550c3c3-661b-05d2-81c4-a474c1e7c807-25345308" role="list">
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Création de profils sur Facebook, Twitter, Instagram & LinkedIn" : "Profile creation on Facebook, Twitter, Instagram & LinkedIn"}
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Branding complet (photos de profil & couverture selon l'identité de la marque)" : "Complete branding (profile & cover photos as per brand identity)"}
                        </p>
                    </li>
                </ul>
                <ul id="w-node-e550c3c3-661b-05d2-81c4-a474c1e7c807-25345308" role="list">
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Compléter les profils pour maximiser la visibilité sur les moteurs de recherche" : "Completing the profiles to maximize visibility over search engines"}
                        </p>
                    </li>
                </ul>
            </div>
            <div className="pricing__right-cta-wrapper">
                <div className="button__wrapper m-t-0">
                    <a href={stripeLink.subscription_basic} className="button w-inline-block">
                        <div className="button-inner">{isFrench ? "Commencer" : "Get started"}</div>
                    </a>
                </div>
                <div className="text-block-4">
                    {isFrench ? "ou" : "or"}
                    <a href={bookingLink} target="_blank" className="link-2">
                        {isFrench ? "Réserver un appel" : "Book a call"}
                    </a>
                </div>
            </div>
        </div>
            </div>
          
            <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                <div className="pricing__right-top">
                    <h4 className="m-b-0">
                        CHF {prices.subscription_standard}
                    </h4>
                </div>
                <div className="pricing__right-bottom">
            <p className="p-small smaller smallest">
                {isFrench ? "Ce qui est inclus" : "What's included"}
            </p>
            <div className="w-layout-grid pricing__right-grid">
                <ul id="w-node-e550c3c3-661b-05d2-81c4-a474c1e7c807-25345308" role="list">
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Création de profils & branding complet" : "Profiles creation & complete branding"}
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Mises à jour hebdomadaires/publications sur les profils pour augmenter les likes & l'engagement des clients/visiteurs" : "Weekly updates/posting on profiles to increase likes & client/visitor engagement"}
                        </p>
                    </li>
                </ul>
                <ul id="w-node-e550c3c3-661b-05d2-81c4-a474c1e7c807-25345308" role="list">
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Campagnes actives bihebdomadaires pour la notoriété de la marque/produit" : "Biweekly active campaigns for brand/product awareness"}
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Rapports d'analyse mensuels sur l'engagement des clients" : "Monthly analytics reports on customer/client engagement"}
                        </p>
                    </li>
                </ul>
            </div>
            <div className="pricing__right-cta-wrapper">
                <div className="button__wrapper m-t-0">
                    <a href={stripeLink.subscription_standard} className="button w-inline-block">
                        <div className="button-inner">{isFrench ? "Commencer" : "Get started"}</div>
                    </a>
                </div>
                <div className="text-block-4">
                    {isFrench ? "ou" : "or"}
                    <a href={bookingLink} target="_blank" className="link-2">
                        {isFrench ? "Obtenez un devis" : "Get a Quote"}
                    </a>
                </div>
            </div>
        </div>
            </div>
           
            <div data-w-tab="Tab 2" className="w-tab-pane">
                <div className="pricing__right-top">
                    <h4 className="m-b-0">
                        CHF {prices.subscription_pro}
                    </h4>
                </div>
                <div className="pricing__right-bottom">
            <p className="p-small smaller smallest">
                {isFrench ? "Ce qui est inclus" : "What's included"}
            </p>
            <div className="w-layout-grid pricing__right-grid">
                <ul id="w-node-_4d1ba718-62d7-e091-d8fb-0c60a3c1cabe-25345308" role="list">
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Création de profils & branding complet" : "Profiles creation & complete branding"}
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Mises à jour hebdomadaires/publications sur les profils pour augmenter les likes & l'engagement des clients/visiteurs" : "Weekly updates/posting on profiles to increase likes & client/visitor engagement"}
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "2 campagnes payantes sur Google & Facebook" : "2 X Paid campaigns on Google & Facebook"}
                        </p>
                    </li>
                </ul>
                <ul id="w-node-_4d1ba718-62d7-e091-d8fb-0c60a3c1cabe-25345308" role="list">
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Campagnes actives bihebdomadaires pour la notoriété de la marque/produit" : "Biweekly active campaigns for brand/product awareness"}
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Gestion de la réputation sur les réseaux sociaux" : "Social media reputation management"}
                        </p>
                    </li>
                    <li>
                        <p className="p-small smaller smallest">
                            {isFrench ? "Réponse aux messages privés des clients & gestion des avis (si applicable)" : "Reply to clients' private messages & reviews management (if applicable)"}
                        </p>
                    </li>
                </ul>
            </div>
            <div className="pricing__right-cta-wrapper">
                <div className="button__wrapper m-t-0">
                    <a href={stripeLink.subscription_pro} className="button w-inline-block">
                        <div className="button-inner">{isFrench ? "Commencer" : "Get started"}</div>
                    </a>
                </div>
                <div className="text-block-5">
                    {isFrench ? "ou" : "or"}
                    <a href={bookingLink} target="_blank" className="link-2">
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
  );
};

export default PricingTabs;