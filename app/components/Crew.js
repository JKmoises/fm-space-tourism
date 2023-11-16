import { Slides } from "./Slides.js";

export function Crew(crews = []) {
  const $section = document.createElement("section");
  $section.classList.add("relative", "h-full");

  crews.forEach((_, i) => {
    const $inputRadio = document.createElement("input");
    $inputRadio.type = "radio";
    $inputRadio.name = "slides";
    $inputRadio.id = `slide-${i + 1}`;
    $inputRadio.classList.add("hidden");
    if (i === 0) $inputRadio.checked = true;

    $section.appendChild($inputRadio);
  });

  const $slidesNav = document.createElement("aside");
  $slidesNav.classList.add(
    "absolute",
    "top-64",
    "sm:top-48",
    "lg:top-auto",
    "lg:bottom-20",
    "flex",
    "justify-center",
    "gap-4",
    "w-full",
    "lg:w-auto"
  );
  $slidesNav.id = "slides-nav";

  crews.forEach((_, i) => {
    const $slidesDot = document.createElement("label");
    $slidesDot.htmlFor = `slide-${i + 1}`;
    $slidesDot.id = `dot-${i + 1}`;
    $slidesDot.classList.add(
      "inline-block",
      "bg-white/20",
      "w-3",
      "h-3",
      "rounded-full",
      "cursor-pointer"
    );

    $slidesNav.appendChild($slidesDot);
  });

  $section.appendChild(Slides(crews));
  $section.appendChild($slidesNav);

  return $section;
}
