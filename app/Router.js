import {  Destinations } from "./pages/Destinations.js";
import { Home } from "./pages/Home.js";
import { Crews } from "./pages/Crews.js";
import { Loader } from "./components/Loader.js";

import { ajax } from "./helpers/ajax.js";
import { activeTab, hideTabSections } from "./helpers/menuHelpers.js";
import { cleanContainer, sleep } from "./helpers/utilityHelpers.js";

export async function Router() {
  const d = document;
  const { hash } = location;

  const $root = d.getElementById('root');
  const $main = d.getElementById('main');


  $main.innerHTML = '';
  $root.classList.remove('hero-image-home', 'hero-image-destination', 'hero-image-crew', 'hero-image-technology');
  
  if (!hash || hash === '#/') { 
    $root.classList.add('hero-image-home');

    $main.appendChild(Home());
  }
  
  
  if (hash.includes('#/destination')) { 
    $root.classList.add('hero-image-destination');
    cleanContainer($main);
    $main.appendChild(Loader());
    await sleep(.8);

    await ajax({
      url: "./data.json",
      cbSuccess: (json) => {
        const destinations = json.destinations;
        $main.appendChild(Destinations(destinations));
        $main.classList.add('items-stretch');

        if (d.querySelector('#loader')) d.querySelector('#loader').classList.add('hidden');
        
        
      }
    });
    
    
    hideTabSections();
    activeTab();
  }
  
  if (hash === '#/crew') { 
    $root.classList.add('hero-image-crew');
    
    await ajax({
      url: "./data.json",
      cbSuccess: (json) => {
        const crews = json.crew;
        $main.appendChild(Crews(crews));
        $main.classList.add('items-stretch');


      }
    });
  }
  
  if (hash === '#/technology') { 
    $root.classList.add('hero-image-technology');
  }


}