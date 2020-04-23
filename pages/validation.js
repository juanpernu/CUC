import Head from 'next/head'
import Header from '../components/header'

export default function Validation() {
  const d = new Date();
  const h = d.getHours() - 2;
  const m = d.getMinutes();
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
  const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

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
        <div className="qr-container">
          <p>Última actualización {`${da}/${mo}/${ye} ${h}:${m}hs`}</p>
          <img width="300" className="footer-img" src="/qr.png" />
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
        .qr-container {
          padding-top: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .qr-container p {
          color: #777;
          font-size: 14px;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  )
}
