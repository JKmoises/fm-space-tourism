import { PATH_IMAGE } from "../helpers/utilityHelpers.js";

export function Destination(destination) {
  const { name, images, description, distance, travel } = destination;

  const $destination = document.createElement('div');
  $destination.classList.add(`destination`, 'flex', 'flex-col', 'lg:flex-row', 'items-center', 'gap-8', 'lg:gap-14');
  $destination.dataset.destination = `${name.toLocaleLowerCase()}`

  $destination.innerHTML = /*html*/`
    <div class="flex-1">
      <picture>
        <source srcset="${PATH_IMAGE}/${images.webp}" type="image/webp" loading="lazy">
        <img class="w-4/5 mx-auto" src="${PATH_IMAGE}/${images.png}" alt="${name}" loading="lazy" />
      </picture>
    </div>

    <section class="flex-1 flex flex-col items-center lg:items-start gap-2">
      <h2 class="text-white uppercase text-center text-7xl sm:text-8xl">${name}</h2>
      <p class="text-white sm:w-4/6 lg:w-5/6 text-center lg:text-start">${description}</p>

      <hr class="mt-8 text-gray-dark w-full">

      <section class="flex flex-col sm:flex-row justify-center lg:justify-start gap-8 sm:gap-14 mt-4 w-full pb-6">
        <div class="text-center lg:text-left">
          <p class="subheading2 uppercase text-gray-light tracking-widest">Avg. Distance</p>
          <p class="subheading1 uppercase text-white">${distance}</p>
        </div>

        <div class="text-center lg:text-left">
          <p class="subheading2 uppercase text-gray-light tracking-widest">Est. Travel Time</p>
          <p class="subheading1 uppercase text-white">${travel}</p>
        </div>
      </section>
    </section>
  `;



  return $destination;
}