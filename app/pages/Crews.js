import { Crew } from "../components/Crew.js";


export function Crews(crews = []) {
  const $crews = document.createElement('section');
  $crews.classList.add('flex', 'flex-col','max-w-screen-lg','overflow-hidden');

  const $title = document.createElement('h5');
  $title.innerHTML = /*html*/`<b class="text-gray-light">02</b> Meet your crew`;
  $title.classList.add('flex', 'justify-center', 'sm:justify-start', 'gap-4', 'text-white', 'uppercase','p-4','lg:py-2','lg:px-0');

  

  $crews.appendChild($title);
  $crews.appendChild(Crew(crews));

  return $crews;
}