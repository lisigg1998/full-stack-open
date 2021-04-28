import React from 'react'

const Note = ({ note, clickHandler }) => {
    return (
      <tbody>
        <tr>
          <td>{note.name}&emsp;</td>
          <td>{note.number}&emsp;&emsp;</td>
          <td><button onClick={clickHandler(note.id, note.name)}>delete</button></td>
        </tr>
      </tbody>

    )
  }

export default Note