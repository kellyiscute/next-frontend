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
