import { Form } from "./Form/Form";
import { ContactList } from "./ContactList/ContactList";
import { useSelector } from "react-redux";
import Filter from "./Filter/Filter";
import Notification from "./Notification/Notification";
import css from './App.module.css'



export function App(){
  const contacts = useSelector(state => state.contacts.contacts);

  return (
    <div className="container">
      <h1 className={css.title}>Phonebook</h1>
      <Form/>
      <h2 className={css.title}>Contacts</h2>
      {contacts.length === 0 ? (
        <Notification message='No contact in your book yet'/>
      ): (<Filter/>)}
      <ContactList/>
    </div>
  )
}




