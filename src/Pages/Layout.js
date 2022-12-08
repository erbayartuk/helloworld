import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <ul style={{ display: "flex", listStyle: "none" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li style={{ paddingLeft: "5px" }}>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li style={{ paddingLeft: "5px" }}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
