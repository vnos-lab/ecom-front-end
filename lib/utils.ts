import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// NOTE: this is the default file of Shadcn UI
// eslint-disable-next-line import/prefer-default-export
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
