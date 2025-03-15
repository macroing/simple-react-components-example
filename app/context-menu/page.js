"use client";

import { useState } from "react";

import { ContextMenu } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function ContextMenuPage(props) {
  const styles = props.styles || importedStyles;

  const [isVisible, setIsVisible] = useState(true);
  const [items, setItems] = useState([{ items: [{ text: "Text" }, { text: "Text" }], text: "Text" }, { text: "Text" }, { text: "Text" }]);

  return (
    <div className={styles.page}>
      <ContextMenu isVisible={isVisible} items={items} setIsVisible={setIsVisible} x={200} y={200} />
    </div>
  );
}
