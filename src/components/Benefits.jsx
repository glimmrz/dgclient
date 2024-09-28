import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const Benefits = () => {
    const currentPath = window.location.pathname;
    const isFrench = currentPath.includes('/fr');

    const animationRefs = useRef([]);

    useEffect(() => {
        // Initialize animations
        const animations = benefits.map((benefit, index) => {
            return lottie.loadAnimation({
                container: animationRefs.current[index],
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: benefit.animationSrc, // Use the path from your data
            });
        });

        // Cleanup animations on unmount
        return () => {
            animations.forEach(animation => {
                animation.destroy();
            });
        };
    }, []);

    const benefits = [
        {
            _id: "66c45622ddae647c55107515",
            id: "indexlottie1",
            dataWId: "406f9178-bb63-55dc-8830-1bbb7db78043",
            iconClass: "dash",
            animationDataWId: "ca6b324b-cc7f-c4d2-07f7-9de40ed30e3f",
            animationSrc: "./assets/frontend/json/Member_ship_animation_1.json",
            defaultDuration: "4.55",
            heading: isFrench ? "Gestion de conception" : "Design Management",
            description: isFrench 
                ? "Gérez facilement vos projets avec notre portail simple, suivez les progrès et restez informé."
                : "Effortlessly manage your projects with our simple portal, easily tracking progress and staying informed.",
        },
        {
            _id: "66c45622ddae647c55107516",
            id: "indexlottie2",
            dataWId: "406f9178-bb63-55dc-8830-1bbb7db78049",
            iconClass: "flash",
            animationDataWId: "082857b1-7d77-cde5-24d5-b791203ccf81",
            animationSrc: "./assets/frontend/json/Member_ship_animation_3.json",
            defaultDuration: "3",
            heading: isFrench ? "Tarification équitable et transparente" : "Fair, Transparent Pricing",
            description: isFrench 
                ? "Nous offrons des prix abordables et entretenons des partenariats à long terme basés sur la confiance et les valeurs communes."
                : "We offer affordable pricing and nurture long term partnerships built on trust and shared values.",
        },
        {
            _id: "66c45622ddae647c55107517",
            id: "indexlottie3",
            dataWId: "406f9178-bb63-55dc-8830-1bbb7db7804f",
            iconClass: "fixed",
            animationDataWId: "a258deb3-5309-64b5-abd0-41bf753b10bd",
            animationSrc: "./assets/frontend/json/sus.json",
            defaultDuration: "3",
            heading: isFrench ? "Développement durable" : "Sustainable Development",
            description: isFrench 
                ? "Hébergement de serveurs suisse pour la confidentialité, conception optimisée pour la vitesse et l'efficacité."
                : "Swiss server hosting for privacy, optimized design for speed and efficiency.",
        },
        {
            _id: "66c45622ddae647c55107518",
            id: "indexlottiee4",
            dataWId: "85cf7c8c-535f-7dba-81cc-516f1310e120",
            iconClass: "check",
            animationDataWId: "17e502d4-67ef-2568-986f-0fd5f6a6429b",
            animationSrc: "./assets/frontend/json/Member_ship_animation_4.json",
            defaultDuration: "2.0020019204587935",
            heading: isFrench ? "Qualité suisse" : "Swiss Quality",
            description: isFrench 
                ? "Offrir un artisanat exceptionnel et une attention aux détails."
                : "Delivering exceptional craftsmanship and attention to detail.",
        },
        {
            _id: "66c45622ddae647c55107519",
            id: "indexlottie5",
            dataWId: "ac4d681d-d0f4-b5f6-b9ea-932e2c7f05b2",
            iconClass: "scale",
            animationDataWId: "cec64caa-3605-04a4-da07-9a2fd15c776a",
            animationSrc: "./assets/frontend/json/Member_ship_animation_5.json",
            defaultDuration: "2",
            heading: isFrench ? "Exclusivité personnalisée" : "Personalized Exclusivity",
            description: isFrench 
                ? "Chaque conception que nous créons est exclusivement la vôtre, spécialement conçue pour votre marque."
                : "Every design we create is uniquely yours, crafted specifically for your brand.",
        },
        {
            _id: "66c45622ddae647c5510751a",
            id: "indexlottie6",
            dataWId: "5e890574-191e-4d00-5990-96837a4ca5b1",
            iconClass: "finger",
            animationDataWId: "5dcecfbb-59de-a57a-a473-ec6ad62d9f78",
            animationSrc: "./assets/frontend/json/Member_ship_animation_6.json",
            defaultDuration: "10",
            heading: isFrench ? "Autonomisation des clients" : "Client Empowerment",
            description: isFrench 
                ? "Nous vous formons pour naviguer et gérer votre site Web en toute confiance."
                : "We train you to confidently navigate and manage your website.",
        }
    ];

    return (
        <div id="benefits" className="quote">
            <div className="container">
                <div data-w-id="d4c86736-49ca-3423-8367-b5c1feda07ac" style={{ opacity: 0 }} className="bb__wrapper">
                    <img src="./assets/frontend/svg/svg_5.svg" loading="lazy" style={{ opacity: 0 }}
                        data-w-id="838ed669-6179-4f03-b8f2-8f25cd0e637e" alt="" className="divider m-t-24" />
                           <img src="./assets/frontend/svg/star.svg" loading="lazy" style={{ opacity: 0 }}
                        data-w-id="838ed669-6179-4f03-b8f2-8f25cd0e637e" alt="" className="divider m-t-24" />
                 
                    <h2 className="hiw-heading">
                        {isFrench ? "Avantages de DesignJoy" : "DesignJoy Benefits"}
                    </h2>
                    <p className="bb__sub">
                        {isFrench 
                            ? "Profitez de solutions de conception sur mesure, élaborées avec une précision suisse."
                            : "Enjoy comprehensive, custom tailored design solutions crafted with Swiss precision."}
                    </p>
                </div>
                <div className="w-layout-grid benefits__grid">
                    {benefits.map((benefit, index) => (
                        <div key={benefit._id} id={`w-node-${benefit.id}`} data-w-id={benefit.dataWId} style={{ opacity: 0 }} className="hiw__column">
                            <div className={`hiw__icon-wrapper ${benefit.iconClass}`}>
                                <div
                                    ref={(el) => (animationRefs.current[index] = el)} // Assign ref to the animation container
                                    data-w-id={benefit.animationDataWId}
                                    style={{ width: 150, height: 150 }} // Adjust the width and height as needed
                                ></div>
                            </div>
                            <h5 className="heading-3">{benefit.heading}</h5>
                            <p className="p-small smaller">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <img src="./assets/frontend/svg/Element 1.svg" loading="lazy" alt="" className="image-77" />
            <img src="./assets/frontend/svg/Element 11.svg" loading="lazy" alt="" className="image92" />
    
        </div>
    );
};

export default Benefits;
