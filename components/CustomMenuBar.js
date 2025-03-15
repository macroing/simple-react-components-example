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
                href: "/breadcrumb",
                text: "Breadcrumb",
              },
              {
                href: "/button",
                text: "Button",
              },
              {
                href: "/button-link",
                text: "ButtonLink",
              },
              {
                href: "/calendar",
                text: "Calendar",
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
                href: "/chat",
                text: "Chat",
              },
              {
                href: "/chip",
                text: "Chip",
              },
              {
                href: "/context-menu",
                text: "ContextMenu",
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
                href: "/hover-container",
                text: "HoverContainer",
              },
              {
                href: "/icon",
                text: "Icon",
              },
              {
                href: "/icon-button",
                text: "IconButton",
              },
              {
                href: "/image",
                text: "Image",
              },
              {
                href: "/image-uploader",
                text: "ImageUploader",
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
                href: "/label",
                text: "Label",
              },
              {
                href: "/link-button",
                text: "LinkButton",
              },
              {
                href: "/menu",
                text: "Menu",
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
                href: "/popup-menu",
                text: "PopupMenu",
              },
              {
                href: "/progress-bar",
                text: "ProgressBar",
              },
              {
                href: "/select",
                text: "Select",
              },
              {
                href: "/spinner",
                text: "Spinner",
              },
              {
                href: "/stars",
                text: "Stars",
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
                href: "/task-bar",
                text: "TaskBar",
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
      {
        icon: "fa fa-project-diagram",
        id: 2,
        items: [
          {
            items: [
              {
                href: "/example-1",
                text: "Example #1",
              },
              {
                href: "/example-2",
                text: "Example #2",
              },
              {
                href: "/example-3",
                text: "Example #3",
              },
            ],
          },
        ],
        text: "Examples",
      },
    ]);
  }, []);

  return <MenuBar columns={1} items={items} linkFactory={linkFactory} theme="primary" />;
}
