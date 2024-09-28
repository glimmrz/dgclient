import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const Hiw = () => {
  const arrowRef = useRef(null);
  const animation2Ref = useRef(null);
  const animation3Ref = useRef(null);

  useEffect(() => {
    const arrowAnimation = lottie.loadAnimation({
      container: arrowRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './assets/frontend/json/msg.json',
    });

    const animation2 = lottie.loadAnimation({
      container: animation2Ref.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './assets/frontend/json/diamond.json',
    });

    const animation3 = lottie.loadAnimation({
      container: animation3Ref.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './assets/frontend/json/reloading.json',
    });

    // Cleanup animations on unmount
    return () => {
      arrowAnimation.destroy();
      animation2.destroy();
      animation3.destroy();
    };
  }, []);


  const currentPath = window.location.pathname;
  const isFrench = currentPath.includes('/fr');


  return (
    <div id="hiw" className="hiw">
      <div className="container">
        <div className="hiw__wrapper">
        <h2 className="hiw-heading">
        {isFrench
          ? "Nous concevons des produits intuitifs avec une approche centrée sur l'humain."
          : "We Design Intuitive Products with a Human Centered Approach."}
      </h2>
      <p className="hiw__sub">
        {isFrench
          ? "En combinant psychologie, recherche et créativité pour comprendre en profondeur votre marque et vos utilisateurs, créant des designs percutants."
          : "Blending psychology, research, and creativity to deeply understand your brand and users, creating impactful designs."}
      </p>
        </div>
        <div className="w-layout-grid grid">
          <div className="hiw__column">
            <div className="hiw__icon-wrapper subscrobe">
            <div
        className="arrows"
        ref={arrowRef}
        style={{ width: 100, height: 100 }} // Adjust size as needed
      ></div>
            </div>
            <p className="p-small">
          {isFrench
            ? "Commencez par une simple consultation pour comprendre vos besoins uniques."
            : "Start with a simple consultation to understand your unique needs."}
        </p>
          </div>
          <div className="hiw__column">
            <div className="hiw__icon-wrapper folder">
            <div
        className="lottie-animation-2"
        ref={animation2Ref}
        style={{ width: 100, height: 100 }} // Adjust size as needed
      ></div>
    
             </div>
             <p className="p-small">
          {isFrench
            ? "Recevez votre design sous deux semaines ouvrables en moyenne."
            : "Receive your design within two business weeks on average."}
        </p>
          </div>
          <div className="hiw__column">
            <div className="hiw__icon-wrapper thum">
            <div
        className="lottie-animation-3"
        ref={animation3Ref}
        style={{ width: 100, height: 100 }} // Adjust size as needed
      ></div>
            </div>
            <p className="p-small revise">
          {isFrench
            ? "Nous réviserons les designs jusqu'à ce que vous soyez 100% satisfait."
            : "We'll revise the designs until you're 100% satisfied."}
        </p>
          </div>
        </div>
        <div className="button__wrapper m-t-40">
          <a href="#plans" className="button w-inline-block">
            <div className="button-inner">  {isFrench ? "Voir les plans" : "See plans"}</div>
          </a>
        </div>
      </div>
      <img src="./assets/frontend/svg/Element 12.svg" loading="lazy" alt="" className="image-70" />
      <img src="./assets/frontend/svg/Element 3.svg" loading="lazy" alt="" className="image-71" />
    </div>
  );
};

export default Hiw;