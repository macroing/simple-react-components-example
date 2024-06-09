import { Input } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function InputPage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <Input />
    </div>
  );
}
