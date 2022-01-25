
<script content='module'>
  import { get } from 'svelte/store'
  import { writable } from 'svelte-local-storage-store'
  import { findIndex, genTime} from '../utils'
  export let params
  export let gameMode = 0
  export function editGameMode(mode) { gameMode = 0; gameMode = mode }
  let bestLoopLS = writable('bestLoopLS', 0);
  let bestLoop = get(bestLoopLS)[gameMode]
  let time = []

  function genModalParam(params) {
    if (params.time != undefined) {
      let indexArr = findIndex(gameMode, params.gameMods)
      time = params.time[indexArr].loops
    }
    bestLoop = get(bestLoopLS)[gameMode]
  }

  function editModal(param) {
    params.action = param
  }

  $: params && genModalParam(params)
</script>

{#if params.action != 'close' && params.action != '' && params.action != undefined}
    <div class="blur  modal-wrapper ">
      <div class="modal">

        <div class="modal-head">
          <h2 class="modal-title">
            {#if params.action == 'endGame'} Поздравляем, вы закончили режим "{gameMode} cards" 
            {:else if params.action == 'gameModeSelection'} Выбор режима игры
            {:else} Ошибка
            {/if}
          </h2>
          <button class="modal-btn-close" on:click={() => editModal('close')}>X</button>
        </div>
        <div class="modal-content">
          {#if params.action == 'endGame'} 
            <p>ваше время: <span class="time">{genTime(time[time.length - 1])}</span></p>
            {#if bestLoop != undefined && gameMode > 0}
              <p>лучшее ваше время: <span class="time">{genTime(bestLoop)} </span></p>
            {/if} 
            <p>Создал игру <a href="https://github.com/Gariell">https://github.com/Gariell </a></p>
          {:else if params.action == 'gameModeSelection'} 
            <div class="gamemods-items">
              {#each params.gameMods as item}
                <button class="gamemods-item" on:click={() => editGameMode(item)}><span>{item} cards</span></button>
              {/each}
            </div>
          {:else} не правильные параметры модального окна

          {/if}
        </div>
        {#if params.action == 'endGame'}
          <div class="modal-bottom">
            <button class="modal-bottom__btn" on:click={() => editGameMode(gameMode)}>повторить игру "{gameMode} карт"</button> 
            <button class="modal-bottom__btn" on:click={() => editModal('gameModeSelection')}>выбрать другой режим</button>
          </div>
        {/if}
    </div>
  </div>  
{/if}


<style>
  .blur {
    height: 100vh;
    background: rgba(255, 255, 255, 1);
    backdrop-filter: blur(5px); 
  }
  .modal-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: #ff4000de;
  }
	.modal {
		width: fit-content;
		height: fit-content;
    padding: 40px 60px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.20);
    background: #fff;
		text-transform: uppercase;
	}
	.modal-head {
		display: flex;
		justify-content: space-between;
    font-weight: 300;
	}
	.modal-content {
    padding: 20px 0;
		font-size: 1.3em;	
	}
	.modal-content .time {
		font-size: 1.1em;
	}
	.modal-bottom {
		display: flex;
		justify-content: space-between;
    font-size: 1.2em;
    font-weight: 300;
	}
	.modal-bottom__btn {
		text-transform: uppercase;
	}
  .modal-btn-close {
    position: absolute;
    right: 5px;
    top: 5px;
    height: 20px;
    width: 20px;
    font-weight: 500;
    font-size: 1.1em;
  }
	.modal-title {
		font-weight: 400;
		font-size: 1.3em;
	}
  .gamemods-items {
    display: grid;
    grid-template-columns:  1fr 1fr;
    gap: 20px;
  }
  .gamemods-item{
    margin: 0;
    padding: 10px 0;
    border: 1px solid  #ff3e00;
    text-transform: uppercase;
    color: #ff3e00;
  }
</style>