"use client";

import { useState } from "react";

import { Calendar } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function CalendarPage(props) {
  const styles = props.styles || importedStyles;

  const [endDate, setEndDate] = useState(null);
  const [startDate, setStartDate] = useState(null);

  return (
    <div className={styles.page}>
      <Calendar endDate={endDate} setEndDate={setEndDate} setStartDate={setStartDate} startDate={startDate} />
    </div>
  );
}
