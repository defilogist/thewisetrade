<template>
<div class="flex mb-4 items-center">
  <div class="mr-6 text-blue font-bold">
    <NuxtLink
      class="text-blue hover:text-darkblue"
      to="/"
      v-if="!isActivePage('index')"
    >
      <img class="" src="~/assets/images/lion.png" width="30" />
    </NuxtLink>
  </div>
  <div class="flex-1">
  </div>
  <div class="">
    <a
      href="https://twitter.com/defilogist"
      target="_blank"
      v-if="!isActivePage('index')"
    >
      <img src="~/assets/images/twitter.png" width="25" />
    </a>
  </div>
</div>
</template>


<script setup>
import { useRoute } from 'vue-router'
function isActivePage (page) {
  const route = useRoute()
  return page === route.name
}
</script>
