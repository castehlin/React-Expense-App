import React, { useState } from 'react'
import './ExpensesFilter.css'

const ExpensesFilter = props => {
  const [year, setYear] = useState(2022) //probably should make this dynamically the latest year somehow

  const yearChangeHandler = event => {
    setYear(event.target.value)
    props.dropDownYearChosen(event.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label className='expenses-filter__label'>Filter by year</label>
        <select className='expenses-filter__select' onChange={yearChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter
