import langColors from "resources/lang-colors.json";

export {
  draculaColors,
  foregrounds as draculaForegrounds,
  backgrounds as draculaBackgrounds,
} from "./dracula-colors";

export function getRandomArbitrary(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

const languageMappings: { [k: string]: string } = {
  viml: "vimscript",
  jinja2: "jinja",
  sh: "shell",
};

export function getLanguageColor(lang: string): string {
  const processed = lang.toLowerCase().replace(" ", "");
  return (
    (langColors as any)[languageMappings[processed] ?? processed] ?? "#9ea2a7"
  );
}

export function getReadableNumber(num: number): string {
  const digits = num.toString();
  let result = "";
  for (let i = 0; i < digits.length; i++) {
    if ((i + 1) % 3 === 0) {
      result += digits.charAt(i) + ", ";
    } else {
      result += digits.charAt(i);
    }
  }
  return result.substring(0, result.length - 2);
}
