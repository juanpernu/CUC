import Head from 'next/head'
import Header from '../components/header'
import Card from '../components/card'

const covidItems = [
  {
    name: 'Nombre',
    data: 'Juan Manuel'
  },
  {
    name: 'Apellido',
    data: 'Pernumian'
  },
  {
    name: 'Documento',
    data: '35202127'
  },
  {
    name: 'Vehículo',
    data: 'A057RLS'
  },
  {
    name: 'Fecha de vencimiento',
    data: '26/04/2020',
  }
]

const cuilItems = [{
  name: 'Número de CUIL',
  data: '20-35202127-0',
}]

const licItems = [{
  name: 'Fecha de vencimiento',
  data: '12/07/2024',
}]

const dniItems = [{
  name: 'Fecha de vencimiento',
  data: '17/05/2025',
}]

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mi Argentina</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header
          title='Mi billetera'
        />
        <div className="card-wrapper">
          <Card
            title='Certificado Único Habilitante para Circulación - Covid-19'
            borderColor='yellow'
            items={covidItems}
            status='due'
            dd
            clickLink='https://www.google.com.ar'
          />
          <Card
            title='Constancia de CUIL'
            borderColor='green'
            items={cuilItems}
            cuil
          />
          <Card
            title='Licencia Nacional de Conducir'
            borderColor='green'
            items={licItems}
            status='ok'
            lic
          />
          <Card
            title='DNI: 35202127'
            borderColor='green'
            items={dniItems}
          />
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
      `}</style>
    </div>
  )
}
