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
