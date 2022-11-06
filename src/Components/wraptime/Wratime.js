import React from 'react';
import styled from 'styled-components';
import { i12, tablete } from '../responsive';
import Timer from '../Timer';

const ConWrap = styled.div`
  background: white;
  height: 22.5vh;
  background: white;

  z-index: 1;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  ${tablete({ marginTop: '0%' })}
`;
const Wrap = styled.h6`
  color: black;
  font-size: 18px;
  margin-left: 5.6%;
  z-index: 1;
  letter-spacing: 2px;
  ${tablete({ letterSpacing: '4px', marginLeft: '8%' })}
  ${i12({
    fontSize: '8px',
    letterSpacing: '2px',
    marginLeft: '14%',
    color: 'green',
  })}
`;
const Desc = styled.h1`
  font-size: 29px;
  color: black;
  position: absolute;
  margin-top: -7.1%;
  letter-spacing: 15px;
  margin-left: 8%;
  ${tablete({ marginTop: '-18%' })}
  ${i12({ fontSize: '20px', letterSpacing: '0', marginLeft: '2%' })}
`;

export const Wratime = () => {
  return (
    <>
      <ConWrap>
        <Timer duration={11 * 24 * 60 * 60 * 1000} />
        <Container>
          <Desc>limited edition 10 days only</Desc>
          <Wrap>Days</Wrap>
          <Wrap>Hours</Wrap>
          <Wrap>Minutes</Wrap>
          <Wrap>Seconds</Wrap>
        </Container>
      </ConWrap>
    </>
  );
};
