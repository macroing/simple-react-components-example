"use client";

import Link from "next/link";
import { useState } from "react";

import { Breadcrumb } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function BreadcrumbPage(props) {
  const styles = props.styles || importedStyles;

  const [items, setItems] = useState([{ href: "/", text: "Text" }, { href: "/", text: "Text" }, { text: "Text" }]);

  function linkFactory(href, children) {
    return <Link href={href}>{children}</Link>;
  }

  return (
    <div className={styles.page}>
      <Breadcrumb items={items} linkFactory={linkFactory} />
    </div>
  );
}
