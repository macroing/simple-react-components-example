"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { ButtonLink } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function ButtonLinkPage(props) {
  const styles = props.styles || importedStyles;

  const MotionLink = motion(Link);

  function linkFactory(className, disabled, rest, children) {
    return (
      <MotionLink className={className} disabled={disabled} transition={disabled ? undefined : { type: "spring", stiffness: 500 }} whileHover={disabled ? undefined : { scale: 1.03 }} {...rest}>
        {children}
      </MotionLink>
    );
  }

  return (
    <div className={styles.page}>
      <ButtonLink href="/" linkFactory={linkFactory}>
        Default ButtonLink
      </ButtonLink>
      <ButtonLink href="/" linkFactory={linkFactory} theme="primary">
        Primary ButtonLink
      </ButtonLink>
      <ButtonLink href="/" linkFactory={linkFactory} theme="secondary">
        Secondary ButtonLink
      </ButtonLink>
      <ButtonLink disabled href="/" linkFactory={linkFactory}>
        Disabled ButtonLink
      </ButtonLink>
    </div>
  );
}
