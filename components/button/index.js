export function Button({ text, href, type }) {
  return (
    <>
      <a href={href}>
        <button className={`button ${type}`}>{text}</button>
      </a>
      <style jsx>{`
        button {
          width: 100%;
          margin-bottom: 20px;
          padding: 12px;
          border-radius: 20px;
          border: none;
          font-weight: 500;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          border: 2px solid #2daee8;
        }
        button.primary {
          background-color: #2daee8;
          color: #fff;
        }
        button.secondary {
          background-color: #fff;
          color: #2daee8;
        }
      `}</style>
    </>
  );
}
