import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ({ onSelectYear, year }) => {
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label htmlFor='year'>Filter by year</label>
                <select id='year' value={year} onChange={(e) => onSelectYear(e.target.value)} >
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;