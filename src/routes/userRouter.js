const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");
const validateToken=require("../middleware/validateTokenHandler")

userRouter.post("/", userController.register);
userRouter.post("/login", userController.login);
userRouter.get("/currentUser",validateToken,userController.currentUser)
module.exports = userRouter;
