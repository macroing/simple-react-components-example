"use client";

import { Button, Header } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function HeaderPage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <Header backgroundImage={{ alt: "", onClickEdit: (e) => {}, src: "/Image.jpg" }} image={{ alt: "", onClick: (e) => {}, onClickEdit: (e) => {}, src: "/Image.jpg" }}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "0px 50px 0px 0px", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1>Jane Doe</h1>
            <span>Sweden</span>
          </div>
          <div style={{ flexGrow: "1" }}></div>
          <div>
            <Button>Logout</Button>
          </div>
        </div>
      </Header>
    </div>
  );
}
