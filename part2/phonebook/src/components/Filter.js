import React from 'react'

const Filter = ({newfilter, handleFilterChange}) => {

    return (
      <div>
        Filter by name: <input value={newfilter} onChange={handleFilterChange}></input>
      </div>
    )
  }

export default Filter 