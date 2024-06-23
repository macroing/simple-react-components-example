"use client";

import { Button, Card, Form, Input, OneColumnLayout, TextArea } from "@macroing/simple-react-components";

import CustomBackground from "@/components/CustomBackground";

import importedStyles from "./page.module.css";

export default function Example1Page(props) {
  const styles = props.styles || importedStyles;

  function renderForm() {
    return (
      <div className={styles.form}>
        <div className={styles.title}>
          <h2>Contact Us</h2>
        </div>
        <div className={styles.content}>
          <Form>
            <div>
              <label>E-mail address</label>
              <Input />
            </div>
            <div>
              <div>
                <div>
                  <label>First name</label>
                  <Input />
                </div>
                <div>
                  <label>Last name</label>
                  <Input />
                </div>
              </div>
            </div>
            <div>
              <label>Message</label>
              <TextArea rows={10} />
            </div>
            <Button theme="secondary">Send</Button>
          </Form>
        </div>
      </div>
    );
  }

  function renderPortfolio() {
    return (
      <div className={styles.portfolio}>
        <div className={styles.title}>
          <h2>Portfolio</h2>
        </div>
        <div className={styles.content}>
          <Card buttons={[<Button theme="secondary">Read more...</Button>]} image={{ alt: "", src: "/Image.jpg" }} onClick={(e) => {}} paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae libero vulputate ipsum consectetur elementum eu sit amet odio. Mauris quis varius augue. Morbi ante urna, tempor eget mi nec, volutpat pretium dolor. Aenean luctus libero nec lacus semper, a pretium elit efficitur. Aliquam eu neque ac ex rhoncus rhoncus ut iaculis libero. Nulla sodales erat ac dictum viverra. In ut purus consequat, mattis sapien vel, condimentum tortor. Aenean vitae risus vel ante tincidunt ultrices. Aenean tincidunt sem ac cursus aliquam. Suspendisse commodo leo ex, scelerisque mollis lectus gravida quis. Integer id dapibus sapien. Morbi sed lectus sed dolor commodo tempus. Nam fermentum consectetur turpis nec ullamcorper. Donec maximus sed tortor et luctus. Curabitur sed ex gravida, auctor neque sit amet, malesuada urna." title="Project #1"></Card>
          <Card buttons={[<Button theme="secondary">Read more...</Button>]} image={{ alt: "", src: "/Image-2.jpg" }} onClick={(e) => {}} paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae libero vulputate ipsum consectetur elementum eu sit amet odio. Mauris quis varius augue. Morbi ante urna, tempor eget mi nec, volutpat pretium dolor. Aenean luctus libero nec lacus semper, a pretium elit efficitur. Aliquam eu neque ac ex rhoncus rhoncus ut iaculis libero. Nulla sodales erat ac dictum viverra. In ut purus consequat, mattis sapien vel, condimentum tortor. Aenean vitae risus vel ante tincidunt ultrices. Aenean tincidunt sem ac cursus aliquam. Suspendisse commodo leo ex, scelerisque mollis lectus gravida quis. Integer id dapibus sapien. Morbi sed lectus sed dolor commodo tempus. Nam fermentum consectetur turpis nec ullamcorper. Donec maximus sed tortor et luctus. Curabitur sed ex gravida, auctor neque sit amet, malesuada urna." title="Project #2"></Card>
          <Card buttons={[<Button theme="secondary">Read more...</Button>]} image={{ alt: "", src: "/Image-3.jpg" }} onClick={(e) => {}} paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae libero vulputate ipsum consectetur elementum eu sit amet odio. Mauris quis varius augue. Morbi ante urna, tempor eget mi nec, volutpat pretium dolor. Aenean luctus libero nec lacus semper, a pretium elit efficitur. Aliquam eu neque ac ex rhoncus rhoncus ut iaculis libero. Nulla sodales erat ac dictum viverra. In ut purus consequat, mattis sapien vel, condimentum tortor. Aenean vitae risus vel ante tincidunt ultrices. Aenean tincidunt sem ac cursus aliquam. Suspendisse commodo leo ex, scelerisque mollis lectus gravida quis. Integer id dapibus sapien. Morbi sed lectus sed dolor commodo tempus. Nam fermentum consectetur turpis nec ullamcorper. Donec maximus sed tortor et luctus. Curabitur sed ex gravida, auctor neque sit amet, malesuada urna." title="Project #3"></Card>
        </div>
      </div>
    );
  }

  function renderServices() {
    return (
      <div className={styles.services}>
        <div className={styles.title}>
          <h2>Services</h2>
        </div>
        <div className={styles.content}>
          <Card buttons={[<Button theme="secondary">Read more...</Button>]} image={{ alt: "", src: "/Image.jpg" }} onClick={(e) => {}} paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae libero vulputate ipsum consectetur elementum eu sit amet odio. Mauris quis varius augue. Morbi ante urna, tempor eget mi nec, volutpat pretium dolor. Aenean luctus libero nec lacus semper, a pretium elit efficitur. Aliquam eu neque ac ex rhoncus rhoncus ut iaculis libero. Nulla sodales erat ac dictum viverra. In ut purus consequat, mattis sapien vel, condimentum tortor. Aenean vitae risus vel ante tincidunt ultrices. Aenean tincidunt sem ac cursus aliquam. Suspendisse commodo leo ex, scelerisque mollis lectus gravida quis. Integer id dapibus sapien. Morbi sed lectus sed dolor commodo tempus. Nam fermentum consectetur turpis nec ullamcorper. Donec maximus sed tortor et luctus. Curabitur sed ex gravida, auctor neque sit amet, malesuada urna." title="Service #1"></Card>
          <Card buttons={[<Button theme="secondary">Read more...</Button>]} image={{ alt: "", src: "/Image-2.jpg" }} onClick={(e) => {}} paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae libero vulputate ipsum consectetur elementum eu sit amet odio. Mauris quis varius augue. Morbi ante urna, tempor eget mi nec, volutpat pretium dolor. Aenean luctus libero nec lacus semper, a pretium elit efficitur. Aliquam eu neque ac ex rhoncus rhoncus ut iaculis libero. Nulla sodales erat ac dictum viverra. In ut purus consequat, mattis sapien vel, condimentum tortor. Aenean vitae risus vel ante tincidunt ultrices. Aenean tincidunt sem ac cursus aliquam. Suspendisse commodo leo ex, scelerisque mollis lectus gravida quis. Integer id dapibus sapien. Morbi sed lectus sed dolor commodo tempus. Nam fermentum consectetur turpis nec ullamcorper. Donec maximus sed tortor et luctus. Curabitur sed ex gravida, auctor neque sit amet, malesuada urna." title="Service #2"></Card>
        </div>
      </div>
    );
  }

  return (
    <main className={styles.main}>
      <CustomBackground />
      <OneColumnLayout column1={renderServices()} />
      <OneColumnLayout column1={renderPortfolio()} />
      <OneColumnLayout column1={renderForm()} />
    </main>
  );
}
