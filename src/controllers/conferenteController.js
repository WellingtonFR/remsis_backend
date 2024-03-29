const moment = require("moment");
const connection = require("../database/connection");
const validation = require("../validations/conferenteValidation");

module.exports = {
  async index(req, res) {
    try {
      const data = await connection("conferentes")
        .select("*")
        .orderBy("nomeConferente");
      return res.json(data);
    } catch (err) {
      return res.status(400).send({ message: "Contate o administrador" });
    }
  },
  async create(req, res) {
    const { nomeConferente, idConferente } = req.body;
    const created_at = moment().format("MM DD YYYY, h:mm:ss a");

    await validation.conferenteSchema
      .validateAsync({
        idConferente: idConferente,
        nomeConferente: nomeConferente,
        created_at: created_at,
      })
      .catch((err) => {
        return res.status(400).send({ message: err.details[0].message });
      });

    try {
      const verificarConferente = await connection("conferentes")
        .select("nomeConferente")
        .where({ idConferente: idConferente });
      if (verificarConferente.length !== 0) {
        return res
          .status(400)
          .send({ message: "Conferente já está cadastrado" });
      }

      await connection("conferentes").insert({
        nomeConferente,
        idConferente,
        created_at,
      });
      return res.status(200).send({ message: "Criado com sucesso" });
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

    const verificarConferente = await connection("conferentes")
      .select("nomeConferente")
      .where({ id: id });
    if (verificarConferente.length === 0) {
      return res.status(400).send({ message: "Conferente não encontrado" });
    }

    await connection("conferentes")
      .where("id", id)
      .delete()
      .then(() => {
        return res.status(204).send({ message: "Excluído com sucesso" });
      })
      .catch((err) => {
        return res.status(400).send({ message: "Erro ao excluir conferente" });
      });
  },
  async findByIdConferente(req, res) {
    const { idConferente } = req.params;

    const validate = await validation.id
      .validateAsync({
        id: idConferente,
      })
      .catch((err) => {
        return res.status(400).send({ message: err.details[0].message });
      });

    await connection("conferentes")
      .select()
      .where("idConferente", idConferente)
      .then((data) => {
        return res.json(data);
      })
      .catch((err) => {
        return res.status(400).send("Conferente não encontrado");
      });
  },
};
