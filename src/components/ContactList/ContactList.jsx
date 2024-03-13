import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ContactList(){
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter.filter);
  const contacts = useSelector(state => state.contacts.contacts);

  function deleteContact(id){
    dispatch(removeContact(id));
    toast.success('The contact has been deleted', {
      autoClose:2000,
    })
  }

  function filteredContacts(){
    const normalisedFilter = filterValue.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter))
  }

  return (
    <ul className={css.contList}>
      {filteredContacts().map(({name, number, id})=>{
        return (
          <li className={css.contactItem} key={id}>
            <p className={css.contactText}>{name}: </p>
            <p className={css.contactText}>{number}</p>
            <button className={css.btnDelete}
            type='button'
            onClick={() => deleteContact(id)}
            >
              Delete
              </button>

          </li>
        )
      })}
      <ToastContainer />
    </ul>
  )
}



// const ContactList = ({ contacts, OnDelite }) => {
//     return (
//       <ul className={css.contList}>
//         {contacts.map(({ id, name, number }) => {
//           return (
//             <li className={css.contactItem} key={id}>
//               <p className="contactText">{name}:</p>
//               <p className="contactText">{number}</p>
//               <button 
//               className={css.btnDelete} 
//               type='button' 
//               onClick={() => OnDelite(id)}>
//                 Delete
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     );
//   };
  
//   export default ContactList;


