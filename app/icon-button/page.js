import { IconButton } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function IconButtonPage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <IconButton className="fa fa-user" isLarge={true} />
    </div>
  );
}
