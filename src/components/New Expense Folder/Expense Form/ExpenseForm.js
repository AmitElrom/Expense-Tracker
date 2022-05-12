import React from 'react'
import Card from '../../UI/Card/Card'
import './ExpenseForm.css'

const ExpenseForm = () => {
    return (
        <Card>
            <form>
                <div className='new-expense__controls' >
                    <div className='new-expense__control' >
                        <label for='title' >Title</label>
                        <input id='title' type='text' />
                    </div>
                    <div className='new-expense__control' >
                        <label for='amount' >Amount</label>
                        <input id='amount' type='number' min='1' />
                    </div>
                    <div className='new-expense__control' >
                        <label for='date' >Date</label>
                        <input id='date' type='date' min='2018-01-01' max='2022-12-31' />
                    </div>
                </div>
                <div className='new-expense__actions' >
                    <input type='submit' value='Add Expense' />
                </div>
            </form>
        </Card>
    )
}

export default ExpenseForm