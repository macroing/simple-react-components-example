"use client";

import { useState } from "react";

import { Menu } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function MenuPage(props) {
  const styles = props.styles || importedStyles;

  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={styles.page}>
      <Menu
        isExpanded={isExpanded}
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
        setIsExpanded={setIsExpanded}
        title="Menu"
      />
    </div>
  );
}
