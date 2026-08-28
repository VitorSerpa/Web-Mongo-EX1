import express from "express";
import {
  run
} from "./src/database/connection.js";

import {get_carros, get_carro, post_carro, put_carro,delete_carro} from "./src/controllers/carro_controller.js";

import cors from "cors";

const app = express();

const HOST = "127.0.0.1";
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/carros", get_carros);
app.get("/carros/:id", get_carro);
app.post("/carros", post_carro);
app.put("/carros/:id", put_carro);
app.delete("/carros/:id", delete_carro);


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
