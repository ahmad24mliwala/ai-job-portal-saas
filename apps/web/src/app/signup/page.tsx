"use client";

import { useState } from "react";

import api from "@/lib/axios";

export default function SignupPage() {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSignup =
    async (
      e: React.FormEvent
    ) => {

      e.preventDefault();

      try {

        await api.post(
          "/auth/register",
          {
            name,
            email,
            password
          }
        );

        alert(
          "Signup Successful"
        );

      } catch (error) {

        alert("Signup Failed");

      }

    };

  return (

    <div className="min-h-screen flex items-center justify-center">

      <form
        onSubmit={handleSignup}
        className="flex flex-col gap-4 w-80"
      >

        <h1 className="text-3xl font-bold">
          Signup
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="border p-2"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

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
          Signup
        </button>

      </form>

    </div>

  );

}
