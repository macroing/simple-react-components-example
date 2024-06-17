"use client";

import { Chip } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function ChipPage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <Chip onClick={(e) => {}}>Default Chip</Chip>
      <Chip onClick={(e) => {}} theme="primary">
        Primary Chip
      </Chip>
      <Chip onClick={(e) => {}} theme="secondary">
        Secondary Chip
      </Chip>
    </div>
  );
}
