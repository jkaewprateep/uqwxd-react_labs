import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const [_currentcy, setCurrency] = useState('($ Dollar)');

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {_currentcy} {budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
