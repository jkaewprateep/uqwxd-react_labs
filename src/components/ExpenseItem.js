import React, { useContext, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'SUBTRACT_EXPENSE',
            payload: expense
        });

    }

    const [_currentcy, setCurrency] = useState('($ Dollar)');

    return (
        <tr>
        <td>{props.name}</td>
        <td>{_currentcy} {props.cost}</td>

        <td>
        <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
            <div><button onClick={event=> increaseAllocation(props.name)}>+</button>
            <button style={{ marginLeft: '2rem' }} onClick={event=> decreaseAllocation(props.name)}>-</button></div>
        </div>
        </td>

        {/* // <td>
        //     <button onClick={event=> increaseAllocation(props.name)}>+</button>
        //     <label>    </label>
        //     <button onClick={event=> decreaseAllocation(props.name)}>-</button>
        // </td> */}
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;