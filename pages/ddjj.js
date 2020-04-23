import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Ddjj() {
  const router = useRouter()
  const { dni } = router.query;

  return (
    <div className="container">
      <Head>
        <title>Formulario DDJJ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className="ddjj-header">
          <img src="/logo.svg" />
        </header>
        <section className="ddjj-content">
          <div className="ddjj-container">
            <h1 className="ddjj-title">
              Declaración Jurada para circular de acuerdo a normativa vigente
            </h1>
            <hr />
            <div className="alert alert-success">
              <p className="alert-text">Ciudadano habilitado para circular</p>
              <p className="alert-text--item">DNI</p>
              <p className="alert-text--item_text">{dni}</p>
              <p className="alert-text--item">Motivo circulación:</p>
              <p className="alert-text--item_text">Personas que deban asistir a otras con discapacidad; familiares que necesiten asistencia; a personas mayores; a niños, a niñas y a adolescentes</p>
            </div>
          </div>
        </section>
        <footer className="main-footer">
          <section className="footer-content">
            <div className="footer-content--item">
              <img width="165" className="footer-img" src="/logo_argentina_unida.svg" />
              <a className="link" href="https://creativecommons.org/licenses/by/4.0/deed.es" target="_blank">
                Los contenidos de Argentina.gob.ar están licenciados bajo Creative Commons Atribución 4.0 Internacional
              </a>
            </div>
            <div className="footer-content--item">
              <a className="link-bigger" href="https://www.argentina.gob.ar/turnos">Turnos</a>
              <a className="link-bigger" href="https://form-ddjj.argentina.gob.ar/organismos">Organismos del Estado</a>
              <a className="link-bigger" href="http://mapadelestado.jefatura.gob.ar/">Mapa del Estado</a>
            </div>
            <div className="footer-content--item">
              <a className="link-bigger" href="https://www.argentina.gob.ar/normativa">Leyes argentinas</a>
              <a className="link-bigger" href="https://www.argentina.gob.ar/acerca">Acerca de este sitio</a>
              <a className="link-bigger" href="https://www.argentina.gob.ar/terminos-y-condiciones">Términos y condiciones</a>
            </div>
          </section>
        </footer>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
          background: #F2F3F4;
          color: #333;
          width: 100%;
        }

        * {
          box-sizing: border-box;
        }

        hr {
          border-top: 1px solid #DEE2E6;
          margin: 30px 0;
        }

        .ddjj-header {
          display: flex;
          align-content: center;
          height: 74px;
          width: 100%;
          background-color: #fff;
          box-shadow: 0 2px 2px rgba(0,0,0,0.2);
        }

        .ddjj-header img {
          padding: 14px 0 14px;
          margin: 0 30px;
          width: 160px;
          overflow: hidden;
        }

        .ddjj-content,
        .footer-content {
          padding: 40px 0;
        }

        .ddjj-container {
          padding: 0 30px;
          margin: 0 auto;
        }

        .ddjj-title {
          margin-top: 10px;
          line-height: 1.1;
          font-size: 28px;
        }

        .alert.alert-success {
          background: #f2faf3;
          border-color: #2e7d33;
        }

        .alert-success {
          color: #444;
        }

        .alert {
          padding: 15px;
          margin-bottom: 20px;
          border: 1px solid transparent;
          border-radius: 4px;
          border-width: 2px;
          font-weight: 400;
        }

        .alert-text {
          font-size: 22px;
          font-weight: 600;
          margin: .5em 0;
          text-align: center;
        }

        .alert-text--item {
          text-align: right;
          padding: 0 15px;
          font-weight: 700;
          margin: 0;
        }

        .alert-text--item_text {
          margin: 0 0 15px 0;
          line-height: 1.42857143;
        }

        .alert-text--item_text:last-of-type {
          margin: 0 0 30px 0;
        }
        .main-footer {
          background: #fff;
          padding: 60px 0 32px;
        }
        .footer-img {
          margin-bottom: 20px;
          max-width: 300px;
          display: block;
        }
        .footer-content--item {
          padding: 50px 20px;
        }
        .link,
        .link-bigger {
          color: #0072bb;
          font-weight: 500;
          text-decoration: underline;
        }
        .link {
          font-size: 85%;
        }
        .link-bigger {
          display: block;
          font-size: 16px;
          padding: 6px 0;
        }
      `}</style>
    </div>
  )
}
