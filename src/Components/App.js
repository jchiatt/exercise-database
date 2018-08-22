import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layouts'
import Exercises from './Exercises'
import { exercises, muscles } from '../store'

class App extends Component {
  state = {
    exercises,
    exercise: {},
  }

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]
      
        return exercises
    
     }, {})
    )
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  handleExerciseSelect = id => {
    this.setState(({exercises}) => ({
      exercise: exercises.find(exercise => exercise.id === id)
    }))
  }

  handleExerciseCreate = exercise => {
    this.setState(({exercises}) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscles();
    const { category, exercise } = this.state;

    return (
      <Fragment>
        <Header 
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises 
        exercise={exercise}
        category={category} 
        exercises={exercises} 
        onSelect={this.handleExerciseSelect}/>
        <Footer 
          category={category}
          muscles={muscles} 
          onSelect={this.handleCategorySelected} 
        />
      </Fragment>
    )
  }
}

export default App