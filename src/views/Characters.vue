<template>
  <div class="characters">
    <div class="search">
      <div class="checkboxes">
        <input id="alive" type="checkbox" v-model="alive">
        <label for="alive">Alive</label>
        <input id="dead" type="checkbox" v-model="dead">
        <label for="dead">Dead</label>
        <input id="unknown" type="checkbox" v-model="unknown">
        <label for="unknown">Unknown</label>
      </div>
      <input type="text" placeholder="rick, morty, etc.." v-model="searchInput">
      <button @click="search">Search</button>
    </div>
    <div class="list">
      <div class="item" v-for="(item, index) in cards" :key="index" @click="openCard(item.id)">
        <img :src="item.image" alt="" class="image">
        <span class="name">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      searchInput: '',
      alive: false,
      dead: false,
      unknown: false,
    }
  },
  mounted() {
    this.$store.dispatch("getCards");
  },
  computed: {
    cards: {
      get() {
        return this.$store.state.cards
      }
    }
  },
  methods: {
    search() {
      //TODO
    },
    openCard(index){
      this.$router.push({ name: 'card', params: { id: index }})
    }
  }
}
</script>

<style lang="scss" scoped>
.characters {
  display: flex;
  flex-direction: column;
  .search {
    display: flex;
    margin: auto;
    .checkboxes {
      display: flex;
      margin-right: 50px;
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    .item {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      width: 150px;
      margin: 15px;
      background: #59555a;
      border: solid 1px #3A3A3DFF;
      padding: 10px;
      .image {
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
      .name {
        margin-top: 10px;
      }
    }
  }
}

</style>
