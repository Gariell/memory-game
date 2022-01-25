

// second in 00:00:00
function genTime(seconds) {
  let sec = 0,min = 0,hrs = 0
  hrs = Math.floor(seconds / 60 / 60);
  min = Math.floor(seconds / 60) - (min * 60);
  sec = seconds % 60
  return formatTime(hrs,min,sec)
}
function formatTime(hrs,min,sec) {
  return [hrs.toString().padStart(2, '0'), min.toString().padStart(2, '0'), sec.toString().padStart(2, '0') ].join(':'); 
}

// сортировка 
function sortRandom(array) {
  let newArray = array.slice()
  return newArray.sort((a, b) => Math.random() - 0.5);
}

function findIndex(el, arr) {
  if (el != 0) {
    return arr.indexOf(el)
  } else {
    console.log('findIndex() - error')
  }
}

export { genTime, sortRandom, findIndex}