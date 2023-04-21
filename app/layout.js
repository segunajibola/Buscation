"use client";

import "./globals.css";
import { Navbar, Footer} from "../sections";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const handleMode = () => setDarkMode(!darkMode);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <div
          className={`overflow-hidden ${darkMode ? "dark" : ""}`}
          id="dark"
        >
          <Navbar handleMode={handleMode} darkMode={darkMode} />
          {children}
          <Footer />
        </div>
    </html>
  );
}
