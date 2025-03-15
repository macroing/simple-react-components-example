"use client";

import { useState } from "react";

import { ImageUploader } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function ImageUploaderPage(props) {
  const styles = props.styles || importedStyles;

  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className={styles.page}>
      <ImageUploader isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  );
}
