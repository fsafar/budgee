<template>
  <!-- Backdrop -->
  <Transition name="backdrop">
    <div
      v-if="modelValue"
      class="fixed inset-0 bg-black/20 z-40"
      @click="close"
    />
  </Transition>

  <!-- Panel -->
  <Transition name="panel">
    <aside
      v-if="modelValue"
      class="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl z-50 flex flex-col"
    >
      <!-- Panel header -->
      <div class="bg-blue-50 border-b border-blue-200 px-6 py-4 flex items-center justify-between">
        <h2 class="text-lg font-semibold text-stone-900">Add Expense</h2>
        <button
          class="text-stone-400 hover:text-stone-600 text-xl leading-none"
          @click="close"
        >
          ✕
        </button>
      </div>

      <!-- Form area -->
      <div class="flex-1 overflow-y-auto px-6 py-6 bg-blue-50">
        <ExpenseForm @submit="handleSubmit" @cancel="close" />
      </div>
    </aside>
  </Transition>
</template>

<script setup lang="ts">
import type { NewExpense } from '~/types/expense'

const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()

const { addExpense } = useExpenses()

const close = () => emit('update:modelValue', false)

const handleSubmit = (expense: NewExpense) => {
  addExpense(expense)
  close()
}
</script>

<style scoped>
.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 200ms ease;
}
.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

.panel-enter-active,
.panel-leave-active {
  transition: transform 300ms ease-in-out;
}
.panel-enter-from,
.panel-leave-to {
  transform: translateX(100%);
}
</style>
