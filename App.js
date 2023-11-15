import { Router } from "./app/Router.js";
import { Header } from "./app/components/Header.js";
import { Main } from "./app/components/Main.js";
import { activeOptMenu, openMenuMobile } from "./app/helpers/menuHelpers.js";

export function App() {
  const $root = document.getElementById("root");


  $root.innerHTML = "";

  $root.appendChild(Header());
  $root.appendChild(Main());

  Router();
  activeOptMenu();
  openMenuMobile();
}
