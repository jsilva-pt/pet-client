<template>
  <div class="pets-add">

    <v-btn
      flat
      icon 
      color="primary"
      @click="$router.go(-1)">
      <v-icon>arrow_back</v-icon>
    </v-btn>

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
        Add
      </v-btn>
    </v-form>

  </div>
</template>

<script>
import PET_CREATE from '../graphql/PetCreate.gql'
export default {
  name: 'pets-add',
  data: () => ({
    name: null,
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
  methods: {
    submit () {
      const name = this.name
      const gender = this.gender
      const color = this.color

      this.$apollo.mutate({
        mutation: PET_CREATE,
        variables: {
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