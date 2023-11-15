export function Home() {
  const $containerHome = document.createElement('section');
  $containerHome.classList.add('flex','flex-col','lg:flex-row','justify-around','items-center','gap-7','w-4/5','lg:w-full');

  $containerHome.innerHTML = /*html*/`
    <div class="flex flex-col gap-4 lg:w-2/5">
      <h5 class="text-gray-light uppercase text-base sm:text-xl lg:text-[28px] text-center">So, you want to travel to</h5>
      <h1 class="text-white uppercase text-center text-7xl sm:text-9xl">Space</h1>
      <p class="text-gray-light text-[15px] sm:text-base lg:text-lg text-center">
        Let ’s face it; \if you want  \to go  \to space, you might  \as well genuinely go  \to
          \outer space  \and  \not hover kind of  \on the edge of it. Well sit back,  \and relax
        because we ’ll give you a truly \out of this world experience!
      </p>
    </div>

    <div class="w-full sm:w-2/5 lg:self-end grid place-items-center bg-white max-w-[150px] sm:max-w-[204px] lg:max-w-[274px] h-[150px] sm:h-[204px] lg:h-[274px] rounded-full cursor-pointer transition-all duration-300 lg:hover:outline lg:hover:outline-20 lg:hover:outline-white/20">
      <h4 class="text-custom-black uppercase text-xl sm:text-3xl">Explore</h4>
    </div>
  `;

  return $containerHome;
}