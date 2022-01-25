<script>
  export let src
  export let alt
  export let status

</script>

<img src={src} class="{status}" {alt} >
<style>
  
  img {
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    margin-top: -2px;
    margin-left: -2px;
    object-fit: cover;
    transition: 0.1s;
    pointer-events: none;
    z-index: -1;
  }
  img.close {
    opacity: 0;
  }
  img.active, img.open {
    opacity: 1;
  }
</style>