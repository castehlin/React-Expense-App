import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString() //not a perfect unique id generator, but used for now because it will probably be unique and is easy
    }
    props.sendExpenseDataUp(expenseData); //function in parent component, app
  }

  /*The onSaveExpenseData is similar to onChange inbuilt functions to React. They serve as a way to pass data from child to parent components.
    It's simply a matter of calling the child component like below, creating a function that has the same name as the props.functionname() of
    it in the child component (so in this case props.onSaveExpenseData()) and then pointing to a function that can use the data in the parent 
    component for whatever you want to use it for.*/
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense
