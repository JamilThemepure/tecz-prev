
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LogoImage from "@/assets/img/logo/logo.png";

const Header = () => {
  return (
    <>
      <header className="tp-demo-header tp-demo-transparent p-relative">
        <div className="tp-container-fluid">
          <div className="tp-demo-box">
            <div className="tp-row align-items-center">
              <div className="tp-col-xl-4 tp-col-lg-3 tp-col-md-3 tp-col-sm-6 tp-col-6">
                <div className="tp-demo-header-logo">
                  <Link href="/">
                    <Image src={LogoImage} alt="image" />
                  </Link>
                </div>
              </div>
              <div className="tp-col-xl-4 tp-col-lg-6 tp-col-md-6 d-none d-md-block">
                <div className="tp-demo-menu">
                  <nav className="nav">
                    <ul>
                      <li><Link className="nav_link" href="#xyz">Demos</Link></li>
                      <li><Link className="nav_link" href="#fet">Features</Link></li>
                      <li><Link className="nav_link" href="#inn">Inner</Link></li>
                      <li><Link className="nav_link" target="_blank" href="https://help.themepure.net/">Support</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="tp-col-xl-4 tp-col-lg-3 tp-col-md-3 tp-col-sm-6 tp-col-6">
                <div className="tp-demo-header-btn tp-text-end">
                  <a className="tp-btn" target="_blank"
                    href="https://themeforest.net/item/tecz-it-solutions-technology-react-next-js-template/48165863?s_rank=1">PURCHASE
                    NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;