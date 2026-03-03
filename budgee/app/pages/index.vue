<template>
  <AppHeader @open-panel="isPanelOpen = true" />

  <main class="max-w-2xl mx-auto px-4 py-8">
    <ExpenseList />
  </main>

  <ExpensePanel v-model="isPanelOpen" />
</template>

<script setup lang="ts">
const isPanelOpen = ref(false)
</script>
