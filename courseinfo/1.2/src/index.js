import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => <h1>{props.course}</h1>
const Part1 = (props) => props.part1 + props.exercises1
const Part2 = (props) => props.part2 + props.exercises2
const Part3 = (props) => props.part3 + props.exercises3
const Content=(props) => {
 return (
    <div>
      <Part1 par1={props.part1} exercises1={props.exercises1} />
      <Part2 par2={props.part2} exercises2={props.exercises2} />
      <Part3 par3={props.part3} exercises3={props.exercises3} />
    </div>
  )  
 }

const Total= (props) => 'Numer of exercise ' + props.exercises

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content 
            part1={part1} exercises1={exercises1}
            part2={part2} exercises2={exercises2}
            part3={part3} exercises3={exercises3}
          />
      <p><Total exercises={exercises1 + exercises2 + exercises3 } /></p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))