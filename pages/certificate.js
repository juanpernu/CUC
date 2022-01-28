import React from "react";
import Head from "next/head";
import Header from "../components/header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Certificate() {
  return (
    <div className="container">
      <Head>
        <title>Mi Argentina</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Certificado vacunación Covid-19" href="/" />
        <div className="image-container">
          <Carousel
            showArrows
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
          >
            <img src="/certif_1.png" />
            <img src="/certif_1.png" />
            <img src="/certif_1.png" />
          </Carousel>
        </div>
      </main>

      <style jsx global>{`
        ////////////// HACK PARA ROTAR LA PANTALLA //////////////
        @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: portrait) {
          html {
            transform: rotate(90deg);
            transform-origin: right top;
            width: 100vh;
            height: 100vw;
            overflow-x: hidden;
            position: absolute;
            top: 100%;
            right: 0;
          }
        }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #f9f9f9;
        }

        * {
          box-sizing: border-box;
        }

        p {
          margin: 0;
          padding: 0;
        }
        .image-container {
          max-width: 100%;
          padding-top: 60px;
        }
        .carousel .slider-wrapper {
          width: 100%;
          margin: 0 auto;
          display: block;
        }
        .carousel .slide img {
          width: 60%;
        }

        /* The animation code */
        @keyframes slide {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0%);
          }
        }

        /* The element to apply the animation to */
        .container {
          animation-name: slide;
          animation-duration: 0.6s;
        }
      `}</style>
    </div>
  );
}
