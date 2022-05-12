import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from '../Expense Date/ExpenseDate'

const ExpenseItem = ({ expense }) => {

    const { title, amount } = expense

    return (
        <div className='expense-item' >
            <ExpenseDate date={expense.date} />
            <div className='expense-item__description' >
                <h2>{title}</h2>
            </div>
            <div className='expense-item__price' >{amount}</div>
        </div>
    )
}

export default ExpenseItem