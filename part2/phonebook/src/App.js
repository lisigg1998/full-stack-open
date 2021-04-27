import React, { useState } from 'react'
import Note from './components/Note'

const App = () => {
  /* State that display info */ 
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  /* State that change name */
  const [ newName, setNewName ] = useState('')
  /* State that change phone number */
  const [ newPhone, setNewPhone ] = useState('')
  /* State that change filter bar */
  const [ newfilter, setNewFilter ] = useState('')

  /* event handler: change name to be written */
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  /* event handler: change phone to be written */
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  /* event handler: change text to be written, and do filter */
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  /* event handler: write info */
  const addInfo = (event) => {
    event.preventDefault()
    const noteObject = {
      name: newName,
      phone: newPhone
    }
    const isNewName = persons.findIndex((existInfo) => existInfo.name === newName)
    const isNewPhone = persons.findIndex((existInfo) => existInfo.phone === newPhone)
    if( isNewName >= 0 || isNewPhone >= 0){
      window.alert(isNewName >= 0 ? `${newName} is already added to phonebook` : `${newPhone} is already added to phonebook`)
    }else if(newName.length === 0 || newPhone.length === 0){
      window.alert(isNewPhone === '' ? 'Phone number must not be empty!' : 'Name must not be empty!')
    }else{
      setPersons(persons.concat(noteObject))
    }
    setNewName('')
    setNewPhone('')
  }

  const personToShow = newfilter.length === 0 ? persons : persons.filter((person) => person.name.toLocaleLowerCase().startsWith(newfilter))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter by name: <input value={newfilter} onChange={handleFilterChange}></input>
      </div>
      <h2>Add a Person</h2>
      <form onSubmit={addInfo}>
        <div>
          name: <input value={newName} onChange={handleNameChange} /><br></br>
          phone: <input value={newPhone} onChange={handlePhoneChange}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personToShow.map(note => 
          <Note key={note.name} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App