import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { API_URL } from "../utils/constants";
import FaqItem from "./faq-item/faq-item";

const FAQ = () => {
  const location = useLocation();
  const isFrench = location.pathname === "/fr";
  const [open, setOpen] = useState(Array(7).fill(false));

  const toggleAnswer = (index) => {
    setOpen(open.map((item, i) => (i === index ? !item : item)));
  };

  const questions = isFrench
    ? [
        {
          wid: "b2c70162-34ec-fef7-01f0-fdadc767dcaa",
          question:
            "Qu'est-ce qui rend votre agence de design unique par rapport aux autres ?",
          answer: `Designjoy.ch est une agence de design dirigée par une famille et fondée par des experts possédant des connaissances de niveau doctorat en analyse du comportement humain et dans les domaines psycho-sociaux, matériels, financiers, juridiques et administratifs suisses. Cette expertise interdisciplinaire nous permet de concevoir et de développer des solutions non seulement éthiques et centrées sur l'humain, mais aussi méticuleusement adaptées aux valeurs de votre marque et aux besoins de vos clients.
            Nous abordons chaque projet—qu'il s'agisse de conception créative de sites Web, de développement Web, de création de logos, de campagnes numériques, de référencement SEO ou de développement d'applications mobiles—avec une compréhension profonde des facteurs psychologiques et sociaux qui influencent le comportement des utilisateurs. Notre approche éthique garantit que nos designs sont inclusifs, accessibles et respectueux de la vie privée des utilisateurs, tandis que notre méthodologie centrée sur l'humain signifie que nous nous concentrons sur la création d'expériences qui résonnent véritablement avec votre public. En alignant notre travail sur l'identité unique de votre marque et les besoins de vos clients, nous livrons des résultats à la fois percutants et significatifs, nous démarquant ainsi sur le marché.`,
        },
        {
          wid: "c059aaf4-52b9-113e-8db0-1a274dc9cc6f",
          question: "À quelle vitesse vais-je recevoir mes designs ?",
          answer:
            "En moyenne, la plupart des demandes de conception sont réalisées en trois semaines ou moins. Cependant, pour les projets plus complexes, le délai peut être légèrement prolongé afin de garantir la plus haute qualité.",
        },
        {
          wid: "1e6d7f24-c8d2-34f8-4bdc-cc2a548b30b1",
          question: "Quels programmes utilisez-vous pour concevoir ?",
          answer:
            "Nous concevons principalement en utilisant Figma et Adobe Illustrator, qui sont des outils leaders dans l'industrie, nous permettant de créer des designs de haute qualité, détaillés et évolutifs.",
        },
        {
          wid: "9070053e-0472-d5de-1a41-78e9691f6e50",
          question:
            "Pouvez-vous optimiser mon site web pour différents moteurs de recherche dans plusieurs langues ?",
          answer:
            "Absolument. En tant qu'agence basée en Suisse, nous sommes spécialisés dans l'optimisation des sites Web pour divers moteurs de recherche (Google, Bing, DuckDuckGo) dans plusieurs langues, y compris l'allemand, le français, l'italien et l'anglais. Notre approche comprend la recherche de mots-clés localisés, la création de contenu, le référencement sur page, le référencement technique et la gestion de stratégies de référencement multilingues pour garantir que votre site Web fonctionne de manière optimale sur tous les marchés cibles.",
        },
        {
          wid: "9c556de5-30a5-0ebf-bd18-15beb5184906",
          question:
            "Comment votre entreprise intègre-t-elle les principes de conception centrée sur l'humain dans le processus de développement de sites Web ?",
          answer:
            "Notre processus de conception intègre une recherche utilisateur avancée, la psychologie comportementale et une réflexion innovante pour créer des expériences numériques qui résonnent vraiment avec les utilisateurs. Nous menons des recherches approfondies, créons des designs centrés sur l'utilisateur et affinons continuellement notre travail en fonction des retours des utilisateurs. Cela garantit que chaque site Web que nous construisons est optimisé pour la satisfaction des utilisateurs et les résultats commerciaux.",
        },
        {
          wid: "d86cfb2b-0e25-47cc-e7d7-ddf6595c83c4",
          question: "Mon site web sera-t-il compatible avec les mobiles ?",
          answer:
            "Oui, votre site Web sera entièrement compatible avec les mobiles. Nous privilégions la conception réactive pour garantir que votre contenu soit facilement lisible et navigable sur n'importe quel appareil, offrant une expérience utilisateur optimale sur les smartphones, les tablettes et les ordinateurs de bureau.",
        },
        {
          wid: "cf2daa55-f0c7-1a4c-d493-e3435eca7a77",
          question:
            "Proposez-vous des services de maintenance et de mise à jour de sites Web ?",
          answer:
            "Oui, nous fournissons des services complets de maintenance et de mise à jour de sites Web. Nos forfaits incluent des sauvegardes régulières, des mises à jour de sécurité, l'optimisation des performances, les mises à jour de contenu et le support technique. Nous adaptons nos services de maintenance à vos besoins spécifiques, que vous ayez besoin d'un support quotidien, hebdomadaire ou mensuel.",
        },
      ]
    : [
        {
          wid: "b2c70162-34ec-fef7-01f0-fdadc767dcaa",
          question: "What makes your design agency unique compared to others?",
          answer: `Designjoy.ch is a family-led design agency founded by experts with doctorate-level knowledge in human behavior analysis and Swiss psycho-social, material, financial, legal, and administrative domains. This interdisciplinary expertise allows us to design and develop solutions that are not only ethically and human-centered but also meticulously tailored to your brand’s values and customer needs.
            We approach every project—whether it’s creative web design, web development, logo creation, digital campaigns, SEO, or mobile app development—with a deep understanding of the psychological and social factors that influence user behavior. Our ethical approach ensures that our designs are inclusive, accessible, and respectful of user privacy, while our human-centered methodology means that we focus on creating experiences that genuinely resonate with your audience. By aligning our work with your brand’s unique identity and the needs of your customers, we deliver results that are both impactful and meaningful, setting us apart in the market.`,
        },
        {
          wid: "c059aaf4-52b9-113e-8db0-1a274dc9cc6f",
          question: "How fast will I receive my designs?",
          answer:
            "On average, most design requests are completed within three weeks or less. However, for more complex projects, the timeline may extend slightly to ensure the highest quality.",
        },
        {
          wid: "1e6d7f24-c8d2-34f8-4bdc-cc2a548b30b1",
          question: "What programs do you use for design?",
          answer:
            "We primarily design using Figma and Adobe Illustrator, which are industry-leading tools that allow us to create high-quality, detailed, and scalable designs.",
        },
        {
          wid: "9070053e-0472-d5de-1a41-78e9691f6e50",
          question:
            "Can you optimize my website for different search engines in multiple languages?",
          answer:
            "Absolutely. As a Swiss-based agency, we specialize in optimizing websites for various search engines (Google, Bing, DuckDuckGo) across multiple languages, including German, French, Italian, and English. Our approach includes localized keyword research, content creation, on-page SEO, technical SEO, and managing multilingual SEO strategies to ensure your website performs optimally in all target markets.",
        },
        {
          wid: "9c556de5-30a5-0ebf-bd18-15beb5184906",
          question:
            "How does your company incorporate human-centered design principles into the website development process?",
          answer:
            "Our design process integrates advanced user research, behavioral psychology, and innovative design thinking to craft digital experiences that truly resonate with users. We conduct in-depth research, create user-centric designs, and continuously refine our work based on user feedback. This ensures that every website we build is optimized for both user satisfaction and business results.",
        },
        {
          wid: "d86cfb2b-0e25-47cc-e7d7-ddf6595c83c4",
          question: "Will my website be mobile-friendly?",
          answer:
            "Yes, your website will be fully mobile-friendly. We prioritize responsive design to ensure your content is easily readable and navigable on any device, providing an optimal user experience across smartphones, tablets, and desktops.",
        },
        {
          wid: "cf2daa55-f0c7-1a4c-d493-e3435eca7a77",
          question: "Do you offer website maintenance and updates?",
          answer:
            "Yes, we provide comprehensive website maintenance and update services. Our packages include regular backups, security updates, performance optimization, content updates, and technical",
        },
      ];

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

  return (
    <div id="faq" className="faq">
      <img
        src="./assets/frontend/svg/faq.svg"
        loading="lazy"
        style={{ opacity: 0 }}
        data-w-id="b773f175-0fc5-061d-3d23-79188d1c4660"
        alt="FAQ Divider"
        className="divider"
      />

      <div className="container">
        <div className="faq__flex">
          <div
            data-w-id="b160730a-bcb9-0fc4-d3f0-4a018350bbfe"
            style={{ opacity: 0 }}
          >
            <h2 className="heading-4">
              {isFrench
                ? "Questions fréquemment posées"
                : "Commonly asked questions"}
            </h2>
            <div className="faq__list">
              {questions.map((item, index) => (
                <div className="faq__row" key={index}>
                  {/* <div className="faq__row-left">
                    <p
                      className="faq__title"
                      onClick={() => toggleAnswer(index)}
                      aria-expanded={open[index]}
                      aria-controls={`answer-${index}`}
                    >
                      {item.question}
                    </p>
                    {open[index] && (
                      <p id={`answer-${index}`} className="faq__answer">
                        {item.answer}
                      </p>
                    )}
                  </div> */}
                  <FaqItem item={item} />
                  {/* <img
                    src="./assets/frontend/svg/svg_16.svg"
                    loading="lazy"
                    className="faq__arrow"
                    alt="Expand/Collapse"
                  /> */}
                </div>
              ))}
            </div>
          </div>
          <div
            data-w-id="a79fed07-d776-c799-ce09-74c9ba26ea7b"
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
            className="call__card"
          >
            <img
              src="./assets/frontend/img/meeting.jpg"
              loading="lazy"
              alt="Intro Call"
              className="image-81"
            />
            <h4 className="call__heading intro">Book a 30-Minute Intro Call</h4>
            <div className="button__wrapper">
              <a
                href={bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="button w-inline-block"
              >
                <div className="button-inner">Schedule Now</div>
              </a>
            </div>
            <div className="text-block-6">
              Prefer to email?{" "}
              <a href="mailto:designjoy@concorde.pro" className="link-3">
                designjoy@concorde.pro
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./assets/frontend/svg/Element 4.svg"
        loading="lazy"
        alt="Decorative Element"
        className="image-78 _3"
      />
    </div>
  );
};

export default FAQ;
