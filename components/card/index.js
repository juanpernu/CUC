import React, { useState } from "react";
import { Button } from "../button";
import { getDate } from "../../utils";

export default function Card({ title, fill, link }) {
  const [show, setShow] = useState(false);

  return (
    <div className="card-container">
      <div onClick={() => setShow(!show)} className="header">
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="29"
            viewBox="0 0 24 24"
          >
            <path
              fill={fill}
              d="M0 3v18h24v-18h-24zm13 14h-10v-.417c-.004-1.112.044-1.747 1.324-2.043 1.403-.324 2.787-.613 2.122-1.841-1.973-3.637-.563-5.699 1.554-5.699 2.077 0 3.521 1.985 1.556 5.699-.647 1.22.688 1.51 2.121 1.841 1.284.297 1.328.936 1.323 2.057v.403zm8 0h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6v-2h6v2z"
            />
          </svg>
        </div>
        <p className="title">{title}</p>
        <div className="icon ar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
          >
            <path
              fill="#858585"
              d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
            />
          </svg>
        </div>
      </div>
      <div className={`content${show ? " show" : ""}`}>
        <div>
          <p className="text pb">{`Última actualización ${getDate()}`}</p>
          <img width="182" className="qr" src="/qr.png" />
          <p className="text pb">
            Dosis aplicadas : <span className="dose">2</span>
          </p>
        </div>
        <div className="block">
          <h3 className="title">Ministerio de Salud</h3>
          <Button href={link} text="Ver certificado" type="primary" />
          <Button href="#" text="Descargar certificado" type="secondary" />
        </div>
      </div>
      <div className={`content${show ? " show" : ""}`}>
        <p className="text al">
          Datos suministrados por la jurisdicción que aplicó la vacuna.
        </p>
      </div>
      <div className={`content${show ? " show" : ""}`}>
        <p className="text al">
          <a
            href="https://www.argentina.gob.ar/miargentina/servicios/vacuna_covid"
            target="_blank"
          >
            Conocé más sobre el certificado de vacunación COVID 19
          </a>
        </p>
      </div>

      <style jsx>{`
        .card-container {
          background-color: #fff;
          width: calc(100% - 20px);
          margin: 20px auto;
          border-radius: 3px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .header {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 18px 20px;
        }

        p.title {
          padding: 6px 0 10px;
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          line-height: 19px;
          color: #202020;
          width: 85%;
        }

        .icon {
          border-radius: 3px;
          margin-right: 20px;
        }

        .icon.ar {
          margin-right: 0;
        }

        .content {
          display: none;
          border-top: 1px solid #cdcdcd;
          padding: 15px;
        }

        .content.show {
          display: block;
        }

        .text {
          text-align: center;
          font-size: 14px;
          padding: 0;
          color: #878787;
        }

        .text.pb {
          padding-bottom: 18px;
        }

        .text.al {
          text-align: left;
        }

        .dose {
          color: #000;
          font-weight: 600;
        }

        .qr {
          margin: 0 auto 23px;
          display: block;
        }

        h3 {
          margin: 0 0 20px;
        }

        h3.title {
          letter-spacing: 0.05rem;
          font-weight: 500;
          color: #0391ca;
        }

        a {
          text-decoration: none;
          color: #0391ca;
        }
      `}</style>
    </div>
  );
}
