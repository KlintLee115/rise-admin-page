"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>; // Show a loading spinner while checking session
  }

  return (
    <div>
      <h1>Welcome to the Homepage</h1>
    </div>
  );
  
}
