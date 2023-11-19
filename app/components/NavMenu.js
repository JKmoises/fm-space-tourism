const menuOptions = [
  {
    name: "Home",
    url: "#/",
  },
  {
    name: "Destination",
    url: "#/destination/moon",
  },
  {
    name: "Crew",
    url: "#/crew",
  },
  {
    name: "Technology",
    url: "#/technology/launch-vehicle",
  },
];

export function NavMenu() {
  const $navMenu = document.createElement("nav");
  $navMenu.id = "navbar";
  $navMenu.classList.add(
    "flex-1",
    "flex",
    "flex-col",
    "sm:flex-row",
    "gap-8",
    "sm:justify-center",
    "sm:items-center",
    "sm:backdrop-blur-sm",
    "sm:bg-white/20",
    "h-16",
    "min-h-full",
    "w-full",
    "px-8",
    "pt-8",
    "sm:pt-0"
  );

  let html = '';

  menuOptions.forEach((option,i) => {
    html += /*html*/`
      <a
        class="flex gap-2 items-center h-full text-white text-lg uppercase border-b-4 sm:hover:border-b-4 border-b-transparent sm:hover:border-b-white transition-colors"
        href="${option.url}"
        >
        <b class="sm:hidden lg:block">0${i}</b> ${option.name}
      </a>
    `;
  });

  $navMenu.innerHTML = html;


  return $navMenu;
}
