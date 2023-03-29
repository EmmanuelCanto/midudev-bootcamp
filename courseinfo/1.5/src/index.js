import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => <h1>{props.course}</h1>
const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => 
        <p>{part.name} {part.exercises}</p>
      )}
    </div>
  )
}
const Total = (props) => <p> Exercises: {props.totales.reduce((sum, total) => sum + total.exercises, 0)} </p>

const App = () => {
  const course ={ 
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total totales={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
