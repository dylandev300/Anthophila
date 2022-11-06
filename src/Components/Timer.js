import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { i12, tablete } from './responsive';
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15%;
  ${tablete({ marginTop: '24%' })}
`;

const Times = styled.h1`
  color: black;
  font-size: 75px;
  z-index: 1;
  margin-top: 3.7%;
  letter-spacing: 24px;
  margin-left: 6.8%;
  ${tablete({ margiTonp: '12%' })}
  ${i12({ fontSize: '20px', marginTop: '26%' })}
`;

const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);
  const getFormattedTime = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let days = parseInt(Math.floor(total_hours / 24));
    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);
    return `${days}:${hours}:${minutes}:${seconds}`;
  };
  return (
    <>
      <Container>
        <Times>{getFormattedTime(time)}</Times>
      </Container>
    </>
  );
};

export default Timer;
