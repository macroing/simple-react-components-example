"use client";

import { useState } from "react";

import { Button, Dialog } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function ButtonPage(props) {
  const styles = props.styles || importedStyles;

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.page}>
      <Button onClick={(e) => setIsVisible(true)}>Show Dialog</Button>
      <Dialog isVisible={isVisible} setIsVisible={setIsVisible} title="Dialog">
        This is the Dialog component.
      </Dialog>
    </div>
  );
}
