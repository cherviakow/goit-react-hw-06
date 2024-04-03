import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contacts_list__item}>
      {name}:
      <span>
        <i>{number}</i>
      </span>
      <button
        type="button"
        className={css.contacts_button}
        onClick={() => handleDeleteContact(id)}>
        delete
      </button>
    </li>
  );
}




// import React from 'react';
// import css from './Contact.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeContact } from '../../redux/contactsSlice';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function Contact(){
//   const dispatch = useDispatch();
//   const filterValue = useSelector(state => state.filter.filter);
//   const contacts = useSelector(state => state.contacts.contacts);

//   function deleteContact(id){
//     dispatch(removeContact(id));
//     toast.success('The contact has been deleted', {
//       autoClose:2000,
//     })
//   }

//   function filteredContacts(){
//     const normalisedFilter = filterValue.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalisedFilter))
//   }

// return (
//   <ul className={css.contList}>
//     {filteredContacts().map(({name, number, id})=>{
//       return (
//         <li className={css.contactItem} key={id}>
//           <p className={css.contactText}>{name}: </p>
//           <p className={css.contactText}>{number}</p>
//           <button className={css.btnDelete}
//           type='button'
//           onClick={() => dispatch(deleteContact(id))}
//           >
//             Delete
//             </button>

//         </li>
//       )
//     })}
//     <ToastContainer />
//   </ul>
// )
// }

