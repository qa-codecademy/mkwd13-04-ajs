import { words, getRandomWord } from "./messageService.js";

export function helloGreeting(name) {
  console.log(`${getRandomWord(words.helloVariants)} ${name}`);
}

export function goodbyeGreeting(name) {
  console.log(`${getRandomWord(words.goodbyeVariants)} ${name}`);
}
