<template>
  <form class="flex flex-col gap-5" @submit.prevent="handleSubmit">
    <!-- Name -->
    <div class="flex flex-col gap-1">
      <label class="text-sm font-medium text-stone-800">Name</label>
      <input
        v-model="form.name"
        type="text"
        placeholder="e.g. Coffee"
        class="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <p v-if="errors.name" class="text-xs text-red-400">{{ errors.name }}</p>
    </div>

    <!-- Amount -->
    <div class="flex flex-col gap-1">
      <label class="text-sm font-medium text-stone-800">Amount ($)</label>
      <input
        v-model.number="form.amount"
        type="number"
        min="0.01"
        step="0.01"
        placeholder="0.00"
        class="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <p v-if="errors.amount" class="text-xs text-red-400">{{ errors.amount }}</p>
    </div>

    <!-- Category -->
    <div class="flex flex-col gap-1">
      <label class="text-sm font-medium text-stone-800">Category</label>
      <select
        v-model="form.category"
        class="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="entertainment">Entertainment</option>
        <option value="shopping">Shopping</option>
        <option value="health">Health</option>
        <option value="housing">Housing</option>
        <option value="other">Other</option>
      </select>
      <p v-if="errors.category" class="text-xs text-red-400">{{ errors.category }}</p>
    </div>

    <!-- Date -->
    <div class="flex flex-col gap-1">
      <label class="text-sm font-medium text-stone-800">Date</label>
      <input
        v-model="form.date"
        type="date"
        class="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <p v-if="errors.date" class="text-xs text-red-400">{{ errors.date }}</p>
    </div>

    <!-- Actions -->
    <div class="flex gap-3 pt-2">
      <button
        type="submit"
        class="flex-1 bg-blue-200 hover:bg-blue-300 text-blue-950 font-medium px-4 py-2 rounded-lg transition-colors duration-150"
      >
        Add Expense
      </button>
      <button
        type="button"
        class="flex-1 bg-stone-200 hover:bg-stone-300 text-stone-700 font-medium px-4 py-2 rounded-lg transition-colors duration-150"
        @click="$emit('cancel')"
      >
        Cancel
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { NewExpense } from '~/types/expense'

const emit = defineEmits<{
  submit: [expense: NewExpense]
  cancel: []
}>()

const today = new Date().toISOString().slice(0, 10)

const form = reactive<NewExpense>({
  name: '',
  amount: 0,
  category: 'other',
  date: today,
})

const errors = reactive({
  name: '',
  amount: '',
  category: '',
  date: '',
})

const validate = (): boolean => {
  errors.name = form.name.trim() ? '' : 'Name is required'
  errors.amount = form.amount > 0 ? '' : 'Amount must be greater than 0'
  errors.category = form.category ? '' : 'Select a category'
  errors.date = form.date ? '' : 'Date is required'
  return !Object.values(errors).some(Boolean)
}

const handleSubmit = () => {
  if (!validate()) return
  emit('submit', { ...form })
  Object.assign(form, { name: '', amount: 0, category: 'other', date: today })
  Object.assign(errors, { name: '', amount: '', category: '', date: '' })
}
</script>
