"use client";

import { useState } from "react";

import api from "@/lib/axios";

import { useAuthStore }
from "@/store/authStore";

export default function LoginPage() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const setAuth =
    useAuthStore(
      (state) => state.setAuth
    );

  const handleLogin =
    async (
      e: React.FormEvent
    ) => {

      e.preventDefault();

      try {

        const response =
          await api.post(
            "/auth/login",
            {
              email,
              password
            }
          );

        setAuth(
          response.data.data,
          response.data.accessToken
        );

        alert("Login Successful");

      } catch (error) {

        alert("Login Failed");

      }

    };

  return (

    <div className="min-h-screen flex items-center justify-center">

      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 w-80"
      >

        <h1 className="text-3xl font-bold">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="border p-2"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button
          type="submit"
          className="bg-black text-white p-2"
        >
          Login
        </button>

      </form>

    </div>

  );

}
