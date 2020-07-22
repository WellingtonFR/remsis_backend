const moment = require("moment");
const connection = require("../database/connection");
const validation = require("../validations/transportadorValidation");

function primeiraLetraMaiuscula(texto) {
  var palavras = texto.toLowerCase().split(" ");
  for (var a = 0; a < words.length; a++) {
    var w = palavras[a];
    palavras[a] = w[0].toUpperCase() + w.slice(1);
  }
  return words.join(" ");
}

module.exports = {
  async index(req, res) {
    try {
      const data = await connection("transportadores")
        .select("*")
        .orderBy("nomeTransportador");
      return res.json(data);
    } catch (err) {
      res.status(400).send("Erro ao localizar os transportadores");
    }
  },
  async create(req, res) {
    const { nomeTransportador, placaVeiculo } = req.body;
    const created_at = moment().format("MM DD YYYY, h:mm:ss a");
    const _placaVeiculo = placaVeiculo.toUpperCase().trim();
    const _nomeTransportador = primeiraLetraMaiuscula(nomeTransportador).trim();

    await validation.transportadorSchema
      .validateAsync({
        nomeTransportador: _nomeTransportador,
        placaVeiculo: _placaVeiculo,
        created_at: created_at,
      })
      .catch((err) => {
        return res.status(400).send({ message: err.details[0].message });
      });

    const verificaTransportador = await connection("transportadores")
      .select("nomeTransportador")
      .where({ nomeTransportador: _nomeTransportador });
    if (verificaTransportador.length !== 0) {
      return res
        .status(400)
        .send({ message: "Transportador já está cadastrado" });
    }

    try {
      const transferenciaId = await connection("transportadores").insert({
        nomeTransportador: _nomeTransportador,
        placaVeiculo: _placaVeiculo,
        created_at,
      });
      return res.status(200).send({ message: "Inserido com sucesso" });
    } catch (err) {
      return res.status(400).send({ message: "Contate o administrador" });
    }
  },
  async update(req, res) {
    const { nomeTransportador, placaVeiculo } = req.body;
    const updated_at = moment().format("MM DD YYYY, h:mm:ss a");
    const _placaVeiculo = placaVeiculo.toUpperCase().trim();
    const _nomeTransportador = primeiraLetraMaiuscula(nomeTransportador).trim();

    await validation.transportadorSchema
      .validateAsync({
        nomeTransportador: _nomeTransportador,
        placaVeiculo: _placaVeiculo,
        updated_at: updated_at,
      })
      .catch((err) => {
        return res.status(400).send({ message: err.details[0].message });
      });

    try {
      const { id } = req.params;
      await connection("transportadores").where({ id: id }).update({
        nomeTransportador: _nomeTransportador,
        placaVeiculo: _placaVeiculo,
        updated_at,
      });
      return res.status(200).send({ message: "Alterado com sucesso" });
    } catch (err) {
      return res.status(400).send({ message: "Contate o administrador" });
    }
  },
  async delete(req, res) {
    const { id } = req.params;

    await validation.id
      .validateAsync({
        id: id,
      })
      .catch((err) => {
        return res.status(400).send({ message: err.details[0].message });
      });

    const verificarTransportador = await connection("transportadores")
      .select("nomeTransportador")
      .where({ id: id });

    if (verificarTransportador.length === 0) {
      return res.status(400).send({ message: "Tranportador não encontrado" });
    }

    await connection("transportadores")
      .where("id", id)
      .delete()
      .then(() => {
        return res.status(204).send("Excluído com sucesso");
      })
      .catch((err) => {
        return res.status(400).send({ message: "Contate o administrador" });
      });
  },
  async findById(req, res) {
    const { id } = req.params;
    await connection("transportadores")
      .select("*")
      .where("id", id)
      .then((data) => {
        return res.json(data);
      })
      .catch((err) => {
        return res
          .status(400)
          .send({ message: "Erro ao localizar transportador" });
      });
  },
  async findByName(req, res) {
    const { nomeTransportador } = req.params;
    await connection("transportadores")
      .select("*")
      .where("nomeTransportador", nomeTransportador)
      .then((data) => {
        return res.json(data);
      })
      .catch((err) => {
        return res
          .status(400)
          .send({ message: "Erro ao localizar transportador" });
      });
  },
  async find(req, res) {
    const { nomeTransportador } = req.body;

    await connection("transportadores")
      .select("*")
      .where("nomeTransportador", nomeTransportador)
      .then((data) => {
        return res.json(data);
      })
      .catch((err) => {
        return res
          .status(400)
          .send({ message: "Erro ao localizar transportador" });
      });
  },
};
