import React, { useState } from 'react'
import Card from '../../UI/Card/Card'
import './ExpenseForm.css'

import axios from 'axios'

// form management libraries
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const required = 'is a required field'

const schema = yup.object().shape({
    title: yup.string().required(`Title ${required}`),
    amount: yup.number().typeError(`Amount ${required}`).required(),
    date: yup.string().required(`Date ${required}`)
})

const ExpenseForm = ({ onAddExpense }) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const [newExpense, setNewExpense] = useState({ title: '', amount: '', date: '' })
    const { title, amount, date } = newExpense

    const changeHandler = (e) => {
        const { name, value } = e.target;

        setNewExpense((newExpense) => {
            return { ...newExpense, [name]: value }
        })

    }

    const submitForm = async (obj) => {

        // send expense via post 
        const { data } = await axios.post('http://localhost:1000/expenses', obj)
        console.log(data);

        // lift data up - to Expenses
        onAddExpense(data)

        // delete data from form's inputs
        setValue('title', '')
        setValue('amount', '')
        setValue('date', '')
    }

    return (
        <Card>
            <form onSubmit={handleSubmit(submitForm)} >
                <div className='new-expense__controls' >
                    <div className='new-expense__control' >
                        <label htmlFor='title' >Title</label>
                        <input id='title' defaultValue={title} name='title' type='text' onChange={changeHandler} {...register('title')} />
                        <p>{errors.title?.message}</p>
                    </div>
                    <div className='new-expense__control' >
                        <label htmlFor='amount' >Amount</label>
                        <input id='amount' defaultValue={amount} name='amount' type='number' min='1' onChange={changeHandler} {...register('amount')} />
                        <p>{errors.amount?.message}</p>
                    </div>
                    <div className='new-expense__control' >
                        <label htmlFor='date' >Date</label>
                        <input id='date' defaultValue={date} name='date' type='date' min='2018-01-01' max='2022-12-31' onChange={changeHandler} {...register('date')} />
                        <p>{errors.date?.message}</p>
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