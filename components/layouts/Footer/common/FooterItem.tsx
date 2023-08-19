import React, {memo, ReactNode} from "react";

interface FooterItemProps {
  title: string;
  children: ReactNode;
}

/**
 * @description This component is used to demo how to create a component
 * @param props title: title column in footer
 * @param props children: content column in footer
 * @returns Component
 */


function FooterItem(props: FooterItemProps) {
  const {children, title} = props
  return (
    <div className="flex flex-col flex-nowrap items-start gap-y-6 text-[#FAFAFA]">
      <div className="text-[20px] font-medium leading-5">{title}</div>
      <div className="flex flex-col gap-y-4 flex-wrap">
        {children}
      </div>
    </div>
  )
}

export default memo(FooterItem);
