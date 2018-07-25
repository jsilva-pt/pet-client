<template>
  <div>
    pet details
    <div>{{ $route.params.id }}</div>
    <v-btn
      color="error"
      @click="remove">
      Delete
    </v-btn>
    <v-btn
      @click="$router.push({name: 'pet-edit'})">
      Edit
    </v-btn>
  </div>
</template>

<script>
import PET_DELETE from '../graphql/PetDelete.gql'
export default {
  name: 'pet-details',
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

<style>

</style>
