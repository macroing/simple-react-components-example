"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { MenuBar } from "@macroing/simple-react-components";

export default function CustomMenuBar(props) {
  const [items, setItems] = useState([]);

  function linkFactory(className, href, onClick, children) {
    return (
      <Link className={className} href={href} onClick={onClick}>
        {children}
      </Link>
    );
  }

  useEffect(() => {
    setItems([
      {
        href: "/",
        icon: "fa fa-home",
        id: 0,
        text: "Home",
      },
      {
        icon: "fa fa-list",
        id: 1,
        items: [
          {
            items: [
              {
                href: "/button",
                text: "Button",
              },
              {
                href: "/card",
                text: "Card",
              },
              {
                href: "/carousel",
                text: "Carousel",
              },
              {
                href: "/dialog",
                text: "Dialog",
              },
              {
                href: "/footer",
                text: "Footer",
              },
              {
                href: "/form",
                text: "Form",
              },
              {
                href: "/image",
                text: "Image",
              },
              {
                href: "/image-viewer",
                text: "ImageViewer",
              },
              {
                href: "/input",
                text: "Input",
              },
              {
                href: "/jumbotron",
                text: "Jumbotron",
              },
              {
                href: "/link-button",
                text: "LinkButton",
              },
              {
                href: "/menu-bar",
                text: "MenuBar",
              },
              {
                href: "/option-list",
                text: "OptionList",
              },
              {
                href: "/pagination",
                text: "Pagination",
              },
              {
                href: "/select",
                text: "Select",
              },
              {
                href: "/tab-pane",
                text: "TabPane",
              },
              {
                href: "/table",
                text: "Table",
              },
              {
                href: "/text-area",
                text: "TextArea",
              },
            ],
          },
        ],
        text: "Components",
      },
    ]);
  }, []);

  return <MenuBar columns={1} items={items} linkFactory={linkFactory} />;
}
