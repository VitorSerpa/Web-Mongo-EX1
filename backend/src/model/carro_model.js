import mongoose from "mongoose";

const carroSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: true,
  },
  motorizacao: {
    type: String,
    required: true,
  },
  ano: {
    type: Number,
    required: true,
  },
  km: {
    type: Number,
    required: true,
  },
  cambio: {
    type: String,
    required: true,
  },
  cor: {
    type: String,
    required: true,
  },
  combustivel: {
    type: String,
    required: true,
  },
});

const CarroSchema = mongoose.model("Carro", carroSchema);

export default CarroSchema;