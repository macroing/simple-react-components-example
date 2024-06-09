import { Select } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function SelectPage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <Select>
        <option value="Value 1">Value 1</option>
        <option value="Value 2">Value 2</option>
        <option value="Value 3">Value 3</option>
      </Select>
    </div>
  );
}
