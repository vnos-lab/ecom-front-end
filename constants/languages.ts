/**
 * @description This file is containing all the constants related to our Application's languages
 * @variable Languages - This enum is containing all the languages that we support
 * @variable MAPPING_LANGUAGES - This object is mapping the language key to the language name
 * @variable ARRAY_LANGUAGES - This array is containing all the language keys
 */

export enum Languages {
  en = "en",
  vi = "vi",
}

export const MAPPING_LANGUAGES = {
  [Languages.en]: "English",
  [Languages.vi]: "Tiếng Việt",
};

export const ARRAY_LANGUAGES: (keyof typeof Languages)[] = Object.keys(
  Languages,
) as (keyof typeof Languages)[];
