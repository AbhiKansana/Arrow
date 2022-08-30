import React, { useRef } from 'react'
import { Button, Container, Text, Textarea } from '@chakra-ui/react'
import Hero from '../components/Hero'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'



const Diary = () => {

    const textRef = useRef(null);
    const[diary,setDiary] = useState("")

    useEffect(()=>{
        textRef.current.focus()
        axios.get('http://localhost:8080/diary/1')
        .then(res=>{
            // console.log(res.data.content)
           setDiary(res.data.content)
        })
    },[])

    function handleChange(e){
        setDiary(e.target.value)
        axios.patch('http://localhost:8080/diary/1',{content : e.target.value})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

  return (
    <div>
        <Hero text1="This is your story" text2="This is your Diary"/>
        <Container mt='30px' minH='50vh' p='30px' bg='gray.200' maxW={'700px'}>
        <Textarea value={diary} onChange={(e)=>handleChange(e)} ref={textRef} h='500px' placeholder='Write about your day how it is and how the way you wanted it' />
        </Container>
    </div>
  )
}

export default Diary