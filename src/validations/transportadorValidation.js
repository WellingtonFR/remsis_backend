const hapi = require("@hapi/joi");

const transportadorSchema = hapi.object({
  nomeTransportador: hapi.string().min(3).max(70).required().messages({
    "string.base": "O nome do transportador está em formato inválido",
    "string.base": "O nome do transportador  deve ter no minímo 3 caracteres",
    "string.max": "O nome do transportador deve ter no máximo 70 caracteres",
    "string.empty": "O campo nome do transportador não pode estar vazio",
    "any.required": "O nome do transportador deve ser preenchido",
  }),
  placaVeiculo: hapi.string().min(8).max(10).required().messages({
    "string.base": "A placa do veículo está em formato inválido",
    "string.min": "A placa do veículo deve ter no minímo 8 caracteres",
    "string.max": "A placa do veículo deve ter no máximo 10 caracteres",
    "string.empty": "O campo placa do veículo não pode estar vazio",
    "any.required": "A placa do veículo deve ser preenchida",
  }),
  created_at: hapi.date().messages({
    "date.base": "A data de criação está em formato inválido",
    "date.strict": "O formato de data é inválido",
  }),
  updated_at: hapi.date().messages({
    "date.base": "A data de criação está em formato inválido",
    "date.strict": "O formato de data é inválido",
  }),
});

const id = hapi.object({
  id: hapi.number().integer().max(1000000000).messages({
    "number.base": "O id precisa ser um número",
    "number.max": "Número de caracteres excedido",
  }),
});

module.exports = { transportadorSchema, id };
