import React from 'react'
import '../CSS/hero.css'
import { Box, Center, Flex, Text } from '@chakra-ui/react'

const Hero = ({text1="Live this",text2="Present moment"}) => {
  return (
    <Center p='20px' mb='10px' bg='#b2ff9e' bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'  className='danceText' >
        <Text color={'#fff'}  textAlign={'center'} fontSize='2.5rem' fontWeight={'bold'} >{text1}  &nbsp; </Text>
        <Text  textAlign={'center'} fontSize='2.5rem' fontWeight={'bold'} color='#7161EF' >{text2}</Text>
    </Center>
  )
}

export default Hero


// background: linear-gradient(to bottom, #8e0e00, #1f1c18)