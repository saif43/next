import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <Link href="/posts/1">
      <a>
        <h2>Header</h2>
      </a>
    </Link>
  );
};

export default Header;
