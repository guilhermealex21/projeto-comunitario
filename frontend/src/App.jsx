import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Bem-vindo à Plataforma de Transparência</h1>;
}
function Dashboard() {
  return <h2>Dashboard Administrativo</h2>;
}
function Login() {
  return <h2>Login</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}