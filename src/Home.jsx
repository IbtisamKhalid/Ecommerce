import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home" style={{ backgroundColor: "black" }}>
        <button type="button">
          <Link to="/escrow">Click Here to go to the escrow section</Link>
        </button>
      </div>
      <div className="home" style={{ backgroundColor: "black" }}>
        <button type="button">
          <Link to="/store">Click Here to go to the store section</Link>
        </button>

        <div
          class="sectionHero-carousel carousel"
          data-component="carousel"
          style={{ backgroundColor: "black" }}
        >
          <div
            class="sectionHero-upsell carousel-item"
            data-target="carousel-item"
          >
            <span class="sectionHero-upsell-title">
              <span class="sectionHero-upsell-logo">
                <span class="sectionHero-upsell-img">
                  <svg
                    width="192"
                    height="192"
                    viewBox="0 0 192 192"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>icon-domains .com</title>
                    <g fill="none" fill-rule="evenodd">
                      <circle fill="#FFE372" cx="96" cy="96" r="96"></circle>
                      <circle
                        fill="#E6A725"
                        cx="33.789"
                        cy="103.579"
                        r="7.579"
                      ></circle>
                      <path
                        d="M64.15 106.538c1.692 0 3.073-.466 4.142-1.397 1.07-.93 1.614-2.168 1.635-3.713h8.635c-.042 3.64-1.434 6.635-4.175 8.984-2.74 2.35-6.1 3.524-10.08 3.524-5.31 0-9.285-1.677-11.92-5.03-2.634-3.356-3.952-7.467-3.952-12.334v-.89c0-4.867 1.318-8.978 3.953-12.333 2.634-3.354 6.597-5.03 11.888-5.03 4.233 0 7.662 1.205 10.286 3.618 2.624 2.412 3.958 5.682 4 9.81h-8.635c-.02-1.673-.524-3.096-1.508-4.27-.985-1.175-2.42-1.762-4.302-1.762-2.688 0-4.44 1.015-5.254 3.047-.815 2.032-1.223 4.34-1.223 6.92v.89c0 2.645.41 4.968 1.224 6.968.815 2 2.576 3 5.285 3zm16.325-10.064v-.666c0-4.995 1.418-9.16 4.254-12.492 2.835-3.334 6.835-5 12-5 5.226 0 9.248 1.666 12.062 5 2.815 3.333 4.222 7.497 4.222 12.492v.666c0 4.995-1.407 9.154-4.222 12.476-2.814 3.323-6.814 4.984-12 4.984-5.206 0-9.227-1.66-12.063-4.984-2.837-3.322-4.255-7.48-4.255-12.476zm9.206-.666v.666c0 2.794.536 5.17 1.605 7.127 1.068 1.96 2.904 2.938 5.507 2.938 2.56 0 4.376-.98 5.445-2.937 1.07-1.956 1.603-4.332 1.603-7.126v-.666c0-2.73-.534-5.095-1.603-7.095-1.07-2-2.905-3-5.508-3-2.562 0-4.377 1-5.445 3-1.07 2-1.604 4.365-1.604 7.095zm41.914-10.064c-2.54 0-4.412 1.08-5.62 3.238V113.3h-9.205V78.95h8.634l.317 3.778c2.393-2.94 5.673-4.412 9.842-4.412 2.053 0 3.868.412 5.445 1.238 1.577.825 2.8 2.16 3.666 4 1.1-1.63 2.514-2.91 4.24-3.84 1.723-.933 3.75-1.398 6.078-1.398 3.345 0 6.017.984 8.017 2.952 2 1.968 3 5.355 3 10.16V113.3H156.8V91.395c0-2.286-.46-3.8-1.38-4.54-.92-.74-2.175-1.11-3.762-1.11-2.71 0-4.604 1.28-5.683 3.84V113.3H136.8V91.46c0-2.266-.46-3.785-1.38-4.557-.92-.772-2.196-1.16-3.826-1.16z"
                        fill="#E6A725"
                      ></path>
                    </g>
                  </svg>
                </span>
                <span class="sectionHero-upsell-imgShadow">
                  <svg
                    width="231"
                    height="192"
                    viewBox="0 0 231 192"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#76CEF1" fill-rule="evenodd" opacity=".305">
                      <circle cx="135" cy="96" r="96" opacity=".3"></circle>
                      <circle cx="115" cy="96" r="96" opacity=".3"></circle>
                      <circle cx="96" cy="96" r="96" opacity=".3"></circle>
                    </g>
                  </svg>{" "}
                </span>
              </span>
              <span class="sectionHero-upsell-text">
                Buy or sell domains and websites securely
              </span>
            </span>
            <div class="sectionHero-steps" data-component="steps-rotator">
              <span class="sectionHero-steps-decorator sectionHero-steps-decorator--above"></span>
              <ol class="sectionHero-upsell-list">
                <li
                  class="sectionHero-upsell-item is-disabled"
                  data-target="step-item"
                >
                  <svg
                    class="sectionHero-upsell-icon"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                  <span class="sectionHero-upsell-desc">
                    Buyer and seller agree on terms
                  </span>
                </li>
                <li
                  class="sectionHero-upsell-item is-disabled"
                  data-target="step-item"
                >
                  <svg
                    class="sectionHero-upsell-icon"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                  <span class="sectionHero-upsell-desc">
                    Buyer pays Escrow.com
                  </span>
                </li>
                <li
                  class="sectionHero-upsell-item is-disabled"
                  data-target="step-item"
                >
                  <svg
                    class="sectionHero-upsell-icon"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                  <span class="sectionHero-upsell-desc">
                    Seller transfers the domain name
                  </span>
                </li>
                <li
                  class="sectionHero-upsell-item is-disabled"
                  data-target="step-item"
                >
                  <svg
                    class="sectionHero-upsell-icon"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                  <span class="sectionHero-upsell-desc">
                    Buyer approves the domain name
                  </span>
                </li>
                <li
                  class="sectionHero-upsell-item is-disabled"
                  data-target="step-item"
                >
                  <svg
                    class="sectionHero-upsell-icon"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                  <span class="sectionHero-upsell-desc">
                    Escrow.com pays the seller
                  </span>
                </li>
              </ol>
              <span class="sectionHero-steps-decorator sectionHero-steps-decorator--below"></span>
            </div>
            <footer class="sectionHero-upsell-footer">
              <p class="sectionHero-upsell-note">
                Used to buy and sell the biggest domain names on the Internet
              </p>
              <ul class="sectionHero-upsell-products">
                <li
                  class="sectionHero-domainLogo sectionHero-domainLogo--snapchat tooltip"
                  data-tooltip="snapchat.com"
                >
                  <span class="is-accessibly-hidden">snapchat.com</span>
                </li>
                <li
                  class="sectionHero-domainLogo sectionHero-domainLogo--uber tooltip"
                  data-tooltip="uber.com"
                >
                  <span class="is-accessibly-hidden">uber.com</span>
                </li>
                <li
                  class="sectionHero-domainLogo sectionHero-domainLogo--twitter tooltip"
                  data-tooltip="twitter.com"
                >
                  <span class="is-accessibly-hidden">twitter.com</span>
                </li>
                <li
                  class="sectionHero-domainLogo sectionHero-domainLogo--gmail tooltip"
                  data-tooltip="gmail.com"
                >
                  <span class="is-accessibly-hidden">gmail.com</span>
                </li>
                <li
                  class="sectionHero-domainLogo sectionHero-domainLogo--wechat tooltip"
                  data-tooltip="wechat.com"
                >
                  <span class="is-accessibly-hidden">wechat.com</span>
                </li>
              </ul>
            </footer>
          </div>
          <div
            class="sectionHero-upsell carousel-item"
            data-target="carousel-item"
          >
            <span class="sectionHero-upsell-title">
              <span class="sectionHero-upsell-logo">
                <span class="sectionHero-upsell-img">
                  <svg
                    width="192"
                    height="192"
                    viewBox="0 0 192 192"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>icon-car</title>
                    <g fill="none" fill-rule="evenodd">
                      <circle fill="#8DD7F7" cx="96" cy="96" r="96"></circle>
                      <path
                        d="M65.723 90.816c0 4.836-5.723 22.852-5.723 22.852l76.672 1.797L129.922 89l-21.438 7.582s-42.76-10.602-42.76-5.766z"
                        fill="#FFF"
                        opacity=".596"
                      ></path>
                      <path
                        fill="#69CCF0"
                        d="M77.762 60.79L66 82.417l26.828 8.332 36.305-2.602-1.594-17.226L110.124 59"
                      ></path>
                      <path
                        d="M140.99 74.186h-1.89c-2.155.105-4.193 1.015-5.71 2.55-2.4-6.09-5.51-12.97-7.4-15.73-3.41-4.9-8.38-6.27-11.82-6.87-5.683-.87-11.432-1.24-17.18-1.11-5.738-.13-11.476.242-17.15 1.11-3.44.6-8.41 2-11.82 6.87-1.92 2.76-5 9.64-7.42 15.7-1.517-1.535-3.555-2.445-5.71-2.55H53c-2.748.032-4.968 2.252-5 5v3.62c.053 2.832 2.337 5.116 5.17 5.17h2.5c-2.834 8.898-4.278 18.18-4.28 27.52v14.29c0 2.818 2.282 5.104 5.1 5.11h6.61c2.822 0 5.11-2.288 5.11-5.11v-5.56c9.573.933 19.167 1.4 28.78 1.4s19.207-.467 28.78-1.4v5.56c0 2.822 2.288 5.11 5.11 5.11h6.61c2.822 0 5.11-2.288 5.11-5.11v-14.29c-.005-9.34-1.452-18.623-4.29-27.52h2.46c2.84-.032 5.145-2.302 5.22-5.14v-3.62c-.032-2.748-2.252-4.968-5-5zm-61 32.76h-9.1c-2.408 0-4.36-1.953-4.36-4.36v-2.4c-.01-1.356.61-2.64 1.682-3.47 1.07-.832 2.467-1.116 3.778-.77l9.1 2.39c2.19.496 3.646 2.576 3.36 4.804-.284 2.228-2.215 3.876-4.46 3.806zm-10.07-25.13c2.36-6 5.37-12.77 6.76-14.78.78-1.11 1.92-2 5-2.5 5.076-.77 10.208-1.105 15.34-1 5.133-.106 10.265.23 15.34 1 3.05.53 4.19 1.38 5 2.49 1.4 2 4.4 8.83 6.76 14.78-9.04.886-18.083 1.33-27.13 1.33s-18.07-.44-27.07-1.32zm57.5 20.75c.005 1.16-.452 2.273-1.27 3.095-.818.823-1.93 1.286-3.09 1.286h-9.07c-2.197.007-4.056-1.622-4.338-3.8-.282-2.18 1.1-4.228 3.228-4.78l9.11-2.42c1.31-.35 2.705-.07 3.777.76 1.072.826 1.698 2.105 1.693 3.46l-.04 2.4z"
                        fill="#43ACE8"
                        fill-rule="nonzero"
                      ></path>
                    </g>
                  </svg>
                </span>
                <span class="sectionHero-upsell-imgShadow">
                  <svg
                    width="231"
                    height="192"
                    viewBox="0 0 231 192"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#76CEF1" fill-rule="evenodd" opacity=".305">
                      <circle cx="135" cy="96" r="96" opacity=".3"></circle>
                      <circle cx="115" cy="96" r="96" opacity=".3"></circle>
                      <circle cx="96" cy="96" r="96" opacity=".3"></circle>
                    </g>
                  </svg>{" "}
                </span>
              </span>
              <span class="sectionHero-upsell-text">
                Buy or sell your vehicle safely and confidently
              </span>
            </span>
            <div class="sectionHero-steps" data-component="steps-rotator">
              <span class="sectionHero-steps-decorator sectionHero-steps-decorator--above"></span>
              <ol class="sectionHero-upsell-list">
                <li
                  class="sectionHero-upsell-item is-disabled"
                  data-target="step-item"
                >
                  <svg
                    class="sectionHero-upsell-icon"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                  <span class="sectionHero-upsell-desc">
                    Buyer and seller agree on terms
                  </span>
                </li>
                <li
                  class="sectionHero-upsell-item is-disabled"
                  data-target="step-item"
                >
                  <svg
                    class="sectionHero-upsell-icon"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                  <span class="sectionHero-upsell-desc">
                    Buyer pays Escrow.com
                  </span>
                </li>
                <li
                  class="sectionHero-upsell-item is-disabled"
                  data-target="step-item"
                >
                  <svg
                    class="sectionHero-upsell-icon"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                  <span class="sectionHero-upsell-desc">
                    Seller ships the vehicle
                  </span>
                </li>
                <li
                  class="sectionHero-upsell-item is-disabled"
                  data-target="step-item"
                >
                  <svg
                    class="sectionHero-upsell-icon"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                  <span class="sectionHero-upsell-desc">
                    Buyer inspects &amp; approves vehicle
                  </span>
                </li>
                <li
                  class="sectionHero-upsell-item is-disabled"
                  data-target="step-item"
                >
                  <svg
                    class="sectionHero-upsell-icon"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                  <span class="sectionHero-upsell-desc">
                    Escrow.com pays the seller
                  </span>
                </li>
              </ol>
              <span class="sectionHero-steps-decorator sectionHero-steps-decorator--below"></span>
            </div>
          </div>
          <div
            class="sectionHero-upsell carousel-item is-active"
            data-target="carousel-item"
          >
            <span class="sectionHero-upsell-title">
              <span class="sectionHero-upsell-logo">
                <span class="sectionHero-upsell-img">
                  <svg
                    width="192"
                    height="192"
                    viewBox="0 0 192 192"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>icon-merchandise</title>
                    <g fill="none" fill-rule="evenodd">
                      <circle fill="#91EC9D" cx="96" cy="96" r="96"></circle>
                      <g fill-rule="nonzero" fill="#0DB887">
                        <path d="M139.665 122.984V74.11l-37.61 21.716-4.71 2.72v48.875M96.043 47.42l-42.32 24.437 17.004 9.82 42.32-24.437M119.342 60.874L77.02 85.31l3.19 1.842 15.833 9.142 15.745-9.092 26.575-15.345M75.36 101.17l-.42-.948-.42.555-.314-.92-.554.487-.266-.92-.573.392-.326-.95-.498.487-.33-1.04-.472.635-.232-1.002-.528.664-.327-.993-.376.6-.203-.814v-13.42L52.423 74.11v48.874l42.32 24.437V98.548l-19.07-11.012v13.053"></path>
                      </g>
                      <path
                        fill="#D2F6D7"
                        d="M70.312 96.443l4.428 2.69.342-13.506 1.666-.99 41.17-24.496-3.92-2.246-42.043 24.212-1.643.946"
                      ></path>
                    </g>
                  </svg>
                </span>
                <span class="sectionHero-upsell-imgShadow">
                  <svg
                    width="231"
                    height="192"
                    viewBox="0 0 231 192"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#76CEF1" fill-rule="evenodd" opacity=".305">
                      <circle cx="135" cy="96" r="96" opacity=".3"></circle>
                      <circle cx="115" cy="96" r="96" opacity=".3"></circle>
                      <circle cx="96" cy="96" r="96" opacity=".3"></circle>
                    </g>
                  </svg>{" "}
                </span>
              </span>
              <span class="sectionHero-upsell-text">
                Complete protection for merchandise transactions
              </span>
            </span>
            <div class="sectionHero-steps" data-component="steps-rotator">
              <span class="sectionHero-steps-decorator sectionHero-steps-decorator--above"></span>
              <ol class="sectionHero-upsell-list">
                <li class="sectionHero-upsell-item" data-target="step-item">
                  <svg
                    class="sectionHero-upsell-icon"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                  <span class="sectionHero-upsell-desc">
                    Buyer and seller agree on terms
                  </span>
                </li>
                <li class="sectionHero-upsell-item" data-target="step-item">
                  <svg
                    class="sectionHero-upsell-icon"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                  <span class="sectionHero-upsell-desc">
                    Buyer pays Escrow.com
                  </span>
                </li>
                <li class="sectionHero-upsell-item" data-target="step-item">
                  <svg
                    class="sectionHero-upsell-icon"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                  <span class="sectionHero-upsell-desc">
                    Seller ships the merchandise
                  </span>
                </li>
                <li
                  class="sectionHero-upsell-item is-current"
                  data-target="step-item"
                >
                  <svg
                    class="sectionHero-upsell-icon"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                  <span class="sectionHero-upsell-desc">
                    Buyer inspects &amp; approves goods
                  </span>
                </li>
                <li
                  class="sectionHero-upsell-item is-disabled"
                  data-target="step-item"
                >
                  <svg
                    class="sectionHero-upsell-icon"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                  <span class="sectionHero-upsell-desc">
                    Escrow.com pays the seller
                  </span>
                </li>
              </ol>
              <span class="sectionHero-steps-decorator sectionHero-steps-decorator--below"></span>
            </div>
          </div>
          <div
            class="sectionHero-upsell carousel-item"
            data-target="carousel-item"
          >
            <span class="sectionHero-upsell-title">
              <span class="sectionHero-upsell-logo">
                <span class="sectionHero-upsell-img">
                  <svg
                    width="192"
                    height="192"
                    viewBox="0 0 192 192"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>icon-services</title>
                    <g fill="none" fill-rule="evenodd">
                      <circle fill="#6CEBE9" cx="96" cy="96" r="96"></circle>
                      <path
                        fill="#C3F6F5"
                        d="M137.124 108l12.125 7v14l-12.126 7L125 129v-14"
                      ></path>
                      <g fill-rule="nonzero" fill="#29ACB3">
                        <path d="M82.333 97.806v-2.87h2.89v-2.87h-5.78v-25.84h2.89V49H70.778v17.226h2.89v25.84h-5.78v2.87h2.89v2.87c-3.19 0-5.778 2.573-5.778 5.742v28.71c0 3.17 2.588 5.742 5.778 5.742h11.555c3.19 0 5.778-2.572 5.778-5.742v-28.71c0-3.17-2.587-5.742-5.777-5.742zM128.064 62.65l-8.82 8.764c-1.626 1.616-3.827 2.523-6.127 2.523s-4.503-.904-6.13-2.523c-1.626-1.617-2.536-3.804-2.536-6.09 0-2.285.91-4.476 2.537-6.09l8.823-8.764c-7.127-2.518-15.375-.962-21.078 4.705-7.895 7.847-7.895 20.574 0 28.42 1.494 1.484 3.16 2.685 4.935 3.606v42.187c0 4.757 3.88 8.613 8.666 8.613 4.787 0 8.667-3.856 8.667-8.613V87.84c2.297-.978 4.455-2.382 6.33-4.245 5.702-5.667 7.265-13.867 4.734-20.946zm-19.73 69.608c-1.598 0-2.89-1.283-2.89-2.87 0-1.59 1.292-2.872 2.89-2.872 1.597 0 2.888 1.283 2.888 2.87 0 1.59-1.29 2.872-2.89 2.872z"></path>
                      </g>
                    </g>
                  </svg>
                </span>
                <span class="sectionHero-upsell-imgShadow">
                  <svg
                    width="231"
                    height="192"
                    viewBox="0 0 231 192"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#76CEF1" fill-rule="evenodd" opacity=".305">
                      <circle cx="135" cy="96" r="96" opacity=".3"></circle>
                      <circle cx="115" cy="96" r="96" opacity=".3"></circle>
                      <circle cx="96" cy="96" r="96" opacity=".3"></circle>
                    </g>
                  </svg>{" "}
                </span>
              </span>
              <span class="sectionHero-upsell-text">
                Pay for services as you go with milestone payments
              </span>
            </span>
            <div class="sectionHero-steps" data-component="steps-rotator">
              <span class="sectionHero-steps-decorator sectionHero-steps-decorator--above"></span>
              <ol class="sectionHero-upsell-list">
                <li
                  class="sectionHero-upsell-item is-disabled"
                  data-target="step-item"
                >
                  <svg
                    class="sectionHero-upsell-icon"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                  <span class="sectionHero-upsell-desc">
                    Buyer and seller agree on schedule
                  </span>
                </li>
                <li
                  class="sectionHero-upsell-item is-disabled"
                  data-target="step-item"
                >
                  <svg
                    class="sectionHero-upsell-icon"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                  <span class="sectionHero-upsell-desc">
                    Buyer pays Escrow.com
                  </span>
                </li>
                <li
                  class="sectionHero-upsell-item is-disabled"
                  data-target="step-item"
                >
                  <svg
                    class="sectionHero-upsell-icon"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                  <span class="sectionHero-upsell-desc">
                    Seller provides the service
                  </span>
                </li>
                <li
                  class="sectionHero-upsell-item is-disabled"
                  data-target="step-item"
                >
                  <svg
                    class="sectionHero-upsell-icon"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                  <span class="sectionHero-upsell-desc">
                    Buyer approves the milestone
                  </span>
                </li>
                <li
                  class="sectionHero-upsell-item is-disabled"
                  data-target="step-item"
                >
                  <svg
                    class="sectionHero-upsell-icon"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                  <span class="sectionHero-upsell-desc">
                    Escrow.com pays the seller
                  </span>
                </li>
              </ol>
              <span class="sectionHero-steps-decorator sectionHero-steps-decorator--below"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
