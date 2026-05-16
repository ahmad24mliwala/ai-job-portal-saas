"use client";

import { useEffect }
from "react";

import { useRouter }
from "next/navigation";

import { useAuthStore }
from "@/store/authStore";

export const useProtected = () => {

  const router =
    useRouter();

  const user =
    useAuthStore(
      (state) => state.user
    );

  useEffect(() => {

    if (!user) {

      router.push("/login");

    }

  }, [user, router]);

};
