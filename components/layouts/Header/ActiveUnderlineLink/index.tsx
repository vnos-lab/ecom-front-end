"use client";

import React, { memo, useMemo } from "react";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./ActiveUnderlineLink.module.scss";

interface Props {
  children: React.ReactNode;
  link: string;
  path?: string;
  className?: string;
  isLinkInclude?: boolean;
}

function ActiveUnderlineLink(props: Props) {
  const {
    link,
    children,
    path = link,
    className = "",
    isLinkInclude = false,
  } = props;

  const pathname = usePathname();

  const isActive = useMemo(
    () => (isLinkInclude ? path.includes(pathname) : path === pathname),
    [isLinkInclude, path, pathname],
  );

  return (
    <Link
      href={link}
      className={classNames(className, styles.Link, isActive && styles.Active)}
    >
      {children}
    </Link>
  );
}

export default memo(ActiveUnderlineLink);
