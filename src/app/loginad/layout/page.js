"use client";

import React from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <ul className="login-menu">
        <li>
          <Link href="/loginad">Login Main</Link>
          <Link href="/loginad/loginuser">Login Regular User</Link>
          <Link href="/loginad/loginadmin">Login Administration</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Layout;
