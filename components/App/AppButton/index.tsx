"use client";

import React, { memo, useCallback } from "react";

import emptyFn from "@/constants/emptyFn";
import { cn } from "@/lib/utils";

interface AppButtonProps {
  children: React.ReactNode;
  value?: unknown;
  onClick?: ({
    event,
    value,
  }: {
    event: React.MouseEvent<HTMLButtonElement>;
    value?: unknown;
  }) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

function AppButton(props: AppButtonProps) {
  const {
    children,
    onClick = emptyFn,
    value,
    className = "",
    ...others
  } = props;

  const onCallback = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick({ event, value });
    },
    [onClick, value],
  );

  return (
    <button
      type="button"
      onClick={onCallback}
      className={cn(
        "flex items-center justify-center min-h-[3.5rem] px-[3rem] bg-mx-red-1 text-white font-poppins rounded-[0.25rem] font-medium",
        className,
      )}
      {...others}
    >
      {children}
    </button>
  );
}

export default memo(AppButton);
