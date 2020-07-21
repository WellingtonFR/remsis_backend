const hapi = require("@hapi/joi");

const id = hapi.object({
  id: hapi.number().integer().max(1000000000).messages({
    "number.base": "O id precisa ser um número",
    "number.max": "Número de caracteres excedido",
  }),
});

const searchSchema = hapi.object({
  initialDate: hapi
    .date()
    .allow("")
    .messages({ "date.base": "A data está em formato inválido" }),
  finalDate: hapi
    .date()
    .allow("")
    .messages({ "date.base": "A data está em formato inválido" }),
  numeroControle: hapi.string().allow("").max(10).messages({
    "string.base": "O número de controle está em formato inválido",
    "string.min": "O número de controle deve ter 10 caracteres",
    "string.max": "O número de controle deve ter 10 caracteres",
    "string.empty": "O número de controle não pode estar vazio",
    "any.required": "O número de controle deve ser preenchido",
  }),
  numeroFilial: hapi.string().allow("").max(30).messages({
    "string.base": "O campo número da filial deve conter somente números",
    "string.max": "Número de caracteres excedido",
    "string.empty": "O número da filial não pode estar vazio",
    "any.required": "O número da filial deve ser preenchido",
  }),
});

module.exports = { id, searchSchema };
