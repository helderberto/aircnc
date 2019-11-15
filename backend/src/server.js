const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());
// Use routes need to be after of express.json()
app.use(routes);

app.listen(3333);
