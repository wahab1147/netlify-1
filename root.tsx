// src/app/root.tsx
import * as React from "react";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>My Website</title>
      </head>
      <body>
        <h1>Welcome to My Website 🚀</h1>
        <Outlet />
      </body>
    </html>
  );
}
