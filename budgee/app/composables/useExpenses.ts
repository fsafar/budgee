import type { Expense, NewExpense } from '~/types/expense'

export const useExpenses = () => {
  const expenses = useState<Expense[]>('budgee:expenses', () => [])

  const addExpense = (data: NewExpense): void => {
    expenses.value.unshift({
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    })
  }

  const totalAmount = computed(() =>
    expenses.value.reduce((sum, e) => sum + e.amount, 0)
  )

  return { expenses, addExpense, totalAmount }
}
