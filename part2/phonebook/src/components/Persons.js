import React from 'react'
import Note from './Note'

const Persons = ({personToShow}) => {

    return (
      <table>

        {personToShow.map(note => 
            <Note key={note.id} note={note} />
        )}
          
      </table>
    )
  }

export default Persons