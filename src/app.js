const express = require("express");
var knex = require("knex");
const cors = require("cors");
const routes = require("./routes/routes");

//configurações
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3001);
