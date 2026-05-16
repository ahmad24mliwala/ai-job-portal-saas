"use client";

import Link from "next/link";

import { useAuthStore }
from "@/store/authStore";

export default function Navbar() {

  const user =
    useAuthStore(
      (state) => state.user
    );

  const logout =
    useAuthStore(
      (state) => state.logout
    );

  return (

    <nav className="flex items-center justify-between p-5 border-b">

      <Link
        href="/"
        className="text-2xl font-bold"
      >
        AI Job Portal
      </Link>

      <div className="flex gap-5">

        {user ? (

          <>
            <Link href="/dashboard">
              Dashboard
            </Link>
             <Link href="/profile">
  Profile
</Link>
            <button
              onClick={logout}
            >
              Logout
            </button>
          </>

        ) : (

          <>
            <Link href="/login">
              Login
            </Link>

            <Link href="/signup">
              Signup
            </Link>
          </>

        )}

      </div>

    </nav>

  );

}
