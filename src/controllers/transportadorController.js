const connection = require("../database/connection");

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
    //#region req.body
    const { nomeTransportador, placaVeiculo, created_at } = req.body;
    //#endregion

    try {
      const transferenciaId = await connection("transportadores").insert({
        nomeTransportador,
        placaVeiculo,
        created_at,
      });
      return res.status(200).send({ message: "Inserido com sucesso" });
    } catch (err) {
      return res.status(400).send({ message: "Contate o administrador" });
    }
  },
  async update(req, res) {
    //#region  req.body
    const { nomeTransportador, placaVeiculo, updated_at } = req.body;
    //#endregion

    try {
      const { id } = req.params;
      await connection("transportadores").where({ id: id }).update({
        nomeTransportador,
        placaVeiculo,
        updated_at,
      });
      return res.status(200).send({ message: "Alterado com sucesso" });
    } catch (err) {
      return res.status(400).send({ message: "Contate o administrador" });
    }
  },
  async delete(req, res) {
    const { id } = req.params;
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
        console.log(err);
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
    const { nomeTransportador, placaVeiculo } = req.body;

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
