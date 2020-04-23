export default function Card(props) {
  const { title, items, status, borderColor, dd, cuil, lic } = props;
  const state = {
    due: 'Proximo a vencer',
    ok: 'Vigente'
  }

  function onClickHandler() {
    window.location.href = '/validation';
  }

  return (
    <div onClick={() => onClickHandler()} className={`card-container border-${borderColor}`}>
      <div className="card">
        <p className="card-title">{title}</p>
        <div className="card-content">
          {items.map(item => {
            return (
              <div className={`item-content ${cuil ? 'cuil' : ''}`}>
                <p className="item-name">{item.name}</p>
                <p className="item-data">{item.data}</p>
              </div>
            )
          })}
        </div>
        {(dd && status) || (lic && status) ? <p className={`card-status ${status}`}>{state[status]}</p> : null}
        {dd &&
        <div className="card-dj">
          <div className="card-dj-check">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='#0877c5' d="M23.334 11.96c-.713-.726-.872-1.829-.393-2.727.342-.64.366-1.401.064-2.062-.301-.66-.893-1.142-1.601-1.302-.991-.225-1.722-1.067-1.803-2.081-.059-.723-.451-1.378-1.062-1.77-.609-.393-1.367-.478-2.05-.229-.956.347-2.026.032-2.642-.776-.44-.576-1.124-.915-1.85-.915-.725 0-1.409.339-1.849.915-.613.809-1.683 1.124-2.639.777-.682-.248-1.44-.163-2.05.229-.61.392-1.003 1.047-1.061 1.77-.082 1.014-.812 1.857-1.803 2.081-.708.16-1.3.642-1.601 1.302s-.277 1.422.065 2.061c.479.897.32 2.001-.392 2.727-.509.517-.747 1.242-.644 1.96s.536 1.347 1.17 1.7c.888.495 1.352 1.51 1.144 2.505-.147.71.044 1.448.519 1.996.476.549 1.18.844 1.902.798 1.016-.063 1.953.54 2.317 1.489.259.678.82 1.195 1.517 1.399.695.204 1.447.072 2.031-.357.819-.603 1.936-.603 2.754 0 .584.43 1.336.562 2.031.357.697-.204 1.258-.722 1.518-1.399.363-.949 1.301-1.553 2.316-1.489.724.046 1.427-.249 1.902-.798.475-.548.667-1.286.519-1.996-.207-.995.256-2.01 1.145-2.505.633-.354 1.065-.982 1.169-1.7s-.135-1.443-.643-1.96zm-12.584 5.43l-4.5-4.364 1.857-1.857 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.642z" /></svg>
            <p>Válido para circular</p>
          </div>
          <p className="card-dj--text">Declaración Jurada para Circulación en Emergencia Sanitaria. Art. 6º Dec.297/2020</p>
        </div>}
        {
          lic &&
          <React.Fragment>
            <div className="card-lic-check">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='#0877c5' d="M23.334 11.96c-.713-.726-.872-1.829-.393-2.727.342-.64.366-1.401.064-2.062-.301-.66-.893-1.142-1.601-1.302-.991-.225-1.722-1.067-1.803-2.081-.059-.723-.451-1.378-1.062-1.77-.609-.393-1.367-.478-2.05-.229-.956.347-2.026.032-2.642-.776-.44-.576-1.124-.915-1.85-.915-.725 0-1.409.339-1.849.915-.613.809-1.683 1.124-2.639.777-.682-.248-1.44-.163-2.05.229-.61.392-1.003 1.047-1.061 1.77-.082 1.014-.812 1.857-1.803 2.081-.708.16-1.3.642-1.601 1.302s-.277 1.422.065 2.061c.479.897.32 2.001-.392 2.727-.509.517-.747 1.242-.644 1.96s.536 1.347 1.17 1.7c.888.495 1.352 1.51 1.144 2.505-.147.71.044 1.448.519 1.996.476.549 1.18.844 1.902.798 1.016-.063 1.953.54 2.317 1.489.259.678.82 1.195 1.517 1.399.695.204 1.447.072 2.031-.357.819-.603 1.936-.603 2.754 0 .584.43 1.336.562 2.031.357.697-.204 1.258-.722 1.518-1.399.363-.949 1.301-1.553 2.316-1.489.724.046 1.427-.249 1.902-.798.475-.548.667-1.286.519-1.996-.207-.995.256-2.01 1.145-2.505.633-.354 1.065-.982 1.169-1.7s-.135-1.443-.643-1.96zm-12.584 5.43l-4.5-4.364 1.857-1.857 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.642z" /></svg>
              <p>Válida para conducir</p>
            </div>
            <div className="card-lic">
              <p>Ministerio de Transporte</p>
            </div>
          </React.Fragment>
        }
        {
          cuil && 
          <div className="card-cuil">
            <p>ANSES</p>
          </div>
        }
      </div>

      <style jsx>{`
        .card-container {
          background-color: #fff;
          width: calc(100% - 20px);
          margin: 10px auto;
          border-radius: 5px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          border-top: 6px solid;
        }

        .card-container.border-green {
          border-color: #3BAE65;
        }

        .card-container.border-yellow {
          border-color: #F2AC4B;
        }

        .card-content {
          padding: 10px;
          display: grid;
          grid-template-columns: auto auto;
          grid-column-gap: 20px;
        }

        .card-title {
          padding: 10px;
          margin: 0;
          font-size: 15px;
          font-weight: 600;
          line-height: 19px;
          border-bottom: 1px solid #ddd;
        }

        .card-status {
          font-size: 14px;
          font-weight: 600;
          padding: 0 10px 15px;
          display: flex;
          flex-direction: row;
          align-items: center;
          border-bottom: 1px solid #ddd;
        }

        .card-status::before {
          content: '';
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: inline-block;
          margin-right: 5px;
        }

        .card-status.due::before {
          background-color: #F2AC4B;
        }

        .card-status.ok::before {
          background-color: #3BAE65;
        }

        .item-content {
          display: flex;
          flex-direction: column;
          font-size: 14px;
          margin-bottom: 10px;
        }

        .item-content.cuil {
          margin-bottom: 0;
        }

        .item-name {
          color: #666;
          margin-bottom: 3px;
        }

        .item-data {
          color: #111;
          font-weight: 600;
        }

        .card-dj {
          padding: 10px;
        }

        .card-dj-check,
        .card-lic-check {
          display: flex;
          flex-direction: row;
          align-items: center;
          text-transform: uppercase;
          margin: 10px 0;
        }

        .card-lic-check {
          margin: 10px;
        }

        .card-dj-check p,
        .card-lic-check p {
          font-weight: 600;
          margin-left: 5px;
        }

        .card-dj--text {
          font-size: 14px;
          color: #666;
          width:90%;
          margin: 10px 0;
        }

        .card-cuil,
        .card-lic {
          border-top: 1px solid #ddd;
        }

        .card-cuil p,
        .card-lic p {
          padding: 10px;
          font-size: 16px;
          color: #0994D7;
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}
