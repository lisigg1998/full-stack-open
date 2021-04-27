import React, { useState } from 'react'
import Note from './components/Note'

const App = () => {
  /* State that display info */ 
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  /* State that change info */
  const [ newName, setNewName ] = useState('')

  /* event handler: change info to be written */
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  /* event handler: write info */
  const addName = (event) => {
    event.preventDefault()
    const noteObject = {
      name: newName
    }
    const isNewName = persons.findIndex((existName) => existName.name === newName)
    if( isNewName >= 0){
      window.alert(`${newName} is already added to phonebook`)
    }else{
      setPersons(persons.concat(noteObject))
    }
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(note => 
          <Note key={note.name} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App