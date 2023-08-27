import React, {memo} from "react";

interface FooterTextItemProps {
  title: string;
  content: string;
}

/**
 * @description This component is used to demo how to create a component
 * @param props title: describe when hovering the mouse on
 * @param props content: content in component
 * @returns Component
 */


function FooterTextItem(props: FooterTextItemProps) {
  const {title, content} = props
  return (<div className="text-[16px] font-normal max-w-[175px]" title={title}>{content}</div>)
}

export default memo(FooterTextItem);
