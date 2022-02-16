import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter.js'
import Card from '../ui/Card'
import React, { useState } from 'react'

function Expenses (props) {
  const [year, setYear] = useState(2021)

  const yearChosenHandler = chosenYearData => {
    setYear(chosenYearData)
    console.log(chosenYearData)
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          initialValue={year}
          dropDownYearChosen={yearChosenHandler}
        />
        {props.items.map(expenses => (
          <ExpenseItem
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
