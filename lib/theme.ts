/**
 * Tailwind CSS theme
 * @see https://tailwindcss.com/docs/theme
 * @description This file is used to provide Tailwind CSS theme to use in JavaScript.
 */

import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "@/tailwind.config";

export default resolveConfig(tailwindConfig).theme;
