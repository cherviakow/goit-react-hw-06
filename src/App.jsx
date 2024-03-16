import { Form } from "./components/Form/Form";
import { ContactList } from "./components/ContactList/ContactList";
import { useSelector } from "react-redux";
import Filter from "./components/Filter/Filter";
import Notification from "./components/Notification/Notification";
import css from './App.module.css'
import React from "react";



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

export default App



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
