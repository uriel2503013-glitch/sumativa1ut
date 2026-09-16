import express from "express";
import cors from "cors";
const app = express();

const puerto = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Este es el back end de ElectroGame Service");
});

app.get("/api/informacion", (req, res) => {
  res.json({
    componente: "API REST",
    tecnologia: "Node.js, Express y TypeScript",
    estudiante: "Uriel Antonio González Zurita",
    matricula: "25308160"
  });
});

app.listen(puerto, () => {
  console.log(`Servidor activo en http://localhost:${puerto}`);
});