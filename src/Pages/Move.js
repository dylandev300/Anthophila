import React from 'react';
import Moves from './Moves';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
`;

const Move = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <>
      <Container>
        <div>
          {cartItems.map((item, index) => (
            <Moves item={item} key={index} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Move;
