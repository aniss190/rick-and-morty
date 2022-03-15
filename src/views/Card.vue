<template>
  <div class="card-container">
    <button @click=$router.back()>Back to the list</button>
    <div class="card">
      <img :src="card.image" alt="" class="image">
      <span><strong>Name :</strong> {{card.name}} ({{card.species}})</span>
      <span><strong>Id :</strong> {{card.id}}</span>
      <span v-if="card.gender"><strong>Gender :</strong> {{card.gender}}</span>
      <span v-if="card.status"><strong>Status :</strong> {{card.status}}</span>
      <span v-if="card.type"><strong>Type :</strong> {{card.type}}</span>
      <span v-if="card.location.name"><strong>Location :</strong> {{card.location.name}}</span>
      <span v-if="card.origin.name"><strong>Origin :</strong> {{card.origin.name}}</span>
      <span v-if="card.created"><strong>Created :</strong> {{card.created}}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => {
    return {
      card: {}
    }
  },
  created() {
    axios.get('https://rickandmortyapi.com/api/character/'+this.$route.params.id)
        .then(response => {
          this.card = response.data
        })
  }
}
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-direction: column;
  button {
    width: 200px;
  }
  .card {
    display: flex;
    flex-direction: column;
    width: 250px;
    margin: 100px auto;
    border: solid 1px #3A3A3DFF;
    padding: 20px;
    text-align: left;
    background: #59555a;
    .image {
      width: 250px;
      height: 250px;
      margin-bottom: 15px;
      border-radius: 50%;
    }
  }
}
</style>
