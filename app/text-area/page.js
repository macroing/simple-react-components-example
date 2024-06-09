import { TextArea } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function TextAreaPage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <TextArea rows={10} />
    </div>
  );
}
