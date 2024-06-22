"use client";

import { useState } from "react";

import { Stars } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function StarsPage(props) {
  const styles = props.styles || importedStyles;

  const [selectedStars, setSelectedStars] = useState(3);

  return (
    <div className={styles.page}>
      <Stars disabled={false} selectedStars={selectedStars} setSelectedStars={setSelectedStars} starCount={5} />
    </div>
  );
}
