import { Spinner } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function SpinnerPage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <Spinner />
    </div>
  );
}
