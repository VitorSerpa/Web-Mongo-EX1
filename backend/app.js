import express from "express";
import { run } from "./src/database/connection.js";
import { get_carros } from "./src/controllers/carro_controller.js";

const app = express();

const HOST = "127.0.0.1";
const PORT = 3000;

app.use(express.json());

app.get("/carros", get_carros)

run()
  .then(() => {
    app.listen(PORT, HOST, () => {
      console.log(`Server rodando em http://${HOST}:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar no MongoDB:", error);
    process.exit(1);
  });