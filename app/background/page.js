import { Background } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function BackgroundPage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <Background url="/Image.jpg">
        <div className={styles.container}>
          <h1>Hello, World!</h1>
        </div>
      </Background>
    </div>
  );
}
