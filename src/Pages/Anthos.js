import React from 'react';
import styled from 'styled-components';
import Zr from '../Assets/Zr.png';
import homing from '../Assets/homing.gif';
import { i12, tablete } from '../Components/responsive';
import { Wratime } from '../Components/wraptime/Wratime';

import data from '../data';
import Antho from './Antho';

const Container = styled.div`
  background: black;
  height: 305vh;
  margin-top: 65%;
  ${tablete({ height: '380vh' })}
  ${i12({ height: '320vh' })}
`;
const Wrapper = styled.div`
  display: flex;
  padding: 60px;
  flex-wrap: wrap;
  position: relative;
  ${i12({ padding: '60px' })}
`;
const Menu = styled.h1`
  position: absolute;
  font-size: 37px;
  margin-top: 6%;
  letter-spacing: 22px;
  font-weight: bold;
  color: white;
  font-size: 55px;
  margin-left: 6%;
  ${tablete({ letterSpacing: '0', marginLeft: '2%' })}
  ${i12({ letterSpacing: '0', marginLeft: '-4%', fontSize: '20px' })}
`;
const Be = styled.img`
  position: absolute;

  width: 100%;
  margin-left: -3%;
  margin-top: 5%;
  z-index: -0.1;
  ${tablete({ display: 'none' })}
  ${i12({ display: 'none' })}
`;
const Bee = styled.img`
  position: absolute;
  ${tablete({ display: 'none' })}
  ${i12({ display: 'none' })}
  width: 100%;
  margin-left: -3%;
  margin-top: 54%;
  z-index: -0.1;
`;
const Anthophi = styled.img`
  width: 100%;
  object-fit: cover;
  position: absolute;
  margin-top: -65%;
  z-index: 15;
  ${i12({ marginTop: '-62%' })}
`;
const Anthos = () => {
  return (
    <>
      <Container>
        <Anthophi src={homing} />
        <Wrapper>
          <Menu>Level up yours life style let's go</Menu>
          <Be src={Zr} />
          <Bee src={Zr} />
          {data.products.map((item) => (
            <Antho item={item} key={item.id} />
          ))}
        </Wrapper>
        <Wratime />
      </Container>
    </>
  );
};

export default Anthos;
