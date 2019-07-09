<template>
  <div class="home">
    <ul>
      <li v-for="(item,index) in lists" 
        @click="choose(index)"
        :class="{active: index == currentIndex && currentIndex !== ''}"
        :key="index">
        {{ item }}
      </li>
    </ul>
    <input type="button" @click="add" value="添加" />
    <ul>
      <li v-for="(item, index) in targetLists" :key="index">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      lists: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      targetLists: [],
      currentIndex: ''
    }
  },
  methods: {
    choose (index) {
      this.currentIndex = index
    },
    add () {
      if (this.currentIndex === '') {
        return
      }
      this.targetLists.push(this.lists[this.currentIndex])
    }
  }
}
</script>

<style scoped>
li.active {
  background-color: green;
}
</style>
