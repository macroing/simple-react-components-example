"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Footer } from "@macroing/simple-react-components";

export default function CustomFooter(props) {
  const [items, setItems] = useState([]);

  function linkFactory(href, target, children) {
    return (
      <Link href={href} target={target}>
        {children}
      </Link>
    );
  }

  useEffect(() => {
    setItems([
      {
        items: [
          { href: "", text: <strong style={{ fontSize: "20px" }}>Title #1</strong> },
          { href: "/", text: "Link #1" },
          { href: "/", text: "Link #2" },
          { href: "/", text: "Link #3" },
        ],
      },
      {
        items: [
          { href: "", text: <strong style={{ fontSize: "20px" }}>Title #2</strong> },
          { href: "/", text: "Link #4" },
          { href: "/", text: "Link #5" },
          { href: "/", text: "Link #6" },
        ],
      },
      {
        items: [
          { href: "", text: <strong style={{ fontSize: "20px" }}>Title #3</strong> },
          { href: "/", text: "Link #7" },
          { href: "/", text: "Link #8" },
          { href: "/", text: "Link #9" },
        ],
      },
    ]);
  }, []);

  return <Footer copyrightHolder="@macroing/simple-react-components" items={items} linkFactory={linkFactory} theme="primary" title="@macroing/simple-react-components" />;
}
