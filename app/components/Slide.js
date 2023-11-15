export function Slide(crew) {
  const { name, images, role, bio } = crew;

  const $slide = document.createElement('li');
  $slide.id = "slide";
  $slide.classList.add('flex', 'flex-col', 'lg:flex-row', 'items-center','gap-16', 'h-full', 'max-w-screen-lg','w-full');

  const $slideInfo = document.createElement('article'); 
  $slideInfo.classList.add('flex', 'flex-col', 'justify-center','items-center','lg:items-start','gap-2', 'w-full','lg:w-3/4');
  
  const $roleSlide = document.createElement('h4');
  $roleSlide.textContent = role;
  $roleSlide.classList.add('uppercase', 'text-gray-light','text-base','sm:text-2xl','lg:text-3xl');
  
  const $nameSlide = document.createElement('h3');
  $nameSlide.textContent = name;
  $nameSlide.classList.add('uppercase', 'text-white','text-2xl','sm:text-4xl','lg:text-5xl');
  
  const $bioSlide = document.createElement('p');
  $bioSlide.textContent = bio;
  $bioSlide.classList.add('text-gray-light','w-3/5','text-center','lg:text-start','text-base','lg:text-lg');

  $slideInfo.appendChild($roleSlide);
  $slideInfo.appendChild($nameSlide);
  $slideInfo.appendChild($bioSlide);
  
  
  const $slideImage = document.createElement('div');
  $slideImage.classList.add('w-full','md:w-3/4', 'lg:w-2/4', 'lg:self-end', 'flex-1', 'lg:flex-initial');
  $slideImage.innerHTML = /*html*/`
    <picture>
      <source srcset="/app/${images.webp}" type="image/webp" loading="lazy">
      <img class="lg:w-4/5 mx-auto h-full lg:h-auto object-cover" src="/app/${images.png}" alt="${name}" loading="lazy" />
    </picture>
  `;


  $slide.appendChild($slideInfo);
  $slide.appendChild($slideImage);

  return $slide;
}