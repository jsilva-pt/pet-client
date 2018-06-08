<template>
  <div>
    <button @click="$router.go(-1)">go back</button>
    <!-- <div v-if="loadingPets">Loading Pets...</div>
    <div :key="index" v-for="(pet, index) in pets">{{ pet.name }}</div>
    <div v-if="loadingEntities">Loading Entities...</div>
    <div :key="index" v-for="(entity, index) in entities">{{ entity.name }}</div> -->

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
        <div v-else-if="data.pets" class="result apollo">
          <div :key="index" v-for="(pet, index) in data.pets">{{ pet.name }}</div>
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
// import gql from 'graphql-tag'
export default {
  name: 'list',
  data () {
    return {
      // pets: ''
      // entities: '',
      // loadingPets: 0,
      // loadingEntities: 0
    }
  }
  // apollo: {
  //   pets: {
  //     query: gql`query {pets {name}}`,
  //     loadingKey: 'loadingPets',
  //     fetchPolicy: 'cache-and-network'
  //   },
  //   entities: {
  //     query: gql`{entities {name}}`,
  //     loadingKey: 'loadingEntities'
  //   }
  // }
}
</script>

<style>

</style>
