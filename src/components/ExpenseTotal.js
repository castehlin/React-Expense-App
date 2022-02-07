import './ExpenseTotal.css';

function ExpenseTotal(props) {
    return (
        <div>
            <div className='expense-item__total'>Expense Total: ${props.totalAmount}</div>
        </div>
      )
}

export default ExpenseTotal;