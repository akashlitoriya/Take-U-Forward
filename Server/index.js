const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

//Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
dotenv.config();

//Routes
const codeSubmission = require("./routes/code");
app.use("/api/v1/code", codeSubmission);

//Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
