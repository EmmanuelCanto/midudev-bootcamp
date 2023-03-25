import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => <h1>{props.course}</h1>
const Part1 = (props) => <p> {props.parts} {props.exercises} </p>
const Part2 = (props) => <p> {props.parts} {props.exercises} </p>
const Part3 = (props) => <p> {props.parts} {props.exercises} </p>
const Total = (props) => {
  let total = props.ex1 + props.ex2+ props.ex3
  return 'Total ' + total
  }

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Part1 parts={part1.name} exercises = {part1.exercises}/>
      <Part2 parts={part2.name} exercises = {part2.exercises}/>
      <Part3 parts={part3.name} exercises = {part3.exercises}/>
      <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
