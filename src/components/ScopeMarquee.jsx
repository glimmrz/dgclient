import React, { useEffect } from 'react';

const ScopeMarquee = () => {
  useEffect(() => {
    const marqueeInner = document.querySelector('.marquee__inner');
    if (marqueeInner) {
      marqueeInner.style.opacity = 1;
    }
  }, []);

  return (
    <div className="div-block-23">
      <div className="scope-marquee">
        <div data-w-id="35cebc9d-1e88-0a44-106b-b4c01a138ce0" style={{ opacity: 0 }} className="marquee__inner">
          <div className="marquee__element">
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
            <div className="scope__pill _5">
              <div>Real State</div>
            </div>
            <div className="scope__pill _6">
              <div>Wordpress</div>
            </div>
            <div className="scope__pill _5">
              <div>Logos</div>
            </div>
            <div className="scope__pill _4">
              <div>Icons</div>
            </div>
            <div className="scope__pill _2">
              <div>Mobile Apps</div>
            </div>
            <div className="scope__pill _3">
              <div>Blog Graphics</div>
            </div>
          </div>
          <div className="marquee__element">
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
            <div className="scope__pill _5">
              <div>Real State</div>
            </div>
            <div className="scope__pill _6">
              <div>Wordpress</div>
            </div>
            <div className="scope__pill _5">
              <div>Logos</div>
            </div>
            <div className="scope__pill _4">
              <div>Icons</div>
            </div>
            <div className="scope__pill _2">
              <div>Mobile Apps</div>
            </div>
            <div className="scope__pill _3">
              <div>Blog Graphics</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScopeMarquee;