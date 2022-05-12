import React from 'react'
import ExpenseForm from '../Expense Form/ExpenseForm'
import './NewExpense.css'

const NewExpense = () => {
    return (
        <div className='new-expense'>
            <h2>New Expense</h2>
            <ExpenseForm />
        </div>
    )
}

export default NewExpense