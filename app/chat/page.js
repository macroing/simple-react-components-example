"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { ChatContainer, ChatUtilities } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function ChatPage(props) {
  const styles = props.styles || importedStyles;

  const [chatConfiguration, setChatConfiguration] = useState(null);
  const [chatHandler, setChatHandler] = useState(null);
  const [chats, setChats] = useState([]);

  function linkFactory(href, text) {
    return <Link href={href}>{text}</Link>;
  }

  useEffect(() => {
    setChatConfiguration(ChatUtilities.createChatConfiguration());
    setChatHandler(ChatUtilities.createChatHandler());
    setChats([ChatUtilities.createChatDefault()]);
  }, []);

  return (
    <div className={styles.page}>
      <ChatContainer chatConfiguration={chatConfiguration} chatHandler={chatHandler} chats={chats} linkFactory={linkFactory} setChats={setChats} />
    </div>
  );
}
