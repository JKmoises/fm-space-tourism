export function activeOptMenu(optionMenu = "destination", defaultOption = "moon") {
  const $optionMenu = document.querySelector(
    `#navbar > a[href="${!location.hash
      ? "#/"
      : location.hash.includes(`#/${optionMenu}`)
        ? `#/${optionMenu}/${defaultOption}`
        : location.hash
    }"]`
  );

  if ($optionMenu) $optionMenu.classList.add("sm:border-b-4", "sm:border-b-white");
  
}


export function activeTab(id = "tabs",isCircleTab = false) {
  const $optionTab = document.querySelector(`#${id} > a[href="${location.hash}"]`);

  if ($optionTab) $optionTab.classList.remove("sm:border-b-4", "border-b-transparent");

  if ($optionTab && isCircleTab) {
    $optionTab.classList.remove("text-white");
    $optionTab.classList.add("bg-white", "text-custom-black");
  }
}

export function hideTabSections(sections = "") {
  const $tabSections = document.querySelectorAll(`.${sections}`);

  $tabSections.forEach(($section) => {
    if (!location.hash.includes($section.dataset[sections])) {
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
