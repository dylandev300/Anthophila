import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { i12, tablete } from '../Components/responsive';

const Info = styled.div`
  opacity: 0;
  position: absolute;
  top: 10%;
  left: 0%;
  margin-left: 40%;
  width: 178%;
  height: 196%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  cursor: pointer;
  ${tablete({ marginLeft: '2%' })}
  ${i12({
    height: '60%',
    marginLeft: '-10%',

    marginTop: '22%',
  })}
`;
const Container = styled.div`
  flex: 0.2;
  margin: 190px;
  position: relative;
  min-width: 280px;
  height: 350px;
  &:hover ${Info} {
    opacity: 1;
  }
  ${i12({ margin: '8px' })}
`;
const Desc = styled.p`
  letter-spacing: 10px;
  margin-bottom: 5%;

  color: white;
  font-size: 32px;
  font-weight: bold;
  background: black;
  ${i12({ fontSize: '10px', letterSpacing: '0', marginLeft: '-32%' })}
`;
const Button = styled.button`
  display: block;
  margin: 60px auto;
  border-radius: 14px;
  width: 200px;
  height: 60px;
  font-size: 30px;
  font-weight: 700;
  margin-left: 27.8%;
  cursor: pointer;

  background-color: transparent;
  color: black;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  border: 2px solid black;

  &:before {
    content: '';
    display: inline-block;
    width: 200px;
    height: 200px;

    position: absolute;
    background-color: black;
    left: 0;
    top: 70px;
    transition: all 0.5s ease-in-out;
    z-index: -2;
  }
  &:after {
    content: '';
    display: inline-block;
    width: 200px;
    height: 200px;
    transform: rotate(180deg);
    position: absolute;
    background-color: black;
    left: 0;
    top: -300px;
    transition: all 0.5s ease-in-out;
    z-index: -3;
  }
  &:hover&:after,
  &:hover&:before {
    top: 0;
  }
  &:hover {
    color: white;
    transform: scale(1.2, 1.2);
  }
  ${i12({ width: '70px', fontSize: '16px' })}
`;
const Image = styled.img`
  height: 195%;
  background: linear-gradient(0deg, #999999, #ffffff);
  border-radius: 14px;

  margin-top: 24%;
  margin-left: 40%;
  ${tablete({ marginLeft: '2%' })}
  ${i12({
    height: '80%',
    marginLeft: '15%',

    marginTop: '22%',
  })}
`;
const Antho = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      })
    );
  };
  return (
    <Container>
      <Image src={item.image} />
      <Info>
        <Desc>{item.desc}</Desc>
        <Button onClick={addToCart}>${item.price}</Button>
      </Info>
    </Container>
  );
};

export default Antho;
