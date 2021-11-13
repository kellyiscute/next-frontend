export {
  draculaColors,
  foregrounds as draculaForegrounds,
  backgrounds as draculaBackgrounds,
} from "./dracula-colors";

export function getRandomArbitrary(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}
