const express = require("express");

const routes = express.Router();

// GET, POST, PUT, DELETE

// req.query = Access query params (filters)
// req.params = Access route params (edit, delete)
// req.body = Access body from requests (create, edit)

routes.post("/users", (req, res) => {
  return res.json(req.body);
});

module.exports = routes;
