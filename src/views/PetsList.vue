<template>
  <div class="pets-list">
    <!-- <v-btn @click="$router.go(-1)">go back</v-btn> -->
    <ApolloQuery
      :query="require('../graphql/Pets.gql')"
      :variables="{ pets }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occured</div>

        <!-- Result -->
        <div v-else-if="data && data.pets" class="result apollo">
          <pets-list-card
            :key="index" v-for="(pet, index) in data.pets"
            :pet="pet"
            class="mb-2"
          ></pets-list-card>
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>

    <v-btn
      absolute
      dark
      fab
      bottom
      right
      color="primary"
      @click="$router.push({name: 'pets-add'})"
    >
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
import PetsListCard from '@/components/PetsListCard'
export default {
  name: 'pets-list',
  data () {
    return {
      pets: ''
    }
  },
  components: {
    PetsListCard
  }
}
</script>

<style scoped>
.pets-list {
  position: relative;
  width: 480px;
  max-width: 100%;
  margin: 0 auto;
  padding: 16px;
}
</style>
