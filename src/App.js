import React, { useEffect, useState } from "react";
import Expenses from "./components/Expenses General/Expenses/Expenses";
import NewExpense from "./components/New Expense Folder/New Expense/NewExpense";

import axios from 'axios'

function App() {

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(' http://localhost:1000/expenses')
      setExpenses(data)
    })()
  })

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, newExpense]
    })
  }

  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
