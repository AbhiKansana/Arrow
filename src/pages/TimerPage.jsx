import React from 'react'
import Timer from '../components/Timer'
import Hero from '../components/Hero'
import TimerTodo from '../components/TimerTodo'

const TimerPage = () => {
  return (
    <div>
       <Hero text1='Do one thing at a time and' text2='Put your whole energy in it'/>
       <TimerTodo />
       <Timer />
    </div>
  )
}

export default TimerPage