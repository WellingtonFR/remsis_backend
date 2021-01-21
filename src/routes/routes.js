const express = require("express");
const route = express.Router();
const connection = require("../database/connection");
const autenticarToken = require("../middlewares/auth");

const filiaisController = require("../controllers/filiaisController");
const transferenciaController = require("../controllers/transferenciaControllers");
const transportadorController = require("../controllers/transportadorController");
const conferenteController = require("../controllers/conferenteController");
const authController = require("../controllers/authController");

//Filiais
route.get("/filiais", autenticarToken, filiaisController.index);
route.get("/filiais/findById/:id", autenticarToken, filiaisController.findById);
route.get(
  "/filiais/findByNumeroFilial/:numeroFilial",
  autenticarToken,
  filiaisController.findByNumeroFilial
);
route.post("/filiais/create", autenticarToken, filiaisController.create);
route.delete("/filiais/delete/:id", autenticarToken, filiaisController.delete);
route.put("/filiais/update/:id", autenticarToken, filiaisController.update);

//Transferencia
route.get("/transferencia", autenticarToken, transferenciaController.index);
route.get(
  "/transferencia/findById/:id",
  autenticarToken,
  transferenciaController.findById
);
route.post(
  "/transferencia/create",
  autenticarToken,
  transferenciaController.create
);
route.post(
  "/transferencia/search",
  autenticarToken,
  transferenciaController.search
);
route.put(
  "/transferencia/update/:id",
  autenticarToken,
  transferenciaController.update
);
route.delete(
  "/transferencia/delete/:id",
  autenticarToken,
  transferenciaController.delete
);

//Transportador
route.get("/transportador", autenticarToken, transportadorController.index);
route.get(
  "/transportador/findById/:id",
  autenticarToken,
  transportadorController.findById
);
route.get(
  "/transportador/findByName/:name",
  autenticarToken,
  transportadorController.findByName
);
route.get(
  "/transportador/findByFilialAtendida/:filialAtendida",
  autenticarToken,
  transportadorController.findByFilialAtendida
);
route.post(
  "/transportador/create",
  autenticarToken,
  transportadorController.create
);
route.post(
  "/transportador/find",
  autenticarToken,
  transportadorController.find
);
route.put(
  "/transportador/update/:id",
  autenticarToken,
  transportadorController.update
);
route.delete(
  "/transportador/delete/:id",
  autenticarToken,
  transportadorController.delete
);

//Conferente
route.get("/conferente", autenticarToken, conferenteController.index);
route.post("/conferente/create", autenticarToken, conferenteController.create);
route.get(
  "/conferente/findByIdConferente/:idConferente",
  autenticarToken,
  conferenteController.findByIdConferente
);
route.delete(
  "/conferente/delete/:id",
  autenticarToken,
  conferenteController.delete
);
//Usuário
route.post("/register", authController.register);
//Autenticação
route.post("/authenticate", authController.authenticate);
route.post("/logout", authController.logout);

module.exports = route;
