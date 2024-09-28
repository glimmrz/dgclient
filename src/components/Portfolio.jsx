import "./hero.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";

const Portfolio = () => {
  const [projectPhotos, setProjectPhotos] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/project-photos`);
        setProjectPhotos(response.data);
      } catch (err) {
        console.error("Error fetching the project photos:", err);
      }
    };

    fetchPhotos();
  }, []);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero__work-slider">
      <div className="latest-projects__wrapper port">
        <img
          src="./assets/frontend/svg/design.png"
          loading="lazy"
          data-w-id="8ff12bfd-4380-553d-a03a-c5c27e18fd45"
          alt=""
          className="hero-badge"
        />
        <div className="badge__text">
          Latest
          <br />
          projects
        </div>
      </div>
      <div
        className="hero__images-wrapper port"
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        {projectPhotos.map((photo, index) => (
          <div className="hero__image-wrapper" key={index}>
            <img
              src={`./assets/frontend/portfolio/${photo.image}`}
              loading="lazy"
              sizes="(max-width: 767px) 250px, 385px"
              alt="img"
              className="image-fill"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
