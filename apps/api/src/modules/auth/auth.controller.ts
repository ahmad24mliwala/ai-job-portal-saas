import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import prisma from "../../config/prisma";

export const registerUser = async (
  req: Request,
  res: Response
) => {

  try {

    const { name, email, password } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (existingUser) {

      return res.status(400).json({
        success: false,
        message: "User already exists"
      });

    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    });

    return res.status(201).json({
      success: true,
      user
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });

  }

};
