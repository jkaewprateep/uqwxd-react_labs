
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const [_currentcy, setCurrency] = useState('($ Dollar)');

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {_currentcy} {totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;