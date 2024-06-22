"use client";

import { useState } from "react";

import { TaskBar } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function TaskBarPage(props) {
  const styles = props.styles || importedStyles;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.page}>
      <TaskBar
        isAccountingForMenuBar={true}
        isExpanded={isExpanded}
        items={[
          { icon: "fa fa-user", text: "Users" },
          { icon: "fa fa-cog", text: "Settings" },
          { icon: "fa fa-question", text: "Help" },
        ]}
        setIsExpanded={setIsExpanded}
      />
    </div>
  );
}
