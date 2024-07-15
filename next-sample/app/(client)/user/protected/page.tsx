"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Protected() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch("/api/auth/session");
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
        setIsAuthenticated(true);
      } else {
        router.push("/login");
      }
    };

    checkAuth();
  }, [router]);

  if (!isAuthenticated) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, {user.emailAddresses[0].emailAddress}!</p>
    </div>
  );
}
