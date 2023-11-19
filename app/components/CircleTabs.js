const circleTabs = [
  {
    name: "1",
    url: "#/technology/launch-vehicle",
  },
  {
    name: "2",
    url: "#/technology/spaceport",
  },
  {
    name: "3",
    url: "#/technology/space-capsule",
  },
];

export function CircleTabs() {
  const $circleTabs = document.createElement('nav');
  $circleTabs.id = 'circle-tabs';
  $circleTabs.classList.add('flex','flex-row','lg:flex-col', 'justify-center', 'gap-6');

  let html = '';

  circleTabs.forEach(tab => {
    html += /*html*/`
      <a
        class="flex justify-center items-center text-white text-3xl uppercase border rounded-full w-14 h-14 sm:hover:bg-white sm:hover:text-custom-black font-[Bellefair] transition duration-500"
        href="${tab.url}">
        ${tab.name}
      </a>
    `;
  });

  $circleTabs.innerHTML = html;



  return $circleTabs;
}