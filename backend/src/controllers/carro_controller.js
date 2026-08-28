import CarroSchema from "../model/carro_model.js";


export const get_carros = async (req, res) => {

  try {

    const carros = await CarroSchema.find();

    res.send(carros);

  } catch (error) {

    res.status(500).json({
      message: "Erro ao listar carros",
      error: error.message,
    });

  }

};


export const get_carro = async (req, res) => {

  try {

    const { id } = req.params;

    const carro = await CarroSchema.findById(id);

    if (!carro) {

      return res.status(404).json({
        message: "Carro não encontrado",
      });

    }

    res.json(carro);

  } catch (error) {

    res.status(500).json({
      message: "Erro ao buscar carro",
      error: error.message,
    });

  }

};


export const post_carro = async (req, res) => {

  try {

    const {
      nome,
      marca,
      motorizacao,
      ano,
      km,
      cambio,
      cor,
      combustivel,
    } = req.body;


    const carro = await CarroSchema.create({

      nome,
      marca,
      motorizacao,
      ano,
      km,
      cambio,
      cor,
      combustivel,

    });


    res.status(201).json(carro);

  } catch (error) {

    res.status(500).json({

      message: "Erro ao criar carro",

      error: error.message,

    });

  }

};


export const put_carro = async (req, res) => {

  try {

    const { id } = req.params;


    const {
      nome,
      marca,
      motorizacao,
      ano,
      km,
      cambio,
      cor,
      combustivel,
    } = req.body;


    const carro = await CarroSchema.findByIdAndUpdate(

      id,

      {
        nome,
        marca,
        motorizacao,
        ano,
        km,
        cambio,
        cor,
        combustivel,
      },

      {
        new: true,
        runValidators: true,
      }

    );


    if (!carro) {

      return res.status(404).json({
        message: "Carro não encontrado",
      });

    }


    res.json(carro);

  } catch (error) {

    res.status(500).json({

      message: "Erro ao atualizar carro",

      error: error.message,

    });

  }

};


export const delete_carro = async (req, res) => {

  try {

    const { id } = req.params;


    const carro = await CarroSchema.findByIdAndDelete(id);


    if (!carro) {

      return res.status(404).json({
        message: "Carro não encontrado",
      });

    }


    res.json({

      message: "Carro deletado com sucesso",

      carro,

    });

  } catch (error) {

    res.status(500).json({

      message: "Erro ao deletar carro",

      error: error.message,

    });

  }

};
