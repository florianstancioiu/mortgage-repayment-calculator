<script setup lang="ts">
defineProps<{ title: string; prefix?: string; suffix?: string }>();
</script>

<template>
  <div>
    <p>{{ title }}</p>
    <div>
      <p v-if="prefix">{{ prefix }}</p>
      <input type="text" />
      <p v-if="suffix">{{ suffix }}</p>
    </div>
  </div>
</template>
