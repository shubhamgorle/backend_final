const express = require("express")
const app = express();
const dotenv = require("dotenv");
const cors = require('cors');
const newDataRoute = require("./routes/newDataRoute.js")
const rDataRoute = require("./routes/rDataRoutes.js")
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json())
dotenv.config({path:"backend/config/config.env"});
app.use("/ashirwad/mendhepathar", newDataRoute)
app.use("/ashirwad/raulgaon", rDataRoute)
module.exports = app;


