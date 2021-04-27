import React from 'react'

const Note = ({ note }) => {
    return (
      <tbody>
        <tr>
          <td>{note.name}&emsp;</td>
          <td>{note.phone}</td>
        </tr>
      </tbody>

    )
  }

export default Note