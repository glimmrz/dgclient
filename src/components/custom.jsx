import React, { useEffect } from 'react';
import Typer from "typer-js"; 

const CustomComponent = () => {
    useEffect(() => {
      // Check if Typer is properly imported and initialized
      document.querySelectorAll("[data-typer-targets]").forEach(element => {
        new Typer(element, {
          highlightColor: "rgba(9,127,255,100)",
          typerOrder: "sequential"
        });
      });
  
      // Check if the device is touch-enabled and add classes to the HTML element
      const docElement = document.documentElement;
      const classPrefix = " w-mod-";
      docElement.className += classPrefix + "js";
      
      if ('ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch)) {
        docElement.className += classPrefix + "touch";
      }
  
      // Google Analytics snippet with `gtag`
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "UA-74383838-1", { anonymize_ip: false });
  
    }, []);
  
    return (
      <div>
        {/* Your component JSX */}
        
        {/* Other components or content */}
      </div>
    );
  };
  
  export default CustomComponent;