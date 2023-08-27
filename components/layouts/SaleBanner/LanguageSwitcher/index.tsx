"use client";

import React, { memo, useCallback, useMemo } from "react";
import { Globe } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  ARRAY_LANGUAGES,
  Languages,
  MAPPING_LANGUAGES,
} from "@/constants/languages";
import STORAGE_KEYS from "@/constants/storageKeys";
import { cn } from "@/lib/utils";

import styles from "./LanguageSwitcher.module.scss";

function LanguageSwitcher() {
  const currentLanguage = useMemo(
    () =>
      (typeof window !== "undefined" &&
        (localStorage.getItem(
          STORAGE_KEYS.APP_LANGUAGE,
        ) as keyof typeof Languages)) ||
      Languages.en,
    [],
  );

  const onChangeLanguage = useCallback((language: Languages) => {
    console.log(language); // eslint-disable-line no-console

    /**
     * TODO: Handle change language
     * 1. Change language in localStorage
     * 2. Change language in jotai
     * 3. Redirect to current page with new language
     */
  }, []);

  return (
    <Select onValueChange={onChangeLanguage}>
      <SelectTrigger
        className={cn(
          "w-auto h-auto p-0 bg-transparent border-transparent md:ml-auto font-poppins text-[14px] leading-[21px]",
          styles.Text,
        )}
      >
        <SelectValue>
          <span className="hidden md:block">
            {MAPPING_LANGUAGES[Languages[currentLanguage]]}
          </span>

          <div className="flex items-center md:hidden">
            <Globe className="mr-[2px]" size={24} />

            <span className="md:hidden uppercase">
              {Languages[currentLanguage]}
            </span>
          </div>
        </SelectValue>
      </SelectTrigger>

      <SelectContent align="end">
        {ARRAY_LANGUAGES.map((language) => (
          <SelectItem value={language} key={language}>
            {MAPPING_LANGUAGES[language]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default memo(LanguageSwitcher);
