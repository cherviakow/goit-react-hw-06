import { useState } from "react";
import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { setFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const [filter, setFilterValue] = useState("");
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilterValue(value);
    dispatch(setFilter(value));
  };

  return (
    <div className={css.container}>
      <label>
        <input
          name="filter"
          type="text"
          placeholder="find contact"
          value={filter}
          onChange={handleFilterChange}></input>
      </label>
    </div>
  );
}





// import { useDispatch, useSelector } from 'react-redux';
// import css from './SearchBox.module.css';
// import React from 'react'
// // import { setFilterContacts } from '../../redux/filtersSlice';
// import { filterSlice } from '../../redux/filtersSlice';
// import { selectNameFilter } from '../../redux/filtersSlice';

// const SearchBox = () => {
//     const dispatch = useDispatch();
//     // const filterValue = useSelector(state => state.filter.filter);
//     const filterValue = useSelector(selectNameFilter);

//     // const handleChange = e => {
//     //     dispatch(setFilterContacts(e.currentTarget.value.trim()));
//     // }

//   return (
//     <label className={css.filterHeader}>
//        <h1 className={css.searchByName}>Search by name:</h1> 
//         <input
//         className={css.filterInput}
//         type='text'
//         value={filterValue}
//         // onChange={handleChange}
//         onChange={(e)=> dispatch(filterSlice(e.target.value))}
//         ></input>
//     </label>
  
//   )
// }

// export default SearchBox;