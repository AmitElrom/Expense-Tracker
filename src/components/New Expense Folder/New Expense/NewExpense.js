import React, { useState } from 'react'
import ExpenseForm from '../Expense Form/ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ onAddExpense }) => {

    const [isNewExpense, setIsNewExpense] = useState(false)

    const addExpenseHandler = (newExpense) => {
        onAddExpense(newExpense)
        setIsNewExpense(false)
    }

    const cancelNewExpenseHandler = () => {
        setIsNewExpense(false)
    }

    const applyNewExpense = () => {
        setIsNewExpense(true)
    }

    let newExpenseForm = <button onClick={applyNewExpense} >Add New Expense</button>

    if (isNewExpense) {
        newExpenseForm = <ExpenseForm onCancel={cancelNewExpenseHandler} onAddExpense={addExpenseHandler} />
    }

    return (
        <div className='new-expense'>
            <h2>New Expense</h2>
            {newExpenseForm}
        </div>
    )
}

export default NewExpense