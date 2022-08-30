import React from 'react'
import { Howl } from 'howler'
import { Box, Button, Text } from '@chakra-ui/react'

const Sound = () => {

    const soundSrc = "http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/intromusic.ogg"

    const callMySound = (src) => {
        const sound = new Howl({
            src,
            html5 : true
        })
        sound.play()
    }

    callMySound(soundSrc)

  return (
    <Box >
        {/* <Text>Hello World</Text>
        <Button onClick={()=> callMySound(soundSrc)}>Play Sound</Button> */}
    </Box>
  )
}

export default Sound