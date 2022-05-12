import React from 'react'
import ExpenseItem from '../Expense Item/ExpenseItem'
import './Expenses.css'
import Card from '../../UI/Card/Card'

const Expenses = ({ expenses }) => {
    return (
        <Card className='expenses' >
            <h2>Expenses</h2>
            <ExpenseItem expense={expenses[0]} />
            <ExpenseItem expense={expenses[1]} />
            <ExpenseItem expense={expenses[2]} />
        </Card>
    )
}

export default Expenses
