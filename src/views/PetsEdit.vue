<template>
  <div class="pets-add">

    <ApolloQuery
      :query="require('../graphql/Pet.gql')"
      :variables="{ _id }"
      @result="yo"
    >

      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occured</div>

        <!-- Result -->
        <div v-else-if="data && data.pet" class="result apollo">
          <v-form ref="form">
            <v-text-field
              label="Name"
              v-model="name"
            ></v-text-field>

            <v-radio-group v-model="gender">
              <v-radio
                v-for="gender in genders"
                :key="gender.code"
                :label="gender.label"
                :value="gender.code"
              ></v-radio>
            </v-radio-group>

            <v-checkbox
              hide-details
              v-for="item in colors"
              v-model="color"
              :key="item.code"
              :label="item.label"
              :value="item.code"
              class="mt-0"
            ></v-checkbox>

            <v-btn
              color="primary"
              @click="submit()">
              Update
            </v-btn>
          </v-form>
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
    <!-- <v-btn
      flat
      icon 
      color="primary"
      @click="$router.go(-1)">
      <v-icon>arrow_back</v-icon>
    </v-btn>-->

  </div>
</template>

<script>
import PET_UPDATE from '../graphql/PetUpdate.gql'
export default {
  name: 'pets-add',
  data: () => ({
    _id: null,
    name: 'null',
    gender: 'male',
    color: [],
    genders: [
      {
        label: 'Male',
        code: 'male'
      }, {
        label: 'Female',
        code: 'female'
      }
    ],
    colors: [
      {
        code: 'white',
        label: 'White'
      },
      {
        code: 'black',
        label: 'Black'
      }
    ]
  }),
  created () {
    this._id = this.$route.params.id
  },
  methods: {
    yo (yo) {
      this.name = yo.data.pet.name
      this.gender = yo.data.pet.gender
      this.color = yo.data.pet.color
    },
    submit () {
      const _id = this._id
      const name = this.name
      const gender = this.gender
      const color = this.color

      this.$apollo.mutate({
        mutation: PET_UPDATE,
        variables: {
          _id,
          name,
          gender,
          color
        },
        update: (store, { data: { newTag } }) => {
          this.$router.go(-1)
        }
      })
    }
  }
}
</script>

<style scoped>
.pets-add {
  position: relative;
  width: 480px;
  max-width: 100%;
  margin: 0 auto;
  padding: 16px;
}
</style>