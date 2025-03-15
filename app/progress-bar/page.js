import { ProgressBar } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function ProgressBarPage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <ProgressBar percent={50} />
    </div>
  );
}
