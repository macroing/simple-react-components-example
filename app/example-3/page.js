"use client";

import { useState } from "react";

import { Accordion, Button, Chip, Header, Image, Menu, OneColumnLayout, Panel, TwoColumnLayout } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function Example3Page(props) {
  const styles = props.styles || importedStyles;

  const [isExpanded, setIsExpanded] = useState(true);
  const [page, setPage] = useState("Home");

  function renderContent() {
    return (
      <>
        {page === "About" && renderContentAbout()}
        {page === "FAQ" && renderContentFAQ()}
        {page === "Gallery" && renderContentGallery()}
        {page === "Home" && renderContentHome()}
        {page === "News" && renderContentNews()}
      </>
    );
  }

  function renderContentAbout() {
    return (
      <div className={styles.panel}>
        <Panel style={{ flexDirection: "column" }}>
          <div className={styles.section}>
            <h2>About</h2>
            <div className={styles.section}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae libero vulputate ipsum consectetur elementum eu sit amet odio. Mauris quis varius augue. Morbi ante urna, tempor eget mi nec, volutpat pretium dolor. Aenean luctus libero nec lacus semper, a pretium elit efficitur. Aliquam eu neque ac ex rhoncus rhoncus ut iaculis libero. Nulla sodales erat ac dictum viverra. In ut purus consequat, mattis sapien vel, condimentum tortor. Aenean vitae risus vel ante tincidunt ultrices. Aenean tincidunt sem ac cursus aliquam. Suspendisse commodo leo ex, scelerisque mollis lectus gravida quis. Integer id dapibus sapien. Morbi sed lectus sed dolor commodo tempus. Nam fermentum consectetur turpis nec ullamcorper. Donec maximus sed tortor et luctus. Curabitur sed ex gravida, auctor neque sit amet, malesuada urna.</div>
            <div className={styles.section}>
              <Chip theme="primary">Express.js</Chip>
              <Chip theme="primary">MongoDB</Chip>
              <Chip theme="primary">Next.js</Chip>
              <Chip theme="primary">Node.js</Chip>
              <Chip theme="primary">React.js</Chip>
            </div>
          </div>
        </Panel>
      </div>
    );
  }

  function renderContentFAQ() {
    return (
      <Accordion
        items={[
          { children: <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae libero vulputate ipsum consectetur elementum eu sit amet odio. Mauris quis varius augue. Morbi ante urna, tempor eget mi nec, volutpat pretium dolor. Aenean luctus libero nec lacus semper, a pretium elit efficitur. Aliquam eu neque ac ex rhoncus rhoncus ut iaculis libero. Nulla sodales erat ac dictum viverra. In ut purus consequat, mattis sapien vel, condimentum tortor. Aenean vitae risus vel ante tincidunt ultrices. Aenean tincidunt sem ac cursus aliquam. Suspendisse commodo leo ex, scelerisque mollis lectus gravida quis. Integer id dapibus sapien. Morbi sed lectus sed dolor commodo tempus. Nam fermentum consectetur turpis nec ullamcorper. Donec maximus sed tortor et luctus. Curabitur sed ex gravida, auctor neque sit amet, malesuada urna.</div>, title: <strong>Question #1?</strong> },
          { children: <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae libero vulputate ipsum consectetur elementum eu sit amet odio. Mauris quis varius augue. Morbi ante urna, tempor eget mi nec, volutpat pretium dolor. Aenean luctus libero nec lacus semper, a pretium elit efficitur. Aliquam eu neque ac ex rhoncus rhoncus ut iaculis libero. Nulla sodales erat ac dictum viverra. In ut purus consequat, mattis sapien vel, condimentum tortor. Aenean vitae risus vel ante tincidunt ultrices. Aenean tincidunt sem ac cursus aliquam. Suspendisse commodo leo ex, scelerisque mollis lectus gravida quis. Integer id dapibus sapien. Morbi sed lectus sed dolor commodo tempus. Nam fermentum consectetur turpis nec ullamcorper. Donec maximus sed tortor et luctus. Curabitur sed ex gravida, auctor neque sit amet, malesuada urna.</div>, title: <strong>Question #2?</strong> },
          { children: <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae libero vulputate ipsum consectetur elementum eu sit amet odio. Mauris quis varius augue. Morbi ante urna, tempor eget mi nec, volutpat pretium dolor. Aenean luctus libero nec lacus semper, a pretium elit efficitur. Aliquam eu neque ac ex rhoncus rhoncus ut iaculis libero. Nulla sodales erat ac dictum viverra. In ut purus consequat, mattis sapien vel, condimentum tortor. Aenean vitae risus vel ante tincidunt ultrices. Aenean tincidunt sem ac cursus aliquam. Suspendisse commodo leo ex, scelerisque mollis lectus gravida quis. Integer id dapibus sapien. Morbi sed lectus sed dolor commodo tempus. Nam fermentum consectetur turpis nec ullamcorper. Donec maximus sed tortor et luctus. Curabitur sed ex gravida, auctor neque sit amet, malesuada urna.</div>, title: <strong>Question #3?</strong> },
        ]}
      />
    );
  }

  function renderContentGallery() {
    return (
      <div className={styles.gallery}>
        <Image alt="" src="/Image.jpg" style={{ height: "250px", width: "250px" }} />
        <Image alt="" src="/Image-2.jpg" style={{ height: "250px", width: "250px" }} />
        <Image alt="" src="/Image-3.jpg" style={{ height: "250px", width: "250px" }} />
      </div>
    );
  }

  function renderContentHome() {
    return (
      <div className={styles.panel}>
        <Panel style={{ flexDirection: "column" }}>
          <div className={styles.section}>
            <h2>Home</h2>
            <div className={styles.section}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae libero vulputate ipsum consectetur elementum eu sit amet odio. Mauris quis varius augue. Morbi ante urna, tempor eget mi nec, volutpat pretium dolor. Aenean luctus libero nec lacus semper, a pretium elit efficitur. Aliquam eu neque ac ex rhoncus rhoncus ut iaculis libero. Nulla sodales erat ac dictum viverra. In ut purus consequat, mattis sapien vel, condimentum tortor. Aenean vitae risus vel ante tincidunt ultrices. Aenean tincidunt sem ac cursus aliquam. Suspendisse commodo leo ex, scelerisque mollis lectus gravida quis. Integer id dapibus sapien. Morbi sed lectus sed dolor commodo tempus. Nam fermentum consectetur turpis nec ullamcorper. Donec maximus sed tortor et luctus. Curabitur sed ex gravida, auctor neque sit amet, malesuada urna.</div>
          </div>
        </Panel>
      </div>
    );
  }

  function renderContentNews() {
    return (
      <>
        <div className={styles.panel}>
          <Panel style={{ flexDirection: "column" }}>
            <h2>News Item #1</h2>
            <div className={styles.section}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae libero vulputate ipsum consectetur elementum eu sit amet odio. Mauris quis varius augue. Morbi ante urna, tempor eget mi nec, volutpat pretium dolor. Aenean luctus libero nec lacus semper, a pretium elit efficitur. Aliquam eu neque ac ex rhoncus rhoncus ut iaculis libero. Nulla sodales erat ac dictum viverra. In ut purus consequat, mattis sapien vel, condimentum tortor. Aenean vitae risus vel ante tincidunt ultrices. Aenean tincidunt sem ac cursus aliquam. Suspendisse commodo leo ex, scelerisque mollis lectus gravida quis. Integer id dapibus sapien. Morbi sed lectus sed dolor commodo tempus. Nam fermentum consectetur turpis nec ullamcorper. Donec maximus sed tortor et luctus. Curabitur sed ex gravida, auctor neque sit amet, malesuada urna.</div>
          </Panel>
        </div>
        <div className={styles.panel}>
          <Panel style={{ flexDirection: "column" }}>
            <h2>News Item #2</h2>
            <div className={styles.section}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae libero vulputate ipsum consectetur elementum eu sit amet odio. Mauris quis varius augue. Morbi ante urna, tempor eget mi nec, volutpat pretium dolor. Aenean luctus libero nec lacus semper, a pretium elit efficitur. Aliquam eu neque ac ex rhoncus rhoncus ut iaculis libero. Nulla sodales erat ac dictum viverra. In ut purus consequat, mattis sapien vel, condimentum tortor. Aenean vitae risus vel ante tincidunt ultrices. Aenean tincidunt sem ac cursus aliquam. Suspendisse commodo leo ex, scelerisque mollis lectus gravida quis. Integer id dapibus sapien. Morbi sed lectus sed dolor commodo tempus. Nam fermentum consectetur turpis nec ullamcorper. Donec maximus sed tortor et luctus. Curabitur sed ex gravida, auctor neque sit amet, malesuada urna.</div>
          </Panel>
        </div>
        <div className={styles.panel}>
          <Panel style={{ flexDirection: "column" }}>
            <h2>News Item #3</h2>
            <div className={styles.section}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae libero vulputate ipsum consectetur elementum eu sit amet odio. Mauris quis varius augue. Morbi ante urna, tempor eget mi nec, volutpat pretium dolor. Aenean luctus libero nec lacus semper, a pretium elit efficitur. Aliquam eu neque ac ex rhoncus rhoncus ut iaculis libero. Nulla sodales erat ac dictum viverra. In ut purus consequat, mattis sapien vel, condimentum tortor. Aenean vitae risus vel ante tincidunt ultrices. Aenean tincidunt sem ac cursus aliquam. Suspendisse commodo leo ex, scelerisque mollis lectus gravida quis. Integer id dapibus sapien. Morbi sed lectus sed dolor commodo tempus. Nam fermentum consectetur turpis nec ullamcorper. Donec maximus sed tortor et luctus. Curabitur sed ex gravida, auctor neque sit amet, malesuada urna.</div>
          </Panel>
        </div>
      </>
    );
  }

  function renderMenu() {
    return (
      <Menu
        isExpanded={isExpanded}
        items={[
          { icon: "fa fa-home", onClick: (e) => setPage("Home"), text: page === "Home" ? <strong>Home</strong> : "Home" },
          { icon: "fa fa-info-circle", onClick: (e) => setPage("About"), text: page === "About" ? <strong>About</strong> : "About" },
          { badge: "3", icon: "fa fa-newspaper", onClick: (e) => setPage("News"), text: page === "News" ? <strong>News</strong> : "News" },
          { icon: "fa fa-images", onClick: (e) => setPage("Gallery"), text: page === "Gallery" ? <strong>Gallery</strong> : "Gallery" },
          { icon: "fa fa-question-circle", onClick: (e) => setPage("FAQ"), text: page === "FAQ" ? <strong>FAQ</strong> : "FAQ" },
        ]}
        setIsExpanded={setIsExpanded}
        style={{ width: "100%" }}
        title="Menu"
      />
    );
  }

  return (
    <main className={styles.main}>
      <OneColumnLayout
        column1={
          <Header backgroundImage={{ alt: "", src: "/Image.jpg" }} image={{ alt: "", onClick: (e) => {}, src: "/Image-2.jpg" }}>
            <div className={styles.content}>
              <div className={styles.information}>
                <h1>Project</h1>
                <span>This is the official website for the project</span>
              </div>
              <div className={styles.separator}></div>
              <div className={styles.buttons}>
                <Button theme="secondary">Visit</Button>
              </div>
            </div>
          </Header>
        }
      />
      <TwoColumnLayout column1={renderMenu()} column2={renderContent()} styleColumn2={{ gap: "40px" }} />
    </main>
  );
}
