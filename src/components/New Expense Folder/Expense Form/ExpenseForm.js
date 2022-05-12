import React, { useState } from 'react'
import Card from '../../UI/Card/Card'
import './ExpenseForm.css'

const ExpenseForm = () => {

    const [newExpense, setNewExpense] = useState({
        title: '',
        amount: '',
        date: ''
    })

    const changeHandler = (e) => {
        const { id, value } = e.target;
        setNewExpense({ ...newExpense, id: value })
        console.log(newExpense);
    }

    return (
        <Card>
            <form>
                <div className='new-expense__controls' >
                    <div className='new-expense__control' >
                        <label htmlFor='title' >Title</label>
                        <input id='title' type='text' onChange={changeHandler} />
                    </div>
                    <div className='new-expense__control' >
                        <label htmlFor='amount' >Amount</label>
                        <input id='amount' type='number' min='1' onChange={changeHandler} />
                    </div>
                    <div className='new-expense__control' >
                        <label htmlFor='date' >Date</label>
                        <input id='date' type='date' min='2018-01-01' max='2022-12-31' onChange={changeHandler} />
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