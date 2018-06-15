<template>
  <div class="pets-list-card card">
    <img v-if="pet.images" :src="pet.images[0]" />
    <div class="pet-info pa-2">
      <span class="title">{{ pet.name }}</span>
      <span>{{ pet.gender }}</span>
      <span v-if="pet.color">{{ pet.color.join(', ') }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pets-list-card',
  props: {
    pet: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.pets-list-card {
  display: flex;
}

.pet-info {
  display: flex;
  flex-direction: column;
}
</style>
