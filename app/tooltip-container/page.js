import { TooltipContainer } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function TooltipContainerPage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <TooltipContainer tooltip="Hello, World!">Hello, World!</TooltipContainer>
    </div>
  );
}
