import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import React from 'react'
import { setFilterContacts } from '../../redux/filtersSlice';

const Filter = () => {
    const dispatch = useDispatch();
    const filterValue = useSelector(state => state.filter.filter);

    const handleChange = e => {
        dispatch(setFilterContacts(e.currentTarget.value.trim()));
    }

  return (
    <label className={css.filterHeader}>
       <h1 className={css.searchByName}>Search by name:</h1> 
        <input
        className={css.filterInput}
        type='text'
        value={filterValue}
        onChange={handleChange}
        ></input>
    </label>
  
  )
}

export default Filter;