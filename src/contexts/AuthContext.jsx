import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading
  const [error, setError] = useState(null);

  // Check auth status on app load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/check-auth", {
          method: "GET",
          credentials: "include", // CRITICAL: Send httpOnly cookie
        });
        setIsAuthenticated(response.ok);
        setError(null);
      } catch (err) {
        console.error("Auth check failed:", err);
        setIsAuthenticated(false);
        setError(err.message);
      }
    };

    checkAuth();
  }, []);

  const login = async (username, password) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // CRITICAL: Send/receive httpOnly cookie
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      setIsAuthenticated(true);
      setError(null);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  const logout = async () => {
    try {
      await fetch("/api/logout", {
        method: "POST",
        credentials: "include",
      });
      setIsAuthenticated(false);
      setError(null);
      return true;
    } catch (err) {
      console.error("Logout failed:", err);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
