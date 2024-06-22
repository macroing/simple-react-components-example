"use client";

import { useState } from "react";

import { Button, PopupMenu } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function PopupMenuPage(props) {
  const styles = props.styles || importedStyles;

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.page}>
      <div className={styles.relative}>
        <Button onClick={(e) => setIsVisible(true)}>Show PopupMenu</Button>
        <PopupMenu
          isVisible={isVisible}
          items={[
            {
              href: "/",
              icon: "fa fa-user",
              text: "Profile",
            },
            {
              badge: "1",
              href: "/",
              icon: "fa fa-comment",
              text: "Messages",
            },
            {
              badge: "1",
              href: "/",
              icon: "fa fa-bell",
              text: "Notifications",
            },
            {
              href: "/",
              icon: "fa fa-cog",
              text: "Settings",
            },
            {
              icon: "fa fa-sign-out",
              onClick: (e) => {},
              text: "Log out",
            },
          ]}
          setIsVisible={setIsVisible}
          title="Account"
        />
      </div>
    </div>
  );
}
