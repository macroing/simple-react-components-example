import { Label } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function LabelPage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <Label>Label</Label>
    </div>
  );
}
