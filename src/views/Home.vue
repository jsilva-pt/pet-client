<template>
  <div class="home">
    <span class="name display-2">Adopt a Pet</span>

    <div class="pets my-5">
      <div class="available">
        <v-icon large>pets</v-icon>
        <span class="display-1 mt-2">{{ petsAvailable }}</span>
        <span class="title">available to adopt</span>
      </div>
    </div>

    <div class="pets">
      <div class="adopted">
        <v-icon large>pets</v-icon>
        <span class="display-1 mt-2">{{ pets }}</span>
        <span class="title">already adopted:</span>
      </div>
    </div>

    <div class="pets mt-3 mb-5">
      <div class="pet">
        <img width="100px" src="@/assets/dog.svg">
        <span class="display-1 mt-2">{{ dogs }}</span>
      </div>

      <div class="pet">
        <img width="100px" src="@/assets/cat.svg">
        <span class="display-1 mt-2">{{ cats }}</span>
      </div>
    </div>

    <v-btn
      color="primary"
      @click="$router.push({name: 'pets-list'})"
    >
      Find a pet
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      petsAvailable: 500,
      pets: 200,
      cats: 50,
      dogs: 150
    }
  }
}
</script>

<style scoped>
.home {
  width: 480px;
  max-width: 100%;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.name {
  text-align: center;
}

.pets {
  display: flex;
}

.available,
.adopted,
.pet {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.pet {
  width: 125px;
}
</style>
