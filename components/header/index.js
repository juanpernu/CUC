export default function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" /></svg>
        <p className="header-text">Mi billetera</p>
      </div>

      <style jsx>{`
        .header-container {
          background-color: #0994D7;
        }

        .arrow {
          transform: rotate(180deg);
          opacity: 0.6;
          margin: 10px 30px 10px 20px;
          width: 16px;
        }

        .header {
          color: white;
          height: 60px;
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .header-text {
          font-size: 18px;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  )
}
