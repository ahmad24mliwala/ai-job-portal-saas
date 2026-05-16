"use client";

import { useState } from "react";

export default function ProfilePage() {

  const [name, setName] =
    useState("");

  const [bio, setBio] =
    useState("");

  const [skills, setSkills] =
    useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    alert("Profile Saved");

  };

  return (

    <div className="min-h-screen p-10">

      <h1 className="text-4xl font-bold mb-10">
        Profile Page
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 max-w-xl"
      >

        <input
          type="text"
          placeholder="Name"
          className="border p-3"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <textarea
          placeholder="Bio"
          className="border p-3"
          value={bio}
          onChange={(e) =>
            setBio(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Skills"
          className="border p-3"
          value={skills}
          onChange={(e) =>
            setSkills(e.target.value)
          }
        />

        <button
          type="submit"
          className="bg-black text-white p-3"
        >
          Save Profile
        </button>

      </form>

    </div>

  );

}
