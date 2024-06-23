"use client";

import { Button, Jumbotron } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function JumbotronPage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.jumbotron}>
      <Jumbotron description="The official example website for @macroing/simple-react-components" title="Example">
        <Button theme="secondary">
          <span aria-hidden className="fa fa-github"></span> GitHub
        </Button>
      </Jumbotron>
    </div>
  );
}
