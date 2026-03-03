<template>
  <div class="bg-white rounded-xl border border-stone-200 p-4 flex items-center justify-between shadow-sm">
    <div class="flex flex-col gap-1">
      <span class="font-medium text-stone-900">{{ expense.name }}</span>
      <div class="flex items-center gap-2">
        <span
          :class="categoryClass"
          class="text-xs font-medium px-2 py-0.5 rounded-full capitalize"
        >
          {{ expense.category }}
        </span>
        <span class="text-xs text-stone-400">{{ formattedDate }}</span>
      </div>
    </div>
    <span class="text-lg font-semibold text-blue-700">
      ${{ expense.amount.toFixed(2) }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { Expense, ExpenseCategory } from '~/types/expense'

const props = defineProps<{ expense: Expense }>()

const categoryColors: Record<ExpenseCategory, string> = {
  food:          'bg-amber-100 text-amber-700',
  transport:     'bg-sky-100 text-sky-700',
  entertainment: 'bg-indigo-100 text-indigo-700',
  shopping:      'bg-teal-100 text-teal-700',
  health:        'bg-rose-100 text-rose-600',
  housing:       'bg-stone-200 text-stone-700',
  other:         'bg-slate-100 text-slate-600',
}

const categoryClass = computed(() => categoryColors[props.expense.category])

const formattedDate = computed(() =>
  new Date(props.expense.date + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
)
</script>
