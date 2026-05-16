import { Response }
from "express";

import prisma
from "../../config/prisma";

import {
  AuthRequest
} from "../../middleware/auth.middleware";

export const getProfile =
  async (
    req: AuthRequest,
    res: Response
  ) => {

    const user =
      await prisma.user.findUnique({

        where: {
          id:
            req.user?.userId
        }

      });

    return res.json({

      success: true,

      data: user

    });

};

export const updateProfile =
  async (
    req: AuthRequest,
    res: Response
  ) => {

    const {
      name,
      bio,
      skills
    } = req.body;

    const updatedUser =
      await prisma.user.update({

        where: {
          id:
            req.user?.userId
        },

        data: {
          name,
          bio,
          skills
        }

      });

    return res.json({

      success: true,

      message:
        "Profile updated",

      data:
        updatedUser

    });

};
