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
                href: "/accordion",
                text: "Accordion",
              },
              {
                href: "/background",
                text: "Background",
              },
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
                href: "/chip",
                text: "Chip",
              },
              {
                href: "/dialog",
                text: "Dialog",
              },
              {
                href: "/file-input-button-label",
                text: "FileInputButtonLabel",
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
                href: "/header",
                text: "Header",
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
                href: "/one-column-layout",
                text: "OneColumnLayout",
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
                href: "/panel",
                text: "Panel",
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
              {
                href: "/three-column-layout",
                text: "ThreeColumnLayout",
              },
              {
                href: "/tooltip-container",
                text: "TooltipContainer",
              },
              {
                href: "/two-column-layout",
                text: "TwoColumnLayout",
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
