const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    try {
      const data = await connection("filiais")
        .select("*")
        .orderBy("numeroFilial");
      return res.json(data);
    } catch (err) {
      return res.status(400).send("Não foi encontrada nenhuma filial");
    }
  },
  async create(req, res) {
    const {
      numeroFilial,
      cidade,
      estado,
      endereco,
      numeroEndereco,
      complemento,
      nomeFantasia,
      created_at,
    } = req.body;

    try {
      const verificarFilial = await connection("filiais")
        .select("numeroFilial")
        .where({ numeroFilial: numeroFilial });

      if (verificarFilial.length !== 0) {
        return res.status(400).send({ message: "Filial já está cadastrada" });
      }

      await connection("filiais").insert({
        numeroFilial,
        cidade,
        estado,
        endereco,
        numeroEndereco,
        complemento,
        nomeFantasia,
        created_at,
      });
      return res.status(200).send("Criado com sucesso");
    } catch (err) {
      return res.status(400).send("Contate o administrador");
    }
  },
  async update(req, res) {
    const {
      numeroFilial,
      cidade,
      estado,
      endereco,
      numeroEndereco,
      complemento,
      nomeFantasia,
      updated_at,
    } = req.body;

    try {
      const { id } = req.params;
      await connection("filiais").where({ id: id }).update({
        numeroFilial,
        cidade,
        estado,
        endereco,
        numeroEndereco,
        complemento,
        nomeFantasia,
        updated_at,
      });
      return res.status(200).send("Atualizado com sucesso");
    } catch (err) {
      return res.status(400).send("Erro ao atualizar os dados");
    }
  },
  async delete(req, res) {
    const { id } = req.params;
    await connection("filiais")
      .where({ id: id })
      .delete()
      .then(() => {
        return res.status(204).send("Excluído com sucesso");
      })
      .catch((err) => {
        return res.status(400).send({ message: "Erro ao excluir filial" });
      });
  },
  async findById(req, res) {
    const { id } = req.params;
    await connection("filiais")
      .select("*")
      .where({ id: id })
      .then((data) => {
        return res.json(data);
      })
      .catch((err) => {
        return res.status(400).send("Filial não encontrada");
      });
  },
  async findByNumeroFilial(req, res) {
    const { numeroFilial } = req.params;
    await connection("filiais")
      .select(
        "numeroFilial",
        "endereco",
        "numeroEndereco",
        "complemento",
        "nomeFantasia"
      )
      .where({ numeroFilial: numeroFilial })
      .then((data) => {
        console.log(data);
        return res.json(data);
      })
      .catch((err) => {
        return res.status(400).send("Filial não encontrada");
      });
  },
};
