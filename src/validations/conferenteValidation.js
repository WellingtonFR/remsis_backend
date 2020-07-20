const hapi = require("@hapi/joi");

const conferenteSchema = hapi.object({
  idConferente: hapi.number().integer().max(1000000000).required().messages({
    "number.base": "O id do conferente está em formato inválido",
    "number.max": "Número de caracteres excedido",
    "number.empty": "O id do conferente não pode estar vazio",
    "any.required": "O id do conferente deve ser preenchido",
  }),
  nomeConferente: hapi.string().min(3).max(70).required().messages({
    "string.base": "O nome do conferente está em formato inválido",
    "string.max": "O nome do conferente deve ter de 3 a 30 caracteres",
    "string.empty": "O nome do conferente não pode estar vazio",
    "any.required": "O nome do conferente deve ser preenchido",
  }),
  created_at: hapi.date().required().messages({
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

module.exports = { conferenteSchema, id };
