import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
  //Individual state method, chose to use the single state object approach insteaad but left this here for reference
  //const [enteredTitle, setEnteredTitle] = useState('');
  //const [enteredAmount, setEnteredAmount] = useState('');
  //const [enteredDate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  })

  const titleChangeHandler = event => {
    //single state approach
    //setEnteredTitle(event.target.value);
    //console.log(enteredTitle);
    //console.log(event.target.value);

    //object approach, but prone to errors because the previous state might not update in the right order if they are seperate like this
    //setUserInput({
    //    ...userInput,
    //    enteredTitle: event.target.value,
    //});

    //prevState is a reserved word that always gets the previous state. It is better than the above object approach because it makse sure
    //that the last state was definately the last state, and not possibly a different version or executed in wrong order.
    setUserInput(prevState => {
      return { ...prevState, enteredTitle: event.target.value }
    })
    console.log(event.target.value)
  }

  const amountChangeHandler = event => {
    setUserInput(prevState => {
      return { ...prevState, enteredAmount: event.target.value }
    })
    console.log(event.target.value)
  }

  const dateChangeHandler = event => {
    setUserInput(prevState => {
      return { ...prevState, enteredDate: event.target.value }
    })
    console.log(event.target.value)
  }

  const submitHandler = event => {
    event.preventDefault() //stops reload of component when form onSubmit is triggered. We have no need to rerender and we want to keep the gathered data, so this is useful in this circumstance.
    console.log(userInput)

    //reset form fields to default empty
    setUserInput(prevState => {
      return {
        ...prevState,
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
        
      }
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={userInput.enteredTitle} //two way binding, allows the filled fields to be accessed again
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Number</label>
          <input
            type='number'
            value={userInput.enteredAmount}
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            value={userInput.enteredDate}
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
