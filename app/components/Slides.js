import { Slide } from "./Slide.js";

export function Slides(crews = []) {
  const $slides = document.createElement('ul');
  $slides.id = "slides";
  $slides.classList.add('flex', 'h-full', 'w-full-400', 'transition-transform','duration-500');

  crews.forEach(crew => $slides.appendChild(Slide(crew)));
  
  

  return $slides;
}