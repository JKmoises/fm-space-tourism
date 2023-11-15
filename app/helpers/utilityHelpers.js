export function cleanContainer($element){
  while ($element.firstElementChild){
    $element.removeChild($element.firstElementChild)
  }
}


export const sleep = (seconds = 1) => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, seconds * 1000);
  })
}