"use client";

import { Button, Jumbotron, OneColumnLayout, Panel } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function Example2Page(props) {
  const styles = props.styles || importedStyles;

  return (
    <main className={styles.main}>
      <div className={styles.jumbotron}>
        <Jumbotron description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" title="Title">
          <Button theme="secondary">
            <span aria-hidden className="fa fa-envelope"></span> E-Mail
          </Button>
        </Jumbotron>
      </div>
      <OneColumnLayout
        column1={
          <Panel style={{ flexDirection: "column" }}>
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae libero vulputate ipsum consectetur elementum eu sit amet odio. Mauris quis varius augue. Morbi ante urna, tempor eget mi nec, volutpat pretium dolor. Aenean luctus libero nec lacus semper, a pretium elit efficitur. Aliquam eu neque ac ex rhoncus rhoncus ut iaculis libero. Nulla sodales erat ac dictum viverra. In ut purus consequat, mattis sapien vel, condimentum tortor. Aenean vitae risus vel ante tincidunt ultrices. Aenean tincidunt sem ac cursus aliquam. Suspendisse commodo leo ex, scelerisque mollis lectus gravida quis. Integer id dapibus sapien. Morbi sed lectus sed dolor commodo tempus. Nam fermentum consectetur turpis nec ullamcorper. Donec maximus sed tortor et luctus. Curabitur sed ex gravida, auctor neque sit amet, malesuada urna.</p>
          </Panel>
        }
      />
    </main>
  );
}
