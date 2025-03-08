import React from "react";
import "./SpaceLanding.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__links">
          <div className="footer__column">
            <h3 className="footer__title">DESTINATIONS</h3>
            <ul className="footer__list">
              <li>
                <a href="#earth" className="footer__link">
                  Earth
                </a>
              </li>
              <li>
                <a href="#moon" className="footer__link">
                  Moon
                </a>
              </li>
              <li>
                <a href="#mars" className="footer__link">
                  Mars
                </a>
              </li>
              <li>
                <a href="#europa" className="footer__link">
                  Europa
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__title">GET HELP</h3>
            <ul className="footer__list">
              <li>
                <a href="#status" className="footer__link">
                  Status
                </a>
              </li>
              <li>
                <a href="#preorder" className="footer__link">
                  Preorder
                </a>
              </li>
              <li>
                <a href="#returns" className="footer__link">
                  Returns
                </a>
              </li>
              <li>
                <a href="#payment" className="footer__link">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#contact" className="footer__link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__title">ABOUT SPACED</h3>
            <ul className="footer__list">
              <li>
                <a href="#news" className="footer__link">
                  News
                </a>
              </li>
              <li>
                <a href="#careers" className="footer__link">
                  Careers
                </a>
              </li>
              <li>
                <a href="#story" className="footer__link">
                  Story
                </a>
              </li>
              <li>
                <a href="#innovation" className="footer__link">
                  Sustainable Innovation
                </a>
              </li>
              <li>
                <a href="#media" className="footer__link">
                  Media
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__social">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2c2eb5908acd689e3a5491c3644c91e02714531c61eacdd72e39010f084a7e9?placeholderIfAbsent=true"
            className="footer__social-icon"
            alt="Social media"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bf8e29d3f855746b5c53df04fc605234e4b3c4c45c0d783214a52a8d5b7ea1f?placeholderIfAbsent=true"
            className="footer__social-icon"
            alt="Social media"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46bfc7b118c992927d54147f486fc60509a839b82ab59db43c54bb45c98dc491?placeholderIfAbsent=true"
            className="footer__social-icon"
            alt="Social media"
          />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1228b63df48a9c7fef5d0e40b80fe2ce9ae05890d9bd04136b5e78291cc1e5ed?placeholderIfAbsent=true"
          className="footer__divider"
          alt=""
          aria-hidden="true"
        />
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2018 SPACED, Inc. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#guides" className="footer__legal-link">
              Guides
            </a>
            <a href="#terms" className="footer__legal-link">
              Terms of Use
            </a>
            <a href="#company" className="footer__legal-link">
              Company Details
            </a>
            <a href="#privacy" className="footer__legal-link">
              Privacy & Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
