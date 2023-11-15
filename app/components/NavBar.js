import { NavMenu } from "./NavMenu.js";

export function NavBar() {
  const $navBar = document.createElement("div");
  $navBar.id = "navbar-container";
  $navBar.classList.add(
    'sm:flex-1',
    'flex',
    'flex-col',
    'sm:flex-row',
    'items-center',
    'absolute',
    'sm:static',
    'top-0',
    'right-0',
    'z-50',
    'w-4/6',
    'sm:w-auto',
    'min-h-screen',
    'sm:min-h-0',
    'backdrop-blur-sm',
    'sm:backdrop-blur-0',
    'bg-white/20',
    'sm:bg-transparent',
    'py-6',
    'sm:py-0',
    'invisible',
    'sm:visible',
    'opacity-0',
    'sm:opacity-100',
    'transition-opacity',
    'duration-500',
    'ease-in-out',
  );

  const $closeIcon = document.createElement('img');
  $closeIcon.id = 'close-icon';
  $closeIcon.src = '/app/assets/shared/icon-close.svg';
  $closeIcon.alt = 'close-icon';
  $closeIcon.classList.add('block', 'sm:hidden', 'p-4', 'cursor-pointer', 'ml-auto');
  
  const $lineMenu = document.createElement('hr');
  $lineMenu.classList.add('flex-1','relative','left-11','z-10','hidden','md:block','invisible','lg:visible');

  $navBar.appendChild($closeIcon);
  $navBar.appendChild($lineMenu);
  $navBar.appendChild(NavMenu());

  return $navBar;
}
