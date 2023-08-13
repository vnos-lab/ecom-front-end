"use client";

import React, { memo, useMemo } from "react";

import { SelectTrigger, SelectValue } from "@/components/ui/select";

import { Languages, MAPPING_LANGUAGES } from "@/constants/languages";
import STORAGE_KEYS from "@/constants/storageKeys";
import { cn } from "@/lib/utils";

import styles from "./CurrentLanguage.module.scss";

function CurrentLanguage() {
  const currentLanguage = useMemo(
    () =>
      (typeof window !== "undefined" &&
        (localStorage.getItem(
          STORAGE_KEYS.APP_LANGUAGE,
        ) as keyof typeof Languages)) ||
      Languages.en,
    [],
  );

  return (
    <SelectTrigger
      className={cn(
        "w-auto h-auto p-0 bg-transparent border-transparent ml-auto font-poppins text-[14px] leading-[21px]",
        styles.Text,
      )}
    >
      <SelectValue
        placeholder={MAPPING_LANGUAGES[Languages[currentLanguage]]}
      />
    </SelectTrigger>
  );
}

export default memo(CurrentLanguage);
