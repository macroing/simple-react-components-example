"use client";

import { Button, Card } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function CardPage(props) {
  const styles = props.styles || importedStyles;

  function onClickCard(e) {}

  return (
    <div className={styles.page}>
      <Card buttons={[<Button theme="secondary">Button 1</Button>, <Button theme="secondary">Button 2</Button>]} image={{ alt: "", src: "/Image.jpg" }} onClick={onClickCard} paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae libero vulputate ipsum consectetur elementum eu sit amet odio. Mauris quis varius augue. Morbi ante urna, tempor eget mi nec, volutpat pretium dolor. Aenean luctus libero nec lacus semper, a pretium elit efficitur. Aliquam eu neque ac ex rhoncus rhoncus ut iaculis libero. Nulla sodales erat ac dictum viverra. In ut purus consequat, mattis sapien vel, condimentum tortor. Aenean vitae risus vel ante tincidunt ultrices. Aenean tincidunt sem ac cursus aliquam. Suspendisse commodo leo ex, scelerisque mollis lectus gravida quis. Integer id dapibus sapien. Morbi sed lectus sed dolor commodo tempus. Nam fermentum consectetur turpis nec ullamcorper. Donec maximus sed tortor et luctus. Curabitur sed ex gravida, auctor neque sit amet, malesuada urna." title="Lorem ipsum"></Card>
    </div>
  );
}
