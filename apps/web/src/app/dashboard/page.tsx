"use client";

import { useAuthStore }
from "@/store/authStore";

import { useProtected }
from "@/hooks/useProtected";

export default function DashboardPage() {

useProtected();

  const user =
    useAuthStore(
      (state) => state.user
    );

  return (

    <div className="min-h-screen p-10">

      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <div className="mt-10 border p-5 rounded-lg">

        <h2 className="text-2xl font-semibold">
          Welcome
        </h2>

        <p className="mt-2">
          {user?.name}
        </p>

        <p>
          {user?.email}
        </p>

        <p>
          Role: {user?.role}
        </p>

      </div>

    </div>

  );

}
