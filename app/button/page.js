import { Button } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function ButtonPage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <Button>Default Button</Button>
      <Button theme="primary">Primary Button</Button>
      <Button theme="secondary">Secondary Button</Button>
      <Button disabled>Disabled Button</Button>
    </div>
  );
}
