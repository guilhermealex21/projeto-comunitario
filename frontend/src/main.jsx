import React, { useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

function Main() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/dados") // ajuste a rota conforme seu backend
      .then((response) => response.json())
      .then((data) => setDados(data))
      .catch((error) =>
        console.error("Erro ao buscar dados do backend:", error)
      );
  }, []);

  return (
    <div>
      <h1>Plataforma de Transparência</h1>
      <pre>{JSON.stringify(dados, null, 2)}</pre>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
    <App/>
  </React.StrictMode>
);