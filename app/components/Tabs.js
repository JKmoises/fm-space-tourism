const tabs = [
  {
    name: "Moon",
    url: "#/destination/moon",
  },
  {
    name: "Mars",
    url: "#/destination/mars",
  },
  {
    name: "Europa",
    url: "#/destination/europa",
  },
  {
    name: "Titan",
    url: "#/destination/titan",
  },
];

export function Tabs() {
  const $tabs = document.createElement('nav');
  $tabs.id = 'tabs';
  $tabs.classList.add('flex', 'justify-center','gap-6','lg:ml-72');

  let html = '';

  tabs.forEach(tab => {
    html += /*html*/`
      <a
        class="text-white text-lg uppercase border-b-4 sm:hover:border-b-4 border-b-transparent sm:hover:border-b-white pb-1"
        href="${tab.url}">
        ${tab.name}
      </a>
    `;
  });

  $tabs.innerHTML = html;



  return $tabs;
}