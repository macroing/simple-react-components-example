"use client";

import { useState } from "react";

import { OptionList } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function OptionListPage(props) {
  const styles = props.styles || importedStyles;

  const [description, setDescription] = useState("A description about John Doe.");
  const [height, setHeight] = useState(180);
  const [name, setName] = useState("John Doe");

  return (
    <div className={styles.page}>
      <OptionList
        isAllowedToViewEmpty={true}
        isEditable={true}
        options={[
          { element: "input", name: "Name", type: "text", value: name, setValue: setName },
          { element: "input", name: "Description", type: "text", value: description, setValue: setDescription },
          { element: "input", name: "Height", postfix: "cm", type: "number", value: height, setValue: setHeight },
        ]}
        title="OptionList"
      />
    </div>
  );
}
