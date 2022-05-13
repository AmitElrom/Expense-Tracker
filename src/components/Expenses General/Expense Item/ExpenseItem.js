import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from '../Expense Date/ExpenseDate'
import Card from '../../UI/Card/Card'

const ExpenseItem = ({ expense }) => {

    const { title, amount, date } = expense

    return (
        <Card className='expense-item' >
            <ExpenseDate date={date} />
            <div className='expense-item__description' >
                <h2>{title}</h2>
            </div>
            <div className='expense-item__price' >${amount}</div>
        </Card>
    )
}

export default ExpenseItem