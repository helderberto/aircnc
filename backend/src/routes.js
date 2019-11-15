const express = require("express");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

// GET, POST, PUT, DELETE

// req.query = Access query params (filters)
// req.params = Access route params (edit, delete)
// req.body = Access body from requests (create, edit)

routes.post("/sessions", SessionController.store);

module.exports = routes;
