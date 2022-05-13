import React, { useEffect, useState } from 'react'
import ExpenseItem from '../Expense Item/ExpenseItem'
import ExpensesFilter from '../Expense Filter/ExpensesFilter'
import './Expenses.css'
import Card from '../../UI/Card/Card'

import axios from 'axios'

const Expenses = ({ expenses: expensesFromApp }) => {

    // const [expenses, setExpenses] = useState([]);
    const [filteredYear, setFilteredYear] = useState('2020');

    // useEffect(() => {
    //     // (async () => {
    //     //     const { data } = await axios.get('http://localhost:1000/expenses')
    //     //     setExpenses(data)
    //     // })();
    // }, [])

    const selectedYearHandler = (selectedYear) => {
        console.log(selectedYear);
        setFilteredYear(selectedYear)
    }

    const expensesComps = expensesFromApp.map(expense => {
        return <ExpenseItem key={expense._id} expense={expense} />
    })

    return (
        <Card className='expenses' >
            <ExpensesFilter year={filteredYear} onSelectYear={selectedYearHandler} />
            <h2>Expenses</h2>
            {expensesComps}
        </Card>
    )
}

export default Expenses
