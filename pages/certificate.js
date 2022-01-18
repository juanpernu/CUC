import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Card from "../components/card";

const covidItems = [
  {
    name: "Nombre",
    data: "Juan Manuel",
  },
  {
    name: "Apellido",
    data: "Pernumian",
  },
  {
    name: "Documento",
    data: "35202127",
  },
  {
    name: "Vehículo",
    data: "A057RLS",
  },
  {
    name: "Fecha de vencimiento",
    data: "26/04/2020",
  },
];

const cuilItems = [
  {
    name: "Número de CUIL",
    data: "20-35202127-0",
  },
];

const licItems = [
  {
    name: "Fecha de vencimiento",
    data: "12/07/2024",
  },
];

const dniItems = [
  {
    name: "Fecha de vencimiento",
    data: "17/05/2025",
  },
];

export default function Certificate() {
  ////////////// HACK PARA ROTAR LA PANTALLA //////////////
  // @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: portrait) {
  //   html {
  //     transform: rotate(-90deg);
  //     transform-origin: left top;
  //     width: 100vh;
  //     height: 100vw;
  //     overflow-x: hidden;
  //     position: absolute;
  //     top: 100%;
  //     left: 0;
  //   }
  // }

  return (
    <div className="container">
      <Head>
        <title>Mi Argentina</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Certificado vacunación Covid-19" href="/" />
        <div className="card-wrapper">
          <p>CERTIFICADO</p>
        </div>
      </main>

      <style jsx global>{`
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
        .card-wrapper {
          padding-top: 58px;
        }
      `}</style>
    </div>
  );
}
