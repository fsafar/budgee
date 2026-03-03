<template>
  <header class="bg-stone-200 border-b border-stone-300 px-6 py-4 flex items-center justify-between">
    <h1 class="text-xl font-semibold text-stone-900">Budgee</h1>
    <button
      class="bg-blue-200 hover:bg-blue-300 text-blue-950 font-medium px-4 py-2 rounded-lg transition-colors duration-150"
      @click="$emit('open-panel')"
    >
      + Add Expense
    </button>
  </header>
</template>

<script setup lang="ts">
defineEmits<{ 'open-panel': [] }>()
</script>
