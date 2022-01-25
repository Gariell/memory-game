<script>
  import { writable } from 'svelte-local-storage-store'
  import { get } from 'svelte/store'
  import { genTime, findIndex} from '../utils'
  export let statusGame, gameMode, cardLimit;

  let loopsArrObjTemp = []; let loopsArrObj 
  for (let i = 0; i < cardLimit.length; i++) loopsArrObjTemp[i] = { mode: cardLimit[i], loops: [] }
  let loopsLS = writable('loopsLS', loopsArrObjTemp); 

  if (get(loopsLS) == undefined || get(loopsLS).length == 0 ) loopsArrObj = loopsArrObjTemp
  else loopsArrObj = get(loopsLS)
  
  let loopsArr = [], bestLoopsObj = {}; 
  cardLimit.forEach(el => {bestLoopsObj[el] = ""; }); 
  let bestLoopLS = writable('bestLoopLS', bestLoopsObj);
  let time = '00:00:00', seconds = 0, timerInterval
  bestLoopsObj = get(bestLoopLS)

  function checkStatusGame(status) {
    if (status == 'launched') resetTimer() 
    else if (status == 'start') timer()
    else if (status == 'end') {
      clearInterval(timerInterval);
      genLoops()
    }
  }  

  function checkBestResult(loop) {
    if (bestLoopsObj[gameMode] < loop && bestLoopsObj[gameMode] != '' && bestLoopsObj[gameMode] != 0 && bestLoopsObj[gameMode] != undefined) {
      return bestLoopsObj[gameMode]
    } else {
      return loop
    }
  }

  function changeArr() {
    let index = findIndex(gameMode, cardLimit)
    if (index != -1) {
      loopsArr = loopsArrObj[index].loops
    }
  }

  function genLoops() {
    let index = loopsArr.length > 0 ? loopsArr.length : 0;
    loopsArr[index] = (seconds)
    loopsArr = loopsArr.slice(-10)
    loopsArrObj[findIndex(gameMode, cardLimit)].loops = loopsArr
    loopsArr.forEach(el => {
      bestLoopsObj[gameMode] = checkBestResult(el)
    });
    checkLS('set')
  }

  function timer() {
    if (statusGame === 'start') timerInterval = setInterval(() => {
      seconds++
      time = genTime(seconds)
    }, 1000);
  }

  function resetTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    time = "00:00:00";
  }

  function resetStatistic() {
    loopsArr.length = 0;
    loopsArrObj[findIndex(gameMode, cardLimit)].loops = loopsArr;
    loopsLS.set(loopsArrObj);
  }
  
  function checkLS(params){
    if (params == 'get') {
      let data = get(loopsLS)
      loopsArr = data.slice(0, 10)
      bestLoopsObj = get(bestLoopLS)
    } else {
      loopsLS.set(loopsArrObj);
      bestLoopLS.set(bestLoopsObj)
    }
  }

  $: statusGame && checkStatusGame(statusGame)  
  $: gameMode && changeArr()
  changeArr()
</script>



<div class="time">
  <div class="time-loops">
    {#if loopsArr != undefined && loopsArr.length > 0 }
      <div class="time-head">
        <span class="time-head__title">last games</span>
        <button class="time-loops__btn-reset" on:click={resetStatistic}>reset</button>
      </div>
      {#each loopsArr as loop, index}
        <div class="time-loop">
          <span>{index + 1}.</span><span>{genTime(loop)}</span>
        </div>
      {/each}
    {/if}
  </div>
  
  <div class="time-counter-wrapper">
    <div class="time-counter"><span>time:</span><time>{time}</time></div>
    <div class="time-best"><span>best time</span><time>{gameMode != 0 && gameMode != undefined ? genTime(bestLoopsObj[gameMode]) : '00:00:00'}</time></div>
  </div>
</div>

<style>
  .time {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-weight: 100;
  }
  .time-head {
    display: flex;
    justify-content: space-between;
    font-size: 0.9em;
    padding-bottom: 5px;
  }
  .time-counter-wrapper {
    margin: 15px 0;
  }
  .time-counter {
    position: relative;
    font-size: 1em;
  }
  .time-best {
    position: relative;
    display: flex;
    justify-content: space-between;
    font-size: 1em;
  }
  .time-best time {
    width: 64px;
    font-size: 1.1em; 
  }
  .time-counter time {
    position: absolute;
    width: 64px;
    left: 100%;
    top: 50%;
    transform: translate(-100%, -50%);
    font-size: 1.1em;
  }
  .time-loops {
    margin-top: auto;
    padding-bottom: 15px;
  }
  .time-loops__btn-reset {
    font-weight: 100;
    text-transform: uppercase;
  }
  .time-loops {
    text-align: right;
    border-bottom: 1px solid #ff571f;
  }
  .time-loop {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
</style>