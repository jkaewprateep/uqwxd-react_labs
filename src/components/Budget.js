
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

//Add
import Currency from './Currency';

const _currentcy = "£";
// alert(_currentcy._currentcy);

// const SelectCurrency = () => {
//     const [_currentcy, setCurrency] = useState('');
//     const handleBudgetChange = (event) => {
//         set_currentcy(event.target.value);

//     return (
//         <div className='alert alert-secondary'>
//         <span>Budget: {_currentcy}{budget}</span>
//         <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
//         </div>
//     ); 
// }}

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const [_currentcy, setCurrency] = useState('($ Dollar)');

    // const [_currentcy, setCurrency] = useState('');
    // alert(_currentcy);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);

        // if (RemainingBudget > 0 ){
        //     alert("123");
        // }

        // if(RemainingBudget > 0) {
        //     alert("123" );
        //     setCost("");
        //     return;
        // }
    }

    return (
<div className='alert alert-secondary'>
<span>Budget: {_currentcy}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};


export default Budget;

