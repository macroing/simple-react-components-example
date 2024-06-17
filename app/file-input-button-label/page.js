import { FileInputButtonLabel } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function FileInputButtonLabelPage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <FileInputButtonLabel>Default FileInputButtonLabel</FileInputButtonLabel>
      <FileInputButtonLabel theme="primary">Primary FileInputButtonLabel</FileInputButtonLabel>
      <FileInputButtonLabel theme="secondary">Secondary FileInputButtonLabel</FileInputButtonLabel>
    </div>
  );
}
