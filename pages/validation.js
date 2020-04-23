import Head from 'next/head'
import Header from '../components/header'

export default function Validation() {
  return (
    <div className="container">
      <Head>
        <title>Mi Argentina | QR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header
          title='Certificado Único Habilitante para Circulación - Covid-19'
        />
        <p>Última actualización</p>
        <img width="165" className="footer-img" src="/qr.png" />
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #F9F9F9;
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
  )
}
