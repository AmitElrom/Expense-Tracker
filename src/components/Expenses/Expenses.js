import React from 'react'
import ExpenseItem from '../Expense Item/ExpenseItem'

const Expenses = ({ expenses }) => {
    return (
        <div>
            <h2>Expenses</h2>
            <ExpenseItem expense={expenses[0]} />
            <ExpenseItem expense={expenses[1]} />
            <ExpenseItem expense={expenses[2]} />
        </div>
    )
}

export default Expenses
