import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import noteService from './services/service'


const App = () => {
  /* State that display info */ 
  const [ persons, setPersons ] = useState([]) 
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

  /* event handler: write info to the browser and server */
  const addInfo = (event) => {
    event.preventDefault()
    const noteObject = {
      name: newName,
      number: newPhone
    }
    const isNewName = persons.findIndex((existInfo) => existInfo.name === newName)
    const isNewPhone = persons.findIndex((existInfo) => existInfo.phone === newPhone)
    if( isNewName >= 0 || isNewPhone >= 0){
      window.alert(isNewName >= 0 ? `${newName} is already added to phonebook` : `${newPhone} is already added to phonebook`)
    }else if(newName.length === 0 || newPhone.length === 0){
      window.alert(isNewPhone === '' ? 'Phone number must not be empty!' : 'Name must not be empty!')
    }else{
      noteService
        .create(noteObject)
        .then(returnedNotes => {
          setPersons(persons.concat(returnedNotes))
        })
    }
    setNewName('')
    setNewPhone('')
  }

  /* Person info initialize */
  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setPersons(initialNotes)
      })
  }, [])

  const personToShow = newfilter.length === 0 ? persons : persons.filter((person) => person.name.toLocaleLowerCase().startsWith(newfilter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newfilter={newfilter} handleFilterChange={handleFilterChange}></Filter>
      
      <h2>Add a Person</h2>
      <PersonForm submitHandler={addInfo} newName={newName} newPhone={newPhone} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange}></PersonForm>
      <h2>Numbers</h2>
      <Persons personToShow={personToShow}></Persons>
    </div>
  )
}

export default App