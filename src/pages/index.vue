<template>
        <div :style="{  background: '#fff', minHeight: '360px' }">
          <ul>
            <li
              class="liTest"
              v-for="list in lists"
              @click="clickTest(list.name)"
              :key="list.name"
            >
              name:{{list.name}}
              sex:{{list.sex}}
              点击一下试试？
            </li>
          </ul>
        </div>
</template>
<script>
export default {
  data () {
    return {
      lists: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$api.getTest({'a': 'a'}).then(res => {
        this.lists = res.list
      })
    },
    clickTest (name) {
      alert('你点击了' + name)
    }
  }
}
</script>

<style scoped>
  .liTest{
    cursor: pointer;
  }
</style>
