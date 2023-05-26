import "./Loader.css";
export default function Loader() {
  return (
    <div className="loader__container">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
}
