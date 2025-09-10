"use client";
import { createContext, useState } from "react";

export const Context = createContext(null);

function GlobalState({ children }) {
  // Simplified context for ducted heating services
  const [siteData, setSiteData] = useState({});

  return (
    <Context.Provider value={{ siteData, setSiteData }}>
      {children}
    </Context.Provider>
  );
}

export default GlobalState;
