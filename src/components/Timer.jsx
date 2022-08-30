import { Box, Button, Center, Text } from "@chakra-ui/react";
import React from "react";
import "../CSS/timer.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";
import TimerInput from "./TimerInput";
import Sound from "./Sound";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return (
      <Box>
        <Sound />
        <Text fontSize={"1.25rem"} className="timer">
          Time Ends...
        </Text>
      </Box>
    );
  }

  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  return (
    <div className="timer">
      <Text fontSize={"1.2rem"} className="text">
        Remaining
      </Text>
      <div className="value">{`${hours < 10 ? "0" + hours : hours}:${
        minutes < 10 ? "0" + minutes : minutes
      }:${seconds < 10 ? "0" + seconds : seconds}`}</div>
      <Text fontSize={"1.2rem"} className="text">
        time
      </Text>
    </div>
  );
};

function Timer() {
  const [key, setKey] = useState(0);
  const [play, setPlay] = useState(false);
  const [time, setTime] = useState(1800);

  const [show, setShow] = useState(true);
  function showHandle(val) {
    setShow(val);
  }

  function handleTime(timeValue) {
    setTime(timeValue);
  }

  function handleReset() {
    setKey((prev) => prev + 1);
    setPlay(true);
  }

  return (
    <Box mt="30px">
      <Center my="30px" mx="auto">
        <TimerInput
          handleTime={handleTime}
          show={show}
          showHandle={showHandle}
        />
      </Center>
      <div className="App">
        <div className="timer-wrapper">
          <CountdownCircleTimer
            key={key}
            size={240}
            strokeWidth={12}
            isPlaying={play}
            duration={time}
            colors={["#F7B801", "#F7B801", "#A30000", "#e71d36"]}
            colorsTime={[10, 6, 3, 0]}
            onComplete={() => ({ shouldRepeat: false, delay: 1 })}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
        <Center mt="30px">
          <Button colorScheme={'orange'} mr="25px" onClick={() => handleReset()}>
            Reset Timer
          </Button>
          <Button
            width={"120px"}
            colorScheme={'green'}
            boxSizing="border-box"
            mr="25px"
            onClick={() => {
              setPlay(!play);
              setShow(false);
            }}
          >
            {play === true ? "Pause" : "Start"} Timer
          </Button>
          <Button
            mr="25px"
            colorScheme={"red"}
            onClick={() => {
              setKey((prev) => prev + 1);
              setPlay(false);
              setTime(600);
              setShow(true);
            }}
          >
            End Timer
          </Button>
        </Center>
      </div>
    </Box>
  );
}

export default Timer;
