import React from 'react'
import Note from './Note'

const Persons = ({personToShow, clickHandler}) => {

    return (
      <table>

        {personToShow.map(note => 
            <Note key={note.id} note={note} clickHandler={clickHandler} />            
        )}
          
      </table>
    )
  }

export default Persons