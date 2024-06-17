"use client";

import { Panel } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function PanelPage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <Panel>This is the Panel component.</Panel>
    </div>
  );
}
