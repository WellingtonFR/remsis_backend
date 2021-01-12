const moment = require("moment");
const connection = require("../database/connection");
const validation = require("../validations/transferenciaValidation");

module.exports = {
  async index(req, res) {
    try {
      const data = await connection("transferencias")
        .select("*")
        .orderBy("created_at", "desc");
      return res.json(data);
    } catch (err) {
      res.status(400).send("Erro ao localizar as transferências");
    }
  },
  async create(req, res) {
    //#region req.body
    const {
      dataAtual,
      numeroControle,
      unidadeDestino,
      nomeUnidadeDestino,
      enderecoUnidadeDestino,
      transportador,
      placaVeiculo,
      conferente,
      //
      filialOrigem_1,
      notaFiscal_1,
      tipoOperacao_1,
      codigo_1,
      descricaoProduto_1,
      quantidadeProduto_1,
      observacao_1,
      //
      filialOrigem_2,
      notaFiscal_2,
      tipoOperacao_2,
      codigo_2,
      descricaoProduto_2,
      quantidadeProduto_2,
      observacao_2,
      //
      filialOrigem_3,
      notaFiscal_3,
      tipoOperacao_3,
      codigo_3,
      descricaoProduto_3,
      quantidadeProduto_3,
      observacao_3,
      //
      filialOrigem_4,
      notaFiscal_4,
      tipoOperacao_4,
      codigo_4,
      descricaoProduto_4,
      quantidadeProduto_4,
      observacao_4,
      //
      filialOrigem_5,
      notaFiscal_5,
      tipoOperacao_5,
      codigo_5,
      descricaoProduto_5,
      quantidadeProduto_5,
      observacao_5,
      //
      filialOrigem_6,
      notaFiscal_6,
      tipoOperacao_6,
      codigo_6,
      descricaoProduto_6,
      quantidadeProduto_6,
      observacao_6,
      //
      filialOrigem_7,
      notaFiscal_7,
      tipoOperacao_7,
      codigo_7,
      descricaoProduto_7,
      quantidadeProduto_7,
      observacao_7,
      //
      filialOrigem_8,
      notaFiscal_8,
      tipoOperacao_8,
      codigo_8,
      descricaoProduto_8,
      quantidadeProduto_8,
      observacao_8,
      //
      filialOrigem_9,
      notaFiscal_9,
      tipoOperacao_9,
      codigo_9,
      descricaoProduto_9,
      quantidadeProduto_9,
      observacao_9,
      //
      filialOrigem_10,
      notaFiscal_10,
      tipoOperacao_10,
      codigo_10,
      descricaoProduto_10,
      quantidadeProduto_10,
      observacao_10,
      //
      filialOrigem_11,
      notaFiscal_11,
      tipoOperacao_11,
      codigo_11,
      descricaoProduto_11,
      quantidadeProduto_11,
      observacao_11,
      //
      filialOrigem_12,
      notaFiscal_12,
      tipoOperacao_12,
      codigo_12,
      descricaoProduto_12,
      quantidadeProduto_12,
      observacao_12,
      //
      filialOrigem_13,
      notaFiscal_13,
      tipoOperacao_13,
      codigo_13,
      descricaoProduto_13,
      quantidadeProduto_13,
      observacao_13,
      //
      filialOrigem_14,
      notaFiscal_14,
      tipoOperacao_14,
      codigo_14,
      descricaoProduto_14,
      quantidadeProduto_14,
      observacao_14,
      //
      filialOrigem_15,
      notaFiscal_15,
      tipoOperacao_15,
      codigo_15,
      descricaoProduto_15,
      quantidadeProduto_15,
      observacao_15,
      //
      filialOrigem_16,
      notaFiscal_16,
      tipoOperacao_16,
      codigo_16,
      descricaoProduto_16,
      quantidadeProduto_16,
      observacao_16,
      //
      filialOrigem_17,
      notaFiscal_17,
      tipoOperacao_17,
      codigo_17,
      descricaoProduto_17,
      quantidadeProduto_17,
      observacao_17,
      //
      filialOrigem_18,
      notaFiscal_18,
      tipoOperacao_18,
      codigo_18,
      descricaoProduto_18,
      quantidadeProduto_18,
      observacao_18,
      //
      filialOrigem_19,
      notaFiscal_19,
      tipoOperacao_19,
      codigo_19,
      descricaoProduto_19,
      quantidadeProduto_19,
      observacao_19,
      //
      filialOrigem_20,
      notaFiscal_20,
      tipoOperacao_20,
      codigo_20,
      descricaoProduto_20,
      quantidadeProduto_20,
      observacao_20,
    } = req.body;
    //#endregion
    const created_at = moment().format("MM DD YYYY, h:mm:ss a");

    try {
      const transferenciaId = await connection("transferencias").insert({
        dataAtual,
        numeroControle,
        unidadeDestino,
        nomeUnidadeDestino,
        enderecoUnidadeDestino,
        transportador,
        placaVeiculo,
        conferente,
        created_at,
        //
        filialOrigem_1,
        notaFiscal_1,
        tipoOperacao_1,
        codigo_1,
        descricaoProduto_1,
        quantidadeProduto_1,
        observacao_1,
        //
        filialOrigem_2,
        notaFiscal_2,
        tipoOperacao_2,
        codigo_2,
        descricaoProduto_2,
        quantidadeProduto_2,
        observacao_2,
        //
        filialOrigem_3,
        notaFiscal_3,
        tipoOperacao_3,
        codigo_3,
        descricaoProduto_3,
        quantidadeProduto_3,
        observacao_3,
        //
        filialOrigem_4,
        notaFiscal_4,
        tipoOperacao_4,
        codigo_4,
        descricaoProduto_4,
        quantidadeProduto_4,
        observacao_4,
        //
        filialOrigem_5,
        notaFiscal_5,
        tipoOperacao_5,
        codigo_5,
        descricaoProduto_5,
        quantidadeProduto_5,
        observacao_5,
        //
        filialOrigem_6,
        notaFiscal_6,
        tipoOperacao_6,
        codigo_6,
        descricaoProduto_6,
        quantidadeProduto_6,
        observacao_6,
        //
        filialOrigem_7,
        notaFiscal_7,
        tipoOperacao_7,
        codigo_7,
        descricaoProduto_7,
        quantidadeProduto_7,
        observacao_7,
        //
        filialOrigem_8,
        notaFiscal_8,
        tipoOperacao_8,
        codigo_8,
        descricaoProduto_8,
        quantidadeProduto_8,
        observacao_8,
        //
        filialOrigem_9,
        notaFiscal_9,
        tipoOperacao_9,
        codigo_9,
        descricaoProduto_9,
        quantidadeProduto_9,
        observacao_9,
        //
        filialOrigem_10,
        notaFiscal_10,
        tipoOperacao_10,
        codigo_10,
        descricaoProduto_10,
        quantidadeProduto_10,
        observacao_10,
        //
        filialOrigem_11,
        notaFiscal_11,
        tipoOperacao_11,
        codigo_11,
        descricaoProduto_11,
        quantidadeProduto_11,
        observacao_11,
        //
        filialOrigem_12,
        notaFiscal_12,
        tipoOperacao_12,
        codigo_12,
        descricaoProduto_12,
        quantidadeProduto_12,
        observacao_12,
        //
        filialOrigem_13,
        notaFiscal_13,
        tipoOperacao_13,
        codigo_13,
        descricaoProduto_13,
        quantidadeProduto_13,
        observacao_13,
        //
        filialOrigem_14,
        notaFiscal_14,
        tipoOperacao_14,
        codigo_14,
        descricaoProduto_14,
        quantidadeProduto_14,
        observacao_14,
        //
        filialOrigem_15,
        notaFiscal_15,
        tipoOperacao_15,
        codigo_15,
        descricaoProduto_15,
        quantidadeProduto_15,
        observacao_15,
        //
        filialOrigem_16,
        notaFiscal_16,
        tipoOperacao_16,
        codigo_16,
        descricaoProduto_16,
        quantidadeProduto_16,
        observacao_16,
        //
        filialOrigem_17,
        notaFiscal_17,
        tipoOperacao_17,
        codigo_17,
        descricaoProduto_17,
        quantidadeProduto_17,
        observacao_17,
        //
        filialOrigem_18,
        notaFiscal_18,
        tipoOperacao_18,
        codigo_18,
        descricaoProduto_18,
        quantidadeProduto_18,
        observacao_18,
        //
        filialOrigem_19,
        notaFiscal_19,
        tipoOperacao_19,
        codigo_19,
        descricaoProduto_19,
        quantidadeProduto_19,
        observacao_19,
        //
        filialOrigem_20,
        notaFiscal_20,
        tipoOperacao_20,
        codigo_20,
        descricaoProduto_20,
        quantidadeProduto_20,
        observacao_20,
      });
      return res
        .status(200)
        .send({ message: "Inserido com sucesso", id: transferenciaId });
    } catch (err) {
      return res.status(400).send("Contate o administrador");
    }
  },
  async update(req, res) {
    //#region  req.body
    const {
      dataAtual,
      numeroControle,
      unidadeDestino,
      nomeUnidadeDestino,
      enderecoUnidadeDestino,
      transportador,
      placaVeiculo,
      conferente,
      //
      filialOrigem_1,
      notaFiscal_1,
      tipoOperacao_1,
      codigo_1,
      descricaoProduto_1,
      quantidadeProduto_1,
      observacao_1,
      //
      filialOrigem_2,
      notaFiscal_2,
      tipoOperacao_2,
      codigo_2,
      descricaoProduto_2,
      quantidadeProduto_2,
      observacao_2,
      //
      filialOrigem_3,
      notaFiscal_3,
      tipoOperacao_3,
      codigo_3,
      descricaoProduto_3,
      quantidadeProduto_3,
      observacao_3,
      //
      filialOrigem_4,
      notaFiscal_4,
      tipoOperacao_4,
      codigo_4,
      descricaoProduto_4,
      quantidadeProduto_4,
      observacao_4,
      //
      filialOrigem_5,
      notaFiscal_5,
      tipoOperacao_5,
      codigo_5,
      descricaoProduto_5,
      quantidadeProduto_5,
      observacao_5,
      //
      filialOrigem_6,
      notaFiscal_6,
      tipoOperacao_6,
      codigo_6,
      descricaoProduto_6,
      quantidadeProduto_6,
      observacao_6,
      //
      filialOrigem_7,
      notaFiscal_7,
      tipoOperacao_7,
      codigo_7,
      descricaoProduto_7,
      quantidadeProduto_7,
      observacao_7,
      //
      filialOrigem_8,
      notaFiscal_8,
      tipoOperacao_8,
      codigo_8,
      descricaoProduto_8,
      quantidadeProduto_8,
      observacao_8,
      //
      filialOrigem_9,
      notaFiscal_9,
      tipoOperacao_9,
      codigo_9,
      descricaoProduto_9,
      quantidadeProduto_9,
      observacao_9,
      //
      filialOrigem_10,
      notaFiscal_10,
      tipoOperacao_10,
      codigo_10,
      descricaoProduto_10,
      quantidadeProduto_10,
      observacao_10,
      //
      filialOrigem_11,
      notaFiscal_11,
      tipoOperacao_11,
      codigo_11,
      descricaoProduto_11,
      quantidadeProduto_11,
      observacao_11,
      //
      filialOrigem_12,
      notaFiscal_12,
      tipoOperacao_12,
      codigo_12,
      descricaoProduto_12,
      quantidadeProduto_12,
      observacao_12,
      //
      filialOrigem_13,
      notaFiscal_13,
      tipoOperacao_13,
      codigo_13,
      descricaoProduto_13,
      quantidadeProduto_13,
      observacao_13,
      //
      filialOrigem_14,
      notaFiscal_14,
      tipoOperacao_14,
      codigo_14,
      descricaoProduto_14,
      quantidadeProduto_14,
      observacao_14,
      //
      filialOrigem_15,
      notaFiscal_15,
      tipoOperacao_15,
      codigo_15,
      descricaoProduto_15,
      quantidadeProduto_15,
      observacao_15,
      //
      filialOrigem_16,
      notaFiscal_16,
      tipoOperacao_16,
      codigo_16,
      descricaoProduto_16,
      quantidadeProduto_16,
      observacao_16,
      //
      filialOrigem_17,
      notaFiscal_17,
      tipoOperacao_17,
      codigo_17,
      descricaoProduto_17,
      quantidadeProduto_17,
      observacao_17,
      //
      filialOrigem_18,
      notaFiscal_18,
      tipoOperacao_18,
      codigo_18,
      descricaoProduto_18,
      quantidadeProduto_18,
      observacao_18,
      //
      filialOrigem_19,
      notaFiscal_19,
      tipoOperacao_19,
      codigo_19,
      descricaoProduto_19,
      quantidadeProduto_19,
      observacao_19,
      //
      filialOrigem_20,
      notaFiscal_20,
      tipoOperacao_20,
      codigo_20,
      descricaoProduto_20,
      quantidadeProduto_20,
      observacao_20,
    } = req.body;
    //#endregion
    const updated_at = moment().format("MM DD YYYY, h:mm:ss a");
    try {
      const { id } = req.params;

      await validation.id
        .validateAsync({
          id: id,
        })
        .catch((err) => {
          return res.status(400).send({ message: err.details[0].message });
        });

      await connection("transferencias").where({ id: id }).update({
        dataAtual,
        numeroControle,
        unidadeDestino,
        nomeUnidadeDestino,
        enderecoUnidadeDestino,
        transportador,
        placaVeiculo,
        conferente,
        updated_at,
        //
        filialOrigem_1,
        notaFiscal_1,
        tipoOperacao_1,
        codigo_1,
        descricaoProduto_1,
        quantidadeProduto_1,
        observacao_1,
        //
        filialOrigem_2,
        notaFiscal_2,
        tipoOperacao_2,
        codigo_2,
        descricaoProduto_2,
        quantidadeProduto_2,
        observacao_2,
        //
        filialOrigem_3,
        notaFiscal_3,
        tipoOperacao_3,
        codigo_3,
        descricaoProduto_3,
        quantidadeProduto_3,
        observacao_3,
        //
        filialOrigem_4,
        notaFiscal_4,
        tipoOperacao_4,
        codigo_4,
        descricaoProduto_4,
        quantidadeProduto_4,
        observacao_4,
        //
        filialOrigem_5,
        notaFiscal_5,
        tipoOperacao_5,
        codigo_5,
        descricaoProduto_5,
        quantidadeProduto_5,
        observacao_5,
        //
        filialOrigem_6,
        notaFiscal_6,
        tipoOperacao_6,
        codigo_6,
        descricaoProduto_6,
        quantidadeProduto_6,
        observacao_6,
        //
        filialOrigem_7,
        notaFiscal_7,
        tipoOperacao_7,
        codigo_7,
        descricaoProduto_7,
        quantidadeProduto_7,
        observacao_7,
        //
        filialOrigem_8,
        notaFiscal_8,
        tipoOperacao_8,
        codigo_8,
        descricaoProduto_8,
        quantidadeProduto_8,
        observacao_8,
        //
        filialOrigem_9,
        notaFiscal_9,
        tipoOperacao_9,
        codigo_9,
        descricaoProduto_9,
        quantidadeProduto_9,
        observacao_9,
        //
        filialOrigem_10,
        notaFiscal_10,
        tipoOperacao_10,
        codigo_10,
        descricaoProduto_10,
        quantidadeProduto_10,
        observacao_10,
        //
        filialOrigem_11,
        notaFiscal_11,
        tipoOperacao_11,
        codigo_11,
        descricaoProduto_11,
        quantidadeProduto_11,
        observacao_11,
        //
        filialOrigem_12,
        notaFiscal_12,
        tipoOperacao_12,
        codigo_12,
        descricaoProduto_12,
        quantidadeProduto_12,
        observacao_12,
        //
        filialOrigem_13,
        notaFiscal_13,
        tipoOperacao_13,
        codigo_13,
        descricaoProduto_13,
        quantidadeProduto_13,
        observacao_13,
        //
        filialOrigem_14,
        notaFiscal_14,
        tipoOperacao_14,
        codigo_14,
        descricaoProduto_14,
        quantidadeProduto_14,
        observacao_14,
        //
        filialOrigem_15,
        notaFiscal_15,
        tipoOperacao_15,
        codigo_15,
        descricaoProduto_15,
        quantidadeProduto_15,
        observacao_15,
        //
        filialOrigem_16,
        notaFiscal_16,
        tipoOperacao_16,
        codigo_16,
        descricaoProduto_16,
        quantidadeProduto_16,
        observacao_16,
        //
        filialOrigem_17,
        notaFiscal_17,
        tipoOperacao_17,
        codigo_17,
        descricaoProduto_17,
        quantidadeProduto_17,
        observacao_17,
        //
        filialOrigem_18,
        notaFiscal_18,
        tipoOperacao_18,
        codigo_18,
        descricaoProduto_18,
        quantidadeProduto_18,
        observacao_18,
        //
        filialOrigem_19,
        notaFiscal_19,
        tipoOperacao_19,
        codigo_19,
        descricaoProduto_19,
        quantidadeProduto_19,
        observacao_19,
        //
        filialOrigem_20,
        notaFiscal_20,
        tipoOperacao_20,
        codigo_20,
        descricaoProduto_20,
        quantidadeProduto_20,
        observacao_20,
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

    await connection("transferencias")
      .where({ id: id })
      .delete()
      .then(() => {
        return res.status(204).send("Excluído com sucesso");
      })
      .catch((err) => {
        return res
          .status(400)
          .send({ message: "Erro ao excluir transferência" });
      });
  },
  async findById(req, res) {
    const { id } = req.params;

    await validation.id
      .validateAsync({
        id: id,
      })
      .catch((err) => {
        return res.status(400).send({ message: err.details[0].message });
      });

    await connection("transferencias")
      .select("*")
      .where("id", id)
      .then((data) => {
        return res.json(data);
      })
      .catch((err) => {
        return res
          .status(400)
          .send({ message: "Erro ao localizar transferência" });
      });
  },
  async search(req, res) {
    const { initialDate, finalDate, numeroControle, numeroFilial } = req.body;

    const validationInitialDate = moment().format("MM DD YYYY, h:mm:ss a");
    const validationFinalDate = moment().format("MM DD YYYY, h:mm:ss a");

    await validation.searchSchema
      .validateAsync({
        initialDate: validationInitialDate,
        finalDate: validationFinalDate,
        numeroControle: numeroControle,
        numeroFilial: numeroFilial,
      })
      .catch((err) => {
        return res.status(400).send({ message: err.details[0].message });
      });

    if (
      initialDate === "" &&
      finalDate === "" &&
      numeroControle === "" &&
      numeroFilial === ""
    ) {
      //todos os campos de pesquisa vazios
      return res
        .status(400)
        .send({ message: "É necessário preencher algum campo da pesquisa" });
    } else if (initialDate !== "" && finalDate === "") {
      //usuário Preenche data inicial e não preenche final
      return res
        .status(400)
        .send({ message: "É necessário preencher a data final" });
    } else if (initialDate > finalDate) {
      //data final maior que a inicial
      return res
        .status(400)
        .send({ message: "Data inicial maior que a final" });
    }

    if (
      (numeroControle !== "" && initialDate !== "") ||
      (numeroControle !== "" && numeroFilial !== "")
    ) {
      return res.status(400).send({
        message:
          "Ao pesquisar pelo número de controle não é necessário preencher a data ou número de filial",
      });
    }

    if (initialDate === "") {
      if (numeroControle !== "") {
        await connection("transferencias")
          .select("*")
          .where("numeroControle", numeroControle)
          .orderBy("created_at", "asc")
          .then((data) => {
            return res.json(data);
          })
          .catch((err) => {
            return res
              .status(400)
              .send({ message: "Erro ao localizar pelo número de controle" });
          });
      } else if (numeroFilial !== "") {
        await connection("transferencias")
          .select("*")
          .where("unidadeDestino", numeroFilial)
          .orderBy("created_at", "desc")
          .then((data) => {
            return res.json(data);
          })
          .catch((err) => {
            return res
              .status(400)
              .send({ message: "Erro ao localizar pelo número de filial" });
          });
      }
    } else if (initialDate !== "") {
      if (numeroFilial !== "") {
        await connection("transferencias")
          .select("*")
          .whereBetween("dataAtual", [initialDate, finalDate])
          .where("unidadeDestino", numeroFilial)
          .orderBy("created_at", "desc")
          .then((data) => {
            return res.json(data);
          })
          .catch((err) => {
            return res
              .status(400)
              .send({ message: "Erro ao localizar pelo número de filial" });
          });
      }
      await connection("transferencias")
        .select("*")
        .whereBetween("dataAtual", [initialDate, finalDate])
        .orderBy("created_at", "desc")
        .then((data) => {
          return res.json(data);
        })
        .catch((err) => {
          return res
            .status(400)
            .send({ message: "Erro ao localizar pelo número de filial" });
        });
    }
  },
};
