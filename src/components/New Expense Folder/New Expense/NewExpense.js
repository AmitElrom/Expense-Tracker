import React from 'react'
import ExpenseForm from '../Expense Form/ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ onAddExpense }) => {

    const addExpenseHandler = (newExpense) => {
        onAddExpense(newExpense)
    }

    return (
        <div className='new-expense'>
            <h2>New Expense</h2>
            <ExpenseForm onAddExpense={addExpenseHandler} />
        </div>
    )
}

export default NewExpense