import { NavBar } from "./NavBar.js";
import { PATH_IMAGE } from "../helpers/utilityHelpers.js";



export function Header(){
  const $header = document.createElement('header');
  $header.classList.add('flex', 'items-center', 'justify-between', 'pt-6','ps-6');
  
  const $logo = document.createElement('img');
  $logo.src = `${PATH_IMAGE}/assets/shared/logo.svg`;
  $logo.alt = "Logo";
  $logo.classList.add('pr-6');

  const $hamburgerIcon = document.createElement('img');
  $hamburgerIcon.id = "hamburger-icon";
  $hamburgerIcon.src = `${PATH_IMAGE}/assets/shared/icon-hamburger.svg`;
  $hamburgerIcon.alt = "hamburger-icon";
  $hamburgerIcon.classList.add('block','sm:hidden','p-4','cursor-pointer');

  
  $header.appendChild($logo);
  $header.appendChild($hamburgerIcon);
  $header.appendChild(NavBar());

  return $header;
  
}