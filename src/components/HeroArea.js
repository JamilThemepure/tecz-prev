
import React from 'react';

const HeroArea = () => {
  return (
    <>
      <section className="tp-demo-hero-area tp-demo-hero-height p-relative fix pt-270 pb-100"
         style={{backgroundImage: `url(assets/img/hero/hero-bg.jpg)`}}>
        <div className="tp-container">
          <div className="tp-row">
            <div className="col-lg-12">
              <div className="tp-demo-hero-content text-center">
                <div className="tp-demo-hero-shape">
                  <img className="shape-1 wow fadeInRight d-none" data-wow-duration="1s" data-wow-delay=".7s" src="assets/img/others/curved.png" alt="image" />
                    <img className="shape-2 d-none" src="assets/img/others/gurantee-stamp.png" alt="image" />
                    </div>
                    <h3 className="tp-demo-hero-title wow fadeInDown" data-wow-duration="1s" data-wow-delay=".3s">Tecz - IT Solutions & Technology<br /> <span style={{color: "#3C72FC"}}>React Next js</span> Template</h3>
                    <p className="wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">Flexible, modern, powerful
                      unique sections.</p>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default HeroArea;