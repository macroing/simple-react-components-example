import { LinkButton } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function LinkButtonPage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <LinkButton>LinkButton</LinkButton>
    </div>
  );
}
