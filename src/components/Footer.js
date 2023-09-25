import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        id="sup"
        className="tp-demo-footer-area tp-demo-footer-bg pt-120 pb-120 p-relative"
        style={{ backgroundImage: `url(/assets/img/others/footer.jpg)` }}
      >
        <div className="tp-demo-footer-overlay"></div>
        <div className="tp-container">
          <div className="tp-row">
            <div className="col-lg-12">
              <div
                className="tp-demo-footer-main tp-text-center wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <h3 className="tp-demo-footer-title">
                  Take your website to <br /> the next level!
                </h3>
                <p>
                  We hope you like our work and that can help you in some way.
                </p>
                <div className="tp-demo-footer-btn">
                  <a className="tp-btn" target="_blank" href="https://themeforest.net/item/tecz-it-solutions-technology-react-next-js-template/48165863?s_rank=1">
                    <svg
                      fill="currentColor"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="14px"
                      height="14px"
                      viewBox="0 0 415.441 415.441"
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <path
                            d="M324.63,22.533C135.173,226.428,80.309,371.638,80.309,371.638c41.149,47.743,111.28,43.72,111.28,43.72
                                    c73.921,2.31,119.192-43.522,119.192-43.522c91.861-92.516,80.549-355.302,80.549-355.302
                                    C372.769-23.891,324.63,22.533,324.63,22.533z"
                          />
                          <path d="M32.369,181.983c0,0-28.983,57.964,18.859,155.495L178.367,58.01C176.916,58.538,63.691,98.037,32.369,181.983z" />
                        </g>
                      </g>
                    </svg>{" "}
                    PURCHASE NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
