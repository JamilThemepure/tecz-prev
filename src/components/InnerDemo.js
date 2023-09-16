'use client'
import React from 'react';
import  {Swiper, SwiperSlide } from 'swiper/react';


const setting = {
  slidesPerView: 5,
  spaceBetween: 25,
  loop: true,
  breakpoints: {
    '1400': {
      slidesPerView: 5,
    },
    '1200': {
      slidesPerView: 4,
    },
    '992': {
      slidesPerView: 3,
    },
    '768': {
      slidesPerView: 3,
    },
    '576': {
      slidesPerView: 2,
    },
    '0': {
      slidesPerView: 1,
    },
  },
}
const InnerDemo = () => {
  return (
    <>
      <section id="inn" className="tp-demo-inner-area pt-120 pb-90">
        <div className="tp-container">
          <div className="tp-row">
            <div className="tp-col-lg-12">
              <div className="tp-demo-inner-title-wrapper tp-text-center mb-30 wow fadeInUp" data-wow-duration="1s"
                data-wow-delay=".3s">
                <span className="tp-section-title-pre">Core inner</span>
                <h3 className="tp-section-title">Inner Pages Collections</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-container-fluid">
          <div className="tp-demo-inner-slider-box wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
            <Swiper {...setting} loop={true} className="tp-inner-active swiper-container">

                <SwiperSlide className="swiper-slide">
                  <div className="tp-demo-thumb-wrapper tp-text-center">
                    <div className="tp-demo-thumb">
                      <a target="_blank" href="https://tecz-next.vercel.app/project"><img src="assets/img/hero/img-1.jpg"
                        alt="image" /></a>
                    </div>
                    <a className="tp-demo-thumb-title" target="_blank" href="https://tecz-next.vercel.app/project">Project</a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="tp-demo-thumb-wrapper tp-text-center">
                    <div className="tp-demo-thumb">
                      <a target="_blank" href="https://tecz-next.vercel.app/about"><img src="assets/img/hero/img-2.jpg"
                        alt="image" /></a>
                    </div>
                    <a className="tp-demo-thumb-title" target="_blank" href="https://tecz-next.vercel.app/about">About Us</a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="tp-demo-thumb-wrapper tp-text-center">
                    <div className="tp-demo-thumb">
                      <a target="_blank" href="https://tecz-next.vercel.app/services"><img src="assets/img/hero/img-3.jpg"
                        alt="image" /></a>
                    </div>
                    <a className="tp-demo-thumb-title" target="_blank" href="https://tecz-next.vercel.app/services">Service</a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="tp-demo-thumb-wrapper tp-text-center">
                    <div className="tp-demo-thumb">
                      <a target="_blank" href="https://tecz-next.vercel.app/services-details"><img src="assets/img/hero/img-4.jpg"
                        alt="image" /></a>
                    </div>
                    <a className="tp-demo-thumb-title" target="_blank" href="https://tecz-next.vercel.app/services-details">Service
                      Details</a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="tp-demo-thumb-wrapper tp-text-center">
                    <div className="tp-demo-thumb">
                      <a target="_blank" href="https://tecz-next.vercel.app/team-details"><img src="assets/img/hero/img-5.jpg"
                        alt="image" /></a>
                    </div>
                    <a className="tp-demo-thumb-title" target="_blank" href="https://tecz-next.vercel.app/team-details">Team
                      Details</a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="tp-demo-thumb-wrapper tp-text-center">
                    <div className="tp-demo-thumb">
                      <a target="_blank" href="https://tecz-next.vercel.app/blog-details"><img src="assets/img/hero/img-6.jpg"
                        alt="image" /></a>
                    </div>
                    <a className="tp-demo-thumb-title" target="_blank" href="https://tecz-next.vercel.app/blog-details">Blog
                      Details</a>
                  </div>
                </SwiperSlide>

                {/* repet */}
                <SwiperSlide className="swiper-slide">
                  <div className="tp-demo-thumb-wrapper tp-text-center">
                    <div className="tp-demo-thumb">
                      <a target="_blank" href="https://tecz-next.vercel.app/project"><img src="assets/img/hero/img-1.jpg"
                        alt="image" /></a>
                    </div>
                    <a className="tp-demo-thumb-title" target="_blank" href="https://tecz-next.vercel.app/project">Project</a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="tp-demo-thumb-wrapper tp-text-center">
                    <div className="tp-demo-thumb">
                      <a target="_blank" href="https://tecz-next.vercel.app/about"><img src="assets/img/hero/img-2.jpg"
                        alt="image" /></a>
                    </div>
                    <a className="tp-demo-thumb-title" target="_blank" href="https://tecz-next.vercel.app/about">About Us</a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="tp-demo-thumb-wrapper tp-text-center">
                    <div className="tp-demo-thumb">
                      <a target="_blank" href="https://tecz-next.vercel.app/services"><img src="assets/img/hero/img-3.jpg"
                        alt="image" /></a>
                    </div>
                    <a className="tp-demo-thumb-title" target="_blank" href="https://tecz-next.vercel.app/services">Service</a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="tp-demo-thumb-wrapper tp-text-center">
                    <div className="tp-demo-thumb">
                      <a target="_blank" href="https://tecz-next.vercel.app/services-details"><img src="assets/img/hero/img-4.jpg"
                        alt="image" /></a>
                    </div>
                    <a className="tp-demo-thumb-title" target="_blank" href="https://tecz-next.vercel.app/services-details">Service
                      Details</a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="tp-demo-thumb-wrapper tp-text-center">
                    <div className="tp-demo-thumb">
                      <a target="_blank" href="https://tecz-next.vercel.app/team-details"><img src="assets/img/hero/img-5.jpg"
                        alt="image" /></a>
                    </div>
                    <a className="tp-demo-thumb-title" target="_blank" href="https://tecz-next.vercel.app/team-details">Team
                      Details</a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="tp-demo-thumb-wrapper tp-text-center">
                    <div className="tp-demo-thumb">
                      <a target="_blank" href="https://tecz-next.vercel.app/blog-details"><img src="assets/img/hero/img-6.jpg"
                        alt="image" /></a>
                    </div>
                    <a className="tp-demo-thumb-title" target="_blank" href="https://tecz-next.vercel.app/blog-details">Blog
                      Details</a>
                  </div>
                </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnerDemo;