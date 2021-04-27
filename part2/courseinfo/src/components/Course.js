import React from 'react'

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  return(
    <b>Number of exercises {course.parts.reduce((sum, x) => (sum + x.exercises), 0)}</b>
  ) 
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map( x => <Part key={x.id} part={x}/> )}
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Courses = ({courses}) => {
  return (
    <div>
      {courses.map( (course) => <Course key={course.id} course={course}></Course> )}
    </div>
  )
}


export default Courses