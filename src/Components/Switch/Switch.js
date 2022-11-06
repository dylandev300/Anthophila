import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Move from '../../Pages/Moves';

import CartItem from '../../Pages/CartItem';
import Anthos from '../../Pages/Anthos';

const Swich = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/anthos" />} />
      <Route path="/anthos" element={<Anthos />} />

      <Route path="/move" element={<Move />} />
      <Route path="/cartitem" element={<CartItem />} />
    </Routes>
  );
};

export default Swich;
