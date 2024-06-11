"use client";

import { useState } from "react";

import { Button, ImageViewer } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function ImageViewerPage(props) {
  const styles = props.styles || importedStyles;

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.page}>
      <Button onClick={(e) => setIsVisible(true)}>Show Image</Button>
      <ImageViewer alt="" isVisible={isVisible} setIsVisible={setIsVisible} src="/Image.jpg" />
    </div>
  );
}
