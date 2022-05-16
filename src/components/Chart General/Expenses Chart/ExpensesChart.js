import React from 'react'

import Chart from '../Chart/Chart'

const ExpensesChart = ({ filteredExpenses }) => {

    const chartDataPoints = Array.from({ length: 12 }, (item, i) => {
        return {
            label: new Date(0, i).toLocaleString('en-US', { month: 'short' }),
            value: 0
        }
    });

    for (let expense of filteredExpenses) {
        let date = new Date(expense.date)
        let expenseMonth = date.getMonth() // Jan is 0, Feb is 1, etc.

        chartDataPoints[expenseMonth].value += expense.amount
    }

    return <Chart dataPoints={chartDataPoints} />
}

export default ExpensesChart