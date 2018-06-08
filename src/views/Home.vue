<template>
  <div class="home">
    <img src="@/assets/logo.png" alt="Vue.js PWA">
    <div>{{ $t('hello') }}</div>
    <div>150</div>
    <div>50</div>
    <button @click="$router.push({name: 'list'})">see list</button>
    <button @click="$router.push({name: 'list-again'})">see list again</button>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>

</style>
