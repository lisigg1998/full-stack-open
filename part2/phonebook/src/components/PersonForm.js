import React from 'react'

const PersonForm = ({submitHandler, newName, newPhone, handleNameChange, handlePhoneChange}) => {
    return (
        <form onSubmit={submitHandler}>
        <div>
            name: <input value={newName} onChange={handleNameChange} /><br></br>
            phone: <input value={newPhone} onChange={handlePhoneChange}></input>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
        </form>
    )
  }

export default PersonForm