import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rota de teste
app.get("/", (req, res) => {
  res.send("API da Plataforma de Transparência está rodando 🚀");
});

const PORT = process.env.PORT || 5173;
app.listen(PORT, () =>
  console.log(`Servidor rodando na porta ${PORT}`)
);