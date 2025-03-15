import { HoverContainer } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function HoverContainerPage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <div>
        <HoverContainer hoverComponent={<div style={{ alignItems: "center", backgroundColor: "black", color: "white", display: "flex", flexDirection: "row", justifyContent: "center", padding: "10px", textAlign: "center" }}>You are hovering over me!</div>}>Hover over me</HoverContainer>
      </div>
    </div>
  );
}
