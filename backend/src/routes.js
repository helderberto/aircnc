const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");

const routes = express.Router();
const upload = multer(uploadConfig);

// GET, POST, PUT, DELETE

// req.query = Access query params (filters)
// req.params = Access route params (edit, delete)
// req.body = Access body from requests (create, edit)

routes.post("/sessions", SessionController.store);
routes.post("/spots", upload.single("thumbnail"), SpotController.store);

module.exports = routes;
