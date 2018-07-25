<template>
  <div class="pets-list">
    <!-- <v-btn @click="$router.go(-1)">go back</v-btn> -->
    <ApolloQuery
      :query="require('../graphql/Pets.gql')"
      :variables="{ 'page': 1, perPage }"
    >
      <ApolloSubscribeToMore
        v-if="page > 1"
        :document="require('../graphql/Pets.gql')"
        :variables="{ page, perPage }"
        :updateQuery="onMessageAdded"
      />

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

          <v-btn
            fixed
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

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import PetsListCard from '@/components/PetsListCard'
export default {
  name: 'pets-list',
  data () {
    return {
      page: 1,
      perPage: 5
    }
  },
  components: {
    PetsListCard
  },
  mounted () {
    window.addEventListener('scroll', this.loadMore)
  },
  destroyed () {
    window.removeEventListener('scroll', this.loadMore)
  },
  methods: {
    onMessageAdded (previousResult, { subscriptionData }) {
      if (!subscriptionData) return previousResult
      return Object.assign({}, previousResult, {
        pets: [...previousResult.pets, ...subscriptionData.data.pets]
      })
    },
    loadMore (evt) {
      if ((window.innerHeight + window.pageYOffset) >= (document.body.offsetHeight - 200)) {
        // this.page++
      }
    }
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
