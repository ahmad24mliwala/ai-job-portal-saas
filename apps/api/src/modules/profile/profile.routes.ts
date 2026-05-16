import { Router }
from "express";

import {
  protect
} from "../../middleware/auth.middleware";

import {

  getProfile,

  updateProfile

} from "./profile.controller";

const router = Router();

router.get(
  "/me",
  protect,
  getProfile
);

router.put(
  "/update",
  protect,
  updateProfile
);

export default router;
