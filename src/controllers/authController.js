const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const hapi = require("@hapi/joi");
const moment = require("moment");
const connection = require("../database/connection");
const validation = require("../validations/userValidation");

function generateToken(params = []) {
  return jwt.sign(
    { userId: params.id },
    process.env.SECRETJWT || "fu98f6c806ydualcbnwl4zc39b0xgg",
    {
      expiresIn: 86400,
    }
  );
}

module.exports = {
  async register(req, res) {
    const { nomeUsuario, idUsuario, senha } = req.body;
    const created_at = moment().format("MM DD YYYY, h:mm:ss a");

    await validation.userSchema
      .validateAsync({
        nomeUsuario: nomeUsuario,
        idUsuario: idUsuario,
        senha: senha,
        created_at: created_at,
      })
      .catch((err) => {
        return res.status(400).send({ message: err.details[0].message });
      });

    try {
      const verificaUsuario = await connection("usuarios")
        .select()
        .where({ idUsuario: idUsuario });

      if (verificaUsuario.length !== 0) {
        return res.status(400).send({ message: "Usuário já está cadastrado" });
      }

      bcrypt.hash(senha, 10, async function (err, hashedPassword) {
        const user = await connection("usuarios").insert({
          nomeUsuario,
          idUsuario,
          hashedPassword,
          created_at,
        });
        return res.status(200).send({
          message: "Criado com sucesso",
          token: generateToken(user.nomeUsuario),
        });
      });
    } catch (err) {
      return res.status(400).send({ message: "Contate o administrador" });
    }
  },
  async authenticate(req, res) {
    const { nomeUsuario, senha } = req.body;

    const verificaUsuario = await connection("usuarios")
      .select("hashedPassword")
      .where({ nomeUsuario: nomeUsuario });

    if (verificaUsuario.length === 0) {
      return res.status(400).send({ message: "Usuário não encontrado" });
    }

    if (!(await bcrypt.compare(senha, verificaUsuario[0].hashedPassword))) {
      return res.status(400).send({ message: "Usuário ou senha não confere" });
    }

    res.send({
      token: generateToken({ userId: verificaUsuario.id }),
    });
  },
  async logout(req, res) {
    res.send({ token: null });
  },
};
