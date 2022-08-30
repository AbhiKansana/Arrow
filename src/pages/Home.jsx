import React from 'react'
import Hero from '../components/Hero'
import TodoList from '../components/TodoApp/TodoList'

const Home = () => {
  return (
    <div>
        <Hero text1="This is just a day" text2="Make it your day" />
        <TodoList />
    </div>
  )
}

export default Home