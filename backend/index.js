

const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/database.js").pool();


const userRouter = require("./api/users/user.router.js");
const adminRouter = require("./api/admin/admin.router.js");
const AppError = require("./helpers/appError.js");
const errorHandler = require("./helpers/errorHandler.js");
const accountRouter = require("./api/account/account.router")


const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.use(cors({ credentials: true, origin: "http://localhost:3001" }));
const PORT = process.env.PORT || 3000;


app.use("/api/users", userRouter.router);
app.use("/api/admin", adminRouter.router);
app.use("/api/account", accountRouter.router);


app.get("/", (req, res) => {
  res.json({
    success: 1,
    message: "I am listening on port " + PORT
  });
});

app.all("*", (req, res, next) => {
    next(new AppError(`the url ${req.originalUrl} does not exist`, 404));
  });

app.use(errorHandler.messageErr);

app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
});