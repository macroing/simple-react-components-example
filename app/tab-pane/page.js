"use client";

import { TabPane } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function TabPanePage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <TabPane tabIndex={0} tabs={["Tab 1", "Tab 2", "Tab 3"]}>
        {(currentTabIndex, currentTab) => <div>{currentTab}</div>}
      </TabPane>
    </div>
  );
}
