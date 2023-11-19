import { CircleTabs } from "../components/CircleTabs.js";
import { Technology } from "../components/Technology.js";

export function Technologies(technologies = []) {
  const $technologies = document.createElement("section");
  $technologies.id = "technologies";
  $technologies.classList.add(
    "flex",
    "flex-col",
    "justify-center",
    "sm:justify-start",
    "gap-4"
  );

  const $title = document.createElement("h5");
  $title.innerHTML = /*html*/ `<b class="text-gray-light">03</b> Space Launch 101`;
  $title.classList.add(
    "flex",
    "justify-center",
    "sm:justify-start",
    "gap-4",
    "text-white",
    "uppercase",
    "sm:ml-10",
    "lg:w-5/6",
    "lg:ml-auto",
    "mt-5"
  );

  const $technologiesContainer = document.createElement("div");
  $technologiesContainer.classList.add(
    "lg:self-end",
    "flex",
    "flex-col",
    "lg:flex-row",
    "justify-end",
    "items-center",
    "gap-10",
    "h-full",
    "w-full",
    "lg:w-5/6",
  );
  $technologiesContainer.appendChild(CircleTabs());
  technologies.forEach((technology) =>
    $technologiesContainer.appendChild(Technology(technology))
  );

  $technologies.appendChild($title);
  $technologies.appendChild($technologiesContainer);

  return $technologies;
}
