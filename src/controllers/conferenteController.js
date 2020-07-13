const connection = require("../database/connection");

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
    const { nomeConferente, idConferente, created_at } = req.body;

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
    await connection("conferentes")
      .select("*")
      .where("idConferente", idConferente)
      .then((data) => {
        return res.json(data);
      })
      .catch((err) => {
        return res.status(400).send("Conferente não encontrado");
      });
  },
};
