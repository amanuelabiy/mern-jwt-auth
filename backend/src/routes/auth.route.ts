import { Router } from "express";
import {
  registerHandler,
  loginHandler,
  logoutHanlder,
} from "../controllers/auth.controller";

const authRoutes = Router();

// prefix: //auth
authRoutes.post("/register", registerHandler);
authRoutes.post("/login", loginHandler);
authRoutes.get("/logout", logoutHanlder);

export default authRoutes;
