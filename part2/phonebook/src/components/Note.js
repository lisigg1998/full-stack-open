import React from 'react'

const Note = ({ note }) => {
    return (
      <li>{note.name}  {note.phone}</li>
    )
  }

export default Note