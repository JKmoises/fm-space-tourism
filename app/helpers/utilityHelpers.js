const PATH_IMAGE = "https://raw.githubusercontent.com/JKmoises/fm-space-tourism/main/app"

function cleanContainer($element) {
  while ($element.firstElementChild){
    $element.removeChild($element.firstElementChild)
  }
}


const sleep = (seconds = 1) => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, seconds * 1000);
  })
}

export {
  PATH_IMAGE,
  cleanContainer,
  sleep,
}