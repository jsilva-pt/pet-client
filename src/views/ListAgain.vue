<template>
  <div>
    <button @click="$router.go(-1)">go back</button>
    <div :key="index" v-for="(pet, index) in pets">{{ pet.name }}</div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'list-again',
  data () {
    return {
      // Initialize your apollo data
      pets: ''
    }
  },
  apollo: {
    // Apollo specific options
    pets: gql`{pets {name}}`
  }
}
</script>

<style>

</style>
