import { Accordion } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function AccordionPage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <Accordion
        items={[
          { children: <div>Hello, World!</div>, title: "Item 1" },
          { children: <div>Hello, World!</div>, title: "Item 2" },
          { children: <div>Hello, World!</div>, title: "Item 3" },
        ]}
      />
    </div>
  );
}
