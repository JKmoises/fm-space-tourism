import { PATH_IMAGE, replaceSpaceText } from "../helpers/utilityHelpers.js";

export function Technology(technology) {
  const { name, images, description } = technology;

  const mediaQuery = window.matchMedia("(min-width: 1024px)");
  const imagePath = mediaQuery.matches ? images.portrait : images.landscape;

  const $technology = document.createElement("section");
  $technology.classList.add(
    "technology",
    "flex",
    "flex-col-reverse",
    "lg:flex-row",
    "justify-end",
    "items-center",
    "gap-6",
    "pb-5",
    "lg:pb-0"
  );
  $technology.dataset.technology = replaceSpaceText(name);

  $technology.innerHTML = /*html*/`
    <div class="flex flex-col items-center lg:items-start text-gray-light text-center lg:text-left">
      <p class="uppercase">The terminology…</p>
      <h3 class="uppercase text-white">${name}</h3>
      <p class="sm:w-3/6 px-4">${description}</p>
    </div>

    <div class="w-full">
        <img class="w-full object-cover object-center" src="${PATH_IMAGE}/${imagePath}" alt="${name}" loading="lazy" />
      </picture>
    </div>
  `;

  return $technology;
}
