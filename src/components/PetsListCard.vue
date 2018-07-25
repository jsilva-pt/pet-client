<template>
  <router-link
    tag="div"
    :to="{name: 'pet-details', params: { id: pet._id }}"
  >
    <div class="pets-list-card card">
      <img v-if="pet.images" :src="pet.images[0]" />
      <div class="pet-info pa-2">
        <span class="title">{{ pet.name }}</span>
        <span>{{ pet.gender }}</span>
        <span v-if="pet.color">{{ pet.color.join(', ') }}</span>

        <!-- <v-btn
          color="error"
          @click="remove">
          Delete
        </v-btn> -->

      </div>
    </div>
  </router-link>
</template>

<script>
import PET_DELETE from '../graphql/PetDelete.gql'
export default {
  name: 'pets-list-card',
  props: {
    pet: {
      type: Object,
      required: true
    }
  },
  methods: {
    remove () {
      console.log('remove', this.pet._id)
      const _id = this.pet._id
      this.$apollo.mutate({
        mutation: PET_DELETE,
        variables: {
          _id
        }
      })
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
