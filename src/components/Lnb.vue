<template>
    <div id="lnb" class="lngarea">
        {{ message }}
    </div>
</template>

<script>
export default {
  name: 'Lnb',
  data () {
    return {
      message: 'Lnb 영역'
    }
  }
}
</script>

<style>
.lngarea {
    background-color: chocolate;
    height: 100%;
}
</style>