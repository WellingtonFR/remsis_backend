const hapi = require("@hapi/joi");

const filiaisSchema = hapi.object({
  numeroFilial: hapi.number().integer().max(1000000000).required().messages({
    "number.base": "O número da filial deve conter somente números",
    "number.max": "Número de caracteres excedido",
    "number.empty": "O número da filial não pode estar vazio",
    "any.required": "O número da filial deve ser preenchido",
  }),
  endereco: hapi.string().min(3).max(100).required().messages({
    "string.base": "O endereço deve conter somente letras",
    "string.max": "O endereço deve ter de 3 a 100 caracteres",
    "string.empty": "O endereço não pode estar vazio",
    "any.required": "O endereço deve ser preenchido",
  }),
  numeroEndereco: hapi.number().integer().max(1000000000).required().messages({
    "number.base": "O número do endereço deve conter somente números",
    "number.max": "Número de caracteres excedido",
    "number.empty": "O número do endereço não pode estar vazio",
    "any.required": "O número do endereço deve ser preenchido",
  }),
  complemento: hapi.string().max(70).required().messages({
    "string.base": "O complemento está em formato inválido",
    "string.max": "O complemento deve ter no máximo 50 caracteres",
    "string.empty": "O complemento não pode estar vazio",
    "any.required": "O complemento deve ser preenchido",
  }),
  cidade: hapi.string().max(100).required().messages({
    "string.base": "O campo cidade está em formato inválido",
    "string.max": "O campo cidade deve ter no máximo 50 caracteres",
    "string.empty": "O campo cidade não pode estar vazio",
    "any.required": "O campo cidade deve ser preenchido",
  }),
  estado: hapi.string().max(2).required().messages({
    "string.base": "O campo estado está em formato inválido",
    "string.max": "O campo estado deve ter no máximo 2 caracteres",
    "string.empty": "O campo estado não pode estar vazio",
    "any.required": "O campo estado deve ser preenchido",
  }),
  nomeFantasia: hapi.string().max(100).required().messages({
    "string.base": "O nome fantasia está em formato inválido",
    "string.max": "O nome fantasia deve ter no máximo 50 caracteres",
    "string.empty": "O nome fantasia não pode estar vazio",
    "any.required": "O nome fantasia deve ser preenchido",
  }),
  created_at: hapi.date().messages({
    "date.base": "A data de criação está em formato inválido",
    "date.stric": "O formato de data é inválido",
  }),
  updated_at: hapi.date().messages({
    "date.base": "A data de atualização está em formato inválido",
    "date.stric": "O formato de data é inválido",
  }),
});

const id = hapi.object({
  id: hapi
    .number()
    .integer()
    .max(1000000000)
    .messages({ "number.base": "O id precisa ser um número" }),
});

const numeroFilialSchema = hapi.object({
  numeroFilial: hapi
    .number()
    .integer()
    .max(1000000000)
    .messages({ "number.base": "O número da filial precisa ser um número" }),
});

module.exports = { filiaisSchema, id, numeroFilialSchema };
