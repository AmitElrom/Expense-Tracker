import React from 'react'
import './ExpensesList.css'
import ExpenseItem from '../Expense Item/ExpenseItem'

const ExpensesList = ({ filteredExpenses }) => {

    if (filteredExpenses.length === 0) {
        return <h3 className='expenses-list__fallback' >No expenses this year.</h3>
    }

    const expensesContent = filteredExpenses.map(expense => {
        return <ExpenseItem key={expense._id} expense={expense} />
    })

    return (
        <div>
            <ul className='expenses-list' >{expensesContent}</ul>
        </div>
    )
}

export default ExpensesList