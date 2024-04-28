import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

//Add
import _Budget from './Budget';



const SelectCurrency = (name) => {

    // const _currentcy = "(£ Pound)";

    const { currency } = useContext(AppContext);
    const [_currentcy, setCurrency] = useState('($ Dollar)');

    

    // _Budget.Budget(!_currentcy);
    // setRerender(!_currentcy);


    // _Budget._currentcy = "123";

    // const update_currency = (name) => {
    //     const expense = {
    //         name: name,
    //         currency: "(€ Euro)",
    //     };

    //     currency({
    //         type: 'CHG_CURRENCY',
    //         payload: expense
    //     });

    // }


    // currency({
    //     type: 'CHG_CURRENCY',
    //     payload: currency
    // });

    // _Budget.setCurrency;

    // useState.setCurrency();

    // _Budget.handleBudgetChange();
    // _Budget.useState._currentcy = "123";

    // alert( _Budget.Budget.useState );
    // _currentcy

    // alert(useState._currentcy);

    // if(currentcy !== "($ Dollar)" && currentcy !== "(£ Pound)" && currentcy !== "(€ Euro)" && currentcy !== "(₹ Ruppee)")
    // if (_currentcy.toString().length < 3){
    //     _currentcy = "(£ Pound)";
    // }
    // if(currentcy.toString() !== "($ Dollar)"){
    //     _currentcy = "(£ Pound)";
    // }

    // if ( currentcy == ""  ){
    //     currentcy = _currentcy;
    // }

    // alert(currentcy);

    // const { expenses } = useContext(AppContext);
    // const totalExpenses = expenses.reduce((total, item) => {
    //     return (total += item.cost);
    // }, 0);

    

    return (
        // <div className='alert alert-primary'>
        //     <span>Currentcy {_currentcy}</span>
        // </div>

        <div className='alert alert-secondary' style={{ backgroundColor: 'LightGreen' }}>
        <span>Currency {_currentcy}</span>
        {/* <span>Budget: £{currency}</span>
        <input type="number" step="10" value={currency}></input> */}



        {/* <div class="dropdown-menu" aria-labelledby="actions">
            <a class="dropdown-item" href="#">Add</a>
            <a class="dropdown-item" href="#">Edit</a>
            <a class="dropdown-item" href="#">Delete</a>
        </div> */}

        <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setCurrency(event.target.value)} >

        <option defaultValue>Currency {_currentcy}</option>
        <option value="($ Dollar)" name="dollar_currency"> $ Dollar</option>
        <option value="(£ Pound)" name="pound_currency"> £ Pound</option>
        <option value="(€ Euro)" name="euro_currency"> € Euro</option>
        <option value="(₹ Ruppee)" name="marketing"> ₹ Ruppee</option>
        </select>

        </div>



        // <div class="alert alert-primary">

        // <span>Budget: £{budget}</span>
        // <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>

        //     {/* <a class="dropdown-item" href="#">{_currentcy}</a>
        //     <a class="dropdown-item" href="#">Add</a>
        //     <a class="dropdown-item" href="#">Edit</a>
        //     <a class="dropdown-item" href="#">Delete</a> */}

        // </div>
    );
};
export default SelectCurrency;


