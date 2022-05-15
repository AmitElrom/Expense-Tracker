import React, { useState } from 'react'
import ExpensesFilter from '../Expense Filter/ExpensesFilter'
import Chart from '../../Chart General/Chart/Chart'
import ExpensesList from '../Expenses List/ExpensesList'
import './Expenses.css'
import Card from '../../UI/Card/Card'

// import axios from 'axios'

const Expenses = ({ expenses: expensesFromApp }) => {

    // const [expenses, setExpenses] = useState([]);
    const [filteredYear, setFilteredYear] = useState('2020');

    const selectedYearHandler = (selectedYear) => {
        console.log(selectedYear);
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = expensesFromApp.filter(expense => {
        let date = new Date(expense.date)
        return date.getFullYear().toString() === filteredYear
    })

    return (
        <Card className='expenses' >
            <ExpensesFilter year={filteredYear} onSelectYear={selectedYearHandler} />
            <Chart />
            <h2>Expenses</h2>
            <ExpensesList filteredExpenses={filteredExpenses} />
        </Card>
    )
}

export default Expenses
