export function activeOptMenu() {
  const $optionMenu = document.querySelector(
    `#navbar > a[href="${!location.hash
      ? "#/"
      : location.hash.includes("#/destination")
        ? "#/destination/moon"
        : location.hash
    }"]`
  );

  if ($optionMenu) $optionMenu.classList.add("sm:border-b-4", "sm:border-b-white");
  
}

export function activeTab() {
  const $optionTab = document.querySelector(`#tabs > a[href="${location.hash}"]`);

  if ($optionTab) $optionTab.classList.remove("sm:border-b-4", "border-b-transparent");
}

export function hideTabSections() {
  const $tabSections = document.querySelectorAll(".destination");
  
  $tabSections.forEach(($section) => {
    if (!location.hash.includes($section.dataset.destination)) {
      $section.classList.add("hidden");
    }
  });
}

export function openMenuMobile() {
  const $body = document.querySelector('body');
  const $navbarContainer = document.querySelector("#navbar-container");

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.matches("#hamburger-icon")) {
      $navbarContainer.classList.remove("opacity-0", "invisible");
      $body.classList.add("overflow-hidden");
    }
    
    if (target.matches("#close-icon")) {
      $navbarContainer.classList.add("opacity-0", "invisible");
      $body.classList.remove("overflow-hidden");
    }
  });
}
