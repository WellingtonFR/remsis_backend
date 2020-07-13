const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connection = require("../database/connection");

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
    const { nomeUsuario, idUsuario, senha, created_at } = req.body;

    try {
      const verificaUsuario = await connection("usuarios")
        .select()
        .where({ idUsuario: idUsuario });

      if (verificaUsuario) {
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
      console.log(err);
      return res.status(400).send({ message: "Contate o administrador" });
    }
  },
  async authenticate(req, res) {
    const { nomeUsuario, senha } = req.body;
    const verificaUsuario = await connection("usuarios")
      .select("*")
      .where({ nomeUsuario: nomeUsuario });
    if (!verificaUsuario) {
      return res.status(400).send({ message: "Usuário não encontrado" });
    }

    if (!(await bcrypt.compare(senha, verificaUsuario.hashedPassword))) {
      return res.status(400).send({ message: "Usuário ou senha não confere" });
    }

    res.send({
      token: generateToken({ userId: verificaUsuario.id }),
    });
  },
  async logout(req, res) {
    res.send({ token: null });
  },
  async backupDB(req, res) {
    try {
      const filePath = "../backend/src/database/database/basePrincipal.db";
      res.download(filePath);
    } catch (err) {
      console.log(err);
      return res.status(400).send({ message: "Arquivo não encontrado" });
    }
  },
};
