<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  let active = false
  function clickRestart() {
		dispatch('message');
    active = true
    setTimeout(() => {
      active = false
    }, 1000);
	}
</script>

<div class="control">
  <button class="control__btn-restart" on:click={clickRestart} class:active={active == true}>
    <img src="./static/icon/re.svg" alt="Button reload">
  </button>
</div>

<style>
  .control__btn-restart {
    width: 20px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
  } 
  .control__btn-restart img{
    width: 100%
  }
  .control__btn-restart.active{
    transition: 1s;
    transform: rotate(-360deg);
  }
</style>