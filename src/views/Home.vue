<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <count />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Count from '@/components/Count.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Count
  }
}
</script>
