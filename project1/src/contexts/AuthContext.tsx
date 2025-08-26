"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { isAuthenticated, getCurrentUser } from "@/services/auth";
import type { User } from "@/types/User";

interface AuthContextProps {
  isLoggedIn: boolean;
  currentUser: User | null;
  loading: boolean;
  refreshAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshAuth = async () => {
    try {
      setLoading(true);
      const authenticated = isAuthenticated();

      if (authenticated) {
        const user = await getCurrentUser();
        if (user) {
          setIsLoggedIn(true);
          setCurrentUser(user);
        } else {
          setIsLoggedIn(false);
          setCurrentUser(null);
        }
      } else {
        setIsLoggedIn(false);
        setCurrentUser(null);
      }
    } finally {
      setLoading(false);
    }
  };

  const pathname = usePathname();
  useEffect(() => {
    refreshAuth();
    const interval = setInterval(() => {
      refreshAuth();
    }, 2 * 60 * 1000); // 2 phút
    return () => clearInterval(interval);
  }, [pathname]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, currentUser, loading, refreshAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
