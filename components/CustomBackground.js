"use client";

import { useEffect, useRef, useState } from "react";

import { Background } from "@macroing/simple-react-components";

import importedStyles from "./CustomBackground.module.css";

export default function CustomBackground(props) {
  const styles = props.styles || importedStyles;

  const urls = ["/Image.jpg", "/Image-2.jpg", "/Image-3.jpg"];

  const timeoutRef = useRef(null);

  const [url, setUrl] = useState(urls[0]);
  const [urlIndex, setUrlIndex] = useState(0);

  function nextUrlIndex() {
    setUrlIndex((previousUrlIndex) => (previousUrlIndex + 1) % urls.length);

    timeoutRef.current = setTimeout(nextUrlIndex, 5000);
  }

  useEffect(() => {
    timeoutRef.current = setTimeout(nextUrlIndex, 5000);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (urlIndex >= 0 && urlIndex < urls.length) {
      setUrl(urls[urlIndex]);
    }
  }, [urlIndex]);

  return (
    <Background style={{ transition: "background-image 0.2s ease-in-out" }} url={url}>
      <div className={styles.content}>
        <h1>Company</h1>
        <p>This is the official website for company</p>
      </div>
    </Background>
  );
}
