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

    const months = Array.from({ length: 12 }, (item, i) => {
        return {
            monthName: new Date(0, i).toLocaleString('en-US', { month: 'short' }),
            totalExpenses: 0
        }
    });

    let yearExpenses = 0;
    filteredExpenses.forEach(expense => {
        yearExpenses += expense.amount
    })

    const monthsData = months.forEach(month => {
        filteredExpenses.forEach(expense => {

            let date = new Date(expense.date)
            let monthShort = date.toLocaleString('en-US', { month: 'short' })

            if (month.monthName === monthShort) {
                month.totalExpenses = month.totalExpenses + expense.amount
            }
        })
    })

    const monthsAllData = { monthsData, yearExpenses }

    console.log(monthsAllData);

    return (
        <div>
            <ul className='expenses-list' >{expensesContent}</ul>
        </div>
    )
}

export default ExpensesList