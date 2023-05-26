import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const redirect = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      redirect("/");
    }, 6000);
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>La página que estás buscando no existe :(</h1>
      <p>
        <em>redirigiendo...</em>
      </p>
    </div>
  );
};

export default NotFoundPage;
