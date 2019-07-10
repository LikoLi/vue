<template>
    <div>
      <button type="button" @click="add()">添加</button>
      User
    </div>
</template>

<script>
export default {
  name: 'user',
  methods: {
    add () {
      this.$router.push('/add')
    }
  }
}
</script>

<style scoped>

</style>
