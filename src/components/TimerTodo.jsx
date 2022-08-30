import { Box, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { IoMdRemoveCircleOutline } from 'react-icons/io'


const TimerTodo = () => {

  const[reload,setReload] = useState(true)

  const obj = JSON.parse(localStorage.getItem("currentObj"))
  const todo = obj?.text

  function clearLocal(){
    localStorage.removeItem("currentObj")
    setReload(!reload)
  }

  console.log(todo)
  return (
    <Box>
    <Box maxW={'800px'} mx='auto'  bg='cornsilk'>
       {todo && <Text p='10px' fontSize={"lg"} mt='30px' textAlign={'center'}>{todo}<Icon onClick={clearLocal} cursor={'pointer'} ml='20px' as={IoMdRemoveCircleOutline}/></Text>}
    </Box>
    </Box>
  )
}

export default TimerTodo