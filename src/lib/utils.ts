import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Capitalizes the first letter of each word and retains spaces.
 * Handles hyphens and underscores by converting them to spaces.
 * @param str - The input string to convert
 * @returns The string with words capitalized and spaces preserved
 */
export function toTitleCase(str: string): string {
  if (!str) return "";

  return (
    str
      // 1. Insert a space before existing uppercase letters (fixes camelCase)
      .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
      // 2. Replace hyphens and underscores with spaces
      .replace(/[-_]+/g, " ")
      // 3. Split by spaces, but capture them so we don't lose them
      .split(/(\s+)/)
      // 4. Capitalize only actual words, leave space strings alone
      .map((word) => {
        // If it's just spaces, return it as-is
        if (/^\s+$/.test(word)) return word;
        // Capitalize the first letter, lowercase the rest
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      // 5. Join everything back together
      .join("")
  );
}
