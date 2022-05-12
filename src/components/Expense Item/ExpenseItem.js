import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from '../Expense Date/ExpenseDate'

const ExpenseItem = ({ expense }) => {
    return (
        <div>
            <ExpenseDate date={expense.date} />
        </div>
    )
}

export default ExpenseItem