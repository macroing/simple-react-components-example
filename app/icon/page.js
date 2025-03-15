import { Icon } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function IconPage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <Icon className="fa fa-user" />
    </div>
  );
}
