import { Router } from "express";

import {

  registerUser,

  loginUser,

  logoutUser

} from "./auth.controller";

import {

  registerSchema,

  loginSchema

} from "./auth.validation";

import { validate }
from "../../middleware/validate.middleware";

const router = Router();

router.post(
  "/register",
  validate(registerSchema),
  registerUser
);

router.post(
  "/login",
  validate(loginSchema),
  loginUser
);

router.post(
  "/logout",
  logoutUser
);

export default router;
