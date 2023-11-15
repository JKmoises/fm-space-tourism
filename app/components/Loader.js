export function Loader() {
  const $loader = document.createElement('img');
  $loader.id = 'loader';
  $loader.src = 'app/assets/loader.svg';
  $loader.alt = 'Cargando...';
  $loader.classList.add('block','mx-auto','w-16','h-16');
 
  return $loader;

}