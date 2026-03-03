export type ExpenseCategory =
  | 'food'
  | 'transport'
  | 'entertainment'
  | 'shopping'
  | 'health'
  | 'housing'
  | 'other'

export interface Expense {
  id: string
  name: string
  amount: number
  category: ExpenseCategory
  date: string
  createdAt: string
}

export type NewExpense = Omit<Expense, 'id' | 'createdAt'>
