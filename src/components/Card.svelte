<script content='module'>
  import Image from "./elements/Image.svelte";
  export function openCard(number, id) {
    if (statusGame === 'start' || statusGame === 'preStart') {
      open != true ? cardActive = [name, id, number] : ''
    }
  }
  export let cardActive = [];
  export let status, statusGame
  export let name;
  export let id;
  export let number;
  export let open; 
  $: src = `./static/img/` + name + ".jpg";
  
</script>

<div class="card {status}" data-id={id} on:click={() => openCard(number, id, name)} class:open={open === true} >
  <div class="flipper">
    <div class="front"></div>
    <div class="back"><Image src={src} alt={name} status={status} /></div>
  </div>
</div>

<style>
  .card { 
    position: relative;
    cursor: pointer;
    perspective: 2000px;      
  }
  .card.open {
    transition: 0.5s;
    opacity: 0.3;
  }
  .card.active {
    pointer-events: none;
  }
  .flipper {
    position: relative;
    height: 100%;
    width: 100%;
    transition: 0.2s; 
    transform-style: preserve-3d;
    border-radius: 5px; 
  }
  .front, .back {
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    position: absolute;
    left: 0;
    right: 0;
    overflow: hidden;
    background: #fff;
    border-radius: 5px;
  }
  .back {
    transform: rotateY(180deg);
  }
  .front {
    z-index: 2;
  }
  .card.active .flipper {
    transform: rotateY(180deg);
  }
</style>