import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";

const Services = () => {
  // const [projectPhotos, setProjectPhotos] = useState([]);

  // useEffect(() => {
  //   const fetchPhotos = async () => {
  //     try {
  //       const response = await axios.get(`${API_URL}/api/project-photos`);
  //       setProjectPhotos(response.data);
  //     } catch (err) {
  //       console.error("Error fetching the project photos:", err);
  //     }
  //   };

  //   fetchPhotos();
  // }, []);

  return (
    <div id="services" className="scop">
      <div className="container">
        <div
          data-w-id="7b22239a-fd6c-f64a-74ba-563e9f2c76c1"
          style={{ opacity: 0 }}
          className="scope"
        >
          <img
            src="./assets/frontend/svg/svg_5.svg"
            loading="lazy"
            style={{ opacity: 0 }}
            data-w-id="b773f175-0fc5-061d-3d23-79188d1c4660"
            alt=""
            className="divider"
          />
          <h2 className="hiw-heading _2 _3 _6">
            Apps, websites, logos &amp; more
          </h2>
          <p></p>
          <div className="scope__tags-wrapper">
            <div className="scope__pill">
              <div>Landing pages</div>
            </div>
            <div className="scope__pill _2">
              <div>Creative web design</div>
            </div>
            <div className="scope__pill _3">
              <div>Web development</div>
            </div>
            <div className="scope__pill _4">
              <div>E-commerce</div>
            </div>
            <div className="scope__pill _7">
              <div>Real estate</div>
            </div>
            <div className="scope__pill _5">
              <div>Logos</div>
            </div>
            <div className="scope__pill _6">
              <div>Wordpress</div>
            </div>
            <div className="scope__pill _5">
              <div>Digital Campaigns</div>
            </div>
            <div className="scope__pill _4">
              <div>SEO</div>
            </div>
            <div className="scope__pill _2">
              <div>Mobile Apps</div>
            </div>
            <div className="scope__pill _3">
              <div>Social Media</div>
            </div>
            <div className="scope__pill more">
              <div>+ more</div>
            </div>
          </div>
        </div>
        <div
          data-w-id="9ad7e7ae-9d56-534a-1fa2-8365a6bf1706"
          style={{ opacity: 0 }}
          className="work__flex"
        >
          <div className="w-layout-grid grid-1">
            {/* {projectPhotos.map((photo, index) => (
              <img
                key={index}
                src={`./assets/frontend/portfolio/${photo.image}`}
                loading="lazy"
                sizes="(max-width: 479px) 85vw, (max-width: 991px) 87vw, 88vw"
                alt=""
                className="image-87"
              />
            ))} */}
            <img
              src={`./assets/frontend/portfolio/lauren.jpg`}
              loading="lazy"
              sizes="(max-width: 479px) 85vw, (max-width: 991px) 87vw, 88vw"
              alt=""
              className="image-87"
            />
            <img
              src={`./assets/frontend/portfolio/ngo-project.jpg`}
              loading="lazy"
              sizes="(max-width: 479px) 85vw, (max-width: 991px) 87vw, 88vw"
              alt=""
              className="image-87"
            />
            <img
              src={`./assets/frontend/portfolio/resturant.jpg`}
              loading="lazy"
              sizes="(max-width: 479px) 85vw, (max-width: 991px) 87vw, 88vw"
              alt=""
              className="image-87"
            />
            <img
              src={`./assets/frontend/portfolio/pizza.jpg`}
              loading="lazy"
              sizes="(max-width: 479px) 85vw, (max-width: 991px) 87vw, 88vw"
              alt=""
              className="image-87"
            />
            <img
              src={`./assets/frontend/portfolio/wood.jpg`}
              loading="lazy"
              sizes="(max-width: 479px) 85vw, (max-width: 991px) 87vw, 88vw"
              alt=""
              className="image-87"
            />
            <img
              src={`./assets/frontend/portfolio/saas.jpg`}
              loading="lazy"
              sizes="(max-width: 479px) 85vw, (max-width: 991px) 87vw, 88vw"
              alt=""
              className="image-87"
            />
            <img
              src={`./assets/frontend/portfolio/custom.jpg`}
              loading="lazy"
              sizes="(max-width: 479px) 85vw, (max-width: 991px) 87vw, 88vw"
              alt=""
              className="image-87"
            />
            <img
              src={`./assets/frontend/portfolio/bodybuilding.jpg`}
              loading="lazy"
              sizes="(max-width: 479px) 85vw, (max-width: 991px) 87vw, 88vw"
              alt=""
              className="image-87"
            />
          </div>
        </div>
        <div className="button__wrapper _33">
          <a
            data-w-id="79c18135-f96b-ef1e-d9db-8dc1df7b3385"
            style={{ opacity: 0 }}
            href="#"
            target="_blank"
            className="button w-inline-block"
          >
            <div className="button-inner">See more work</div>
          </a>
        </div>
      </div>
      <img
        src="./assets/frontend/svg/Element 7.svg"
        loading="lazy"
        alt=""
        className="image-77"
      />
      <img
        src="./assets/frontend/svg/Element 10.svg"
        loading="lazy"
        alt=""
        className="image-78"
      />
    </div>
  );
};

export default Services;
