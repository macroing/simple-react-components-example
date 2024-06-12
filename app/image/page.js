import { Image } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function ImagePage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <Image alt="" src="/Image.jpg" style={{ borderRadius: "50%", height: "200px", width: "200px" }} />
    </div>
  );
}
