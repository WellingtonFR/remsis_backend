const hapi = require("@hapi/joi");

const userSchema = hapi.object({
  nomeUsuario: hapi
    .string()
    .pattern(new RegExp("^[a-zA-Z0-9#*_]{3,30}$"))
    .required()
    .messages({
      "string.base": "O nome do usuário deve conter letras",
      "string.pattern.base": "O nome do usuário deve ter de 3 a 30 caracteres",
      "string.empty": "O nome do usuário não pode ser vazio",
      "any.required": "O nome do usuário deve ser preenchido",
    }),
  idUsuario: hapi.number().integer().max(1000000000).required().messages({
    "number.base": "O id do usuário deve conter somente números",
    "number.max": "Número de caracteres excedido",
    "number.empty": "O id do usuário não pode ser vazio",
    "any.required": "O id do usuário deve ser preenchido",
  }),
  senha: hapi
    .string()
    .pattern(new RegExp("^[a-zA-Z0-9#*_]{3,15}$"))
    .required()
    .messages({
      "string.base": "A senha usuário deve conter letras",
      "string.pattern.base": "A senha do usuário deve ter de 3 a 15 caracteres",
      "string.empty": "A senha não pode ser vazia",
      "any.required": "A senha deve ser preenchida",
    }),
  created_at: hapi.date().required().messages({
    "date.base": "A data de criação está em formato inválido",
    "date.stric": "O formato de data é inválido",
  }),
});

module.exports = { userSchema };
