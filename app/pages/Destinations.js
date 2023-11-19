import { Destination } from "../components/Destination.js";
import { Tabs } from "../components/Tabs.js";

export function Destinations(destinations = []) {
  const $destinations = document.createElement('section');
  $destinations.id = "destinations";
  $destinations.classList.add('flex', 'flex-col', 'justify-center', 'gap-4', 'container', 'p-6', 'pb-0');
  
  
  const $title = document.createElement('h5');
  $title.innerHTML = /*html*/`<b class="text-gray-light">01</b> Pick your destination`;
  $title.classList.add('flex', 'justify-center', 'sm:justify-start','gap-4', 'text-white','uppercase');
  $destinations.appendChild($title);
  $destinations.appendChild(Tabs());
  destinations.forEach(destination => $destinations.appendChild(Destination(destination)));



  return $destinations;
}