<template>
  <section class="flex flex-col gap-3">
    <div v-if="expenses.length" class="flex justify-between items-center px-1">
      <span class="text-sm text-stone-500">{{ expenses.length }} expense(s)</span>
      <span class="text-sm font-semibold text-blue-700">
        Total: ${{ totalAmount.toFixed(2) }}
      </span>
    </div>

    <ExpenseCard v-for="expense in expenses" :key="expense.id" :expense="expense" />

    <div
      v-if="!expenses.length"
      class="text-center py-16 text-blue-200 flex flex-col items-center gap-2"
    >
      <span class="text-4xl">🪨</span>
      <p class="text-sm text-stone-400">No expenses yet. Add one to get started.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const { expenses, totalAmount } = useExpenses()
</script>
