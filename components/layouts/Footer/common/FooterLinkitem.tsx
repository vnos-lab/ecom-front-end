import { UrlObject } from "url";
import React, { memo } from "react";
import Link from "next/link";

interface FooterLinkItemProps {
  title: string;
  content: string;
  href: string | UrlObject;
}

/**
 * @description This component is used to demo how to create a component
 * @param props title: describe when hovering the mouse on
 * @param props content: content in component
 * @param props href: path on click
 * @returns Component
 */

function FooterLinkItem(props: FooterLinkItemProps) {
  const { title, content, href } = props;
  return (
    <Link className="text-[16px] font-normal" href={href} title={title}>
      {content}
    </Link>
  );
}

export default memo(FooterLinkItem);
