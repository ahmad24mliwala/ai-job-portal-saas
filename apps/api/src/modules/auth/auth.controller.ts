import { Request, Response } from "express";

import bcrypt from "bcryptjs";

import prisma from "../../config/prisma";

import { generateToken } from "../../utils/generateToken";

import { generateRefreshToken } from "../../utils/generateRefreshToken";

import { asyncHandler } from "../../utils/asyncHandler";

import { ApiError } from "../../utils/apiError";

export const registerUser = asyncHandler(
  async (
    req: Request,
    res: Response
  ) => {

    const {
      name,
      email,
      password
    } = req.body;

    const existingUser =
      await prisma.user.findUnique({
        where: {
          email
        }
      });

    if (existingUser) {

      throw new ApiError(
        400,
        "User already exists"
      );

    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    const user =
      await prisma.user.create({
        data: {
          name,
          email,
          password:
            hashedPassword
        }
      });

    return res.status(201).json({

      success: true,

      message:
        "User registered successfully",

      data: user

    });

  }
);

export const loginUser = asyncHandler(
  async (
    req: Request,
    res: Response
  ) => {

    const {
      email,
      password
    } = req.body;

    const user =
      await prisma.user.findUnique({
        where: {
          email
        }
      });

    if (!user) {

      throw new ApiError(
        400,
        "Invalid credentials"
      );

    }

    const isPasswordValid =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isPasswordValid) {

      throw new ApiError(
        400,
        "Invalid credentials"
      );

    }

    const accessToken =
      generateToken(
        user.id,
        user.role
      );

    const refreshToken =
      generateRefreshToken(
        user.id
      );

    res.cookie(
      "refreshToken",
      refreshToken,
      {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge:
          30 *
          24 *
          60 *
          60 *
          1000
      }
    );

    return res.status(200).json({

      success: true,

      message:
        "Login successful",

      accessToken,

      data: user

    });

  }
);

export const logoutUser = asyncHandler(
  async (
    req: Request,
    res: Response
  ) => {

    res.clearCookie(
      "refreshToken"
    );

    return res.status(200).json({

      success: true,

      message:
        "Logout successful"

    });

  }
);
