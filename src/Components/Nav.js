import styled from 'styled-components';
import { BsBagFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { i12, tablete } from './responsive';
const Containaire = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 13.5vh;
  background: white;
`;
const Logo = styled.span`
  font-size: 50px;

  color: black;
  cursor: pointer;
  ${i12({ fontSize: '30px', marginTop: '4%' })}
`;
const Menu = styled.ul``;
const MenuItem = styled.li`
  font-size: 100px;
  cursor: pointer;
  color: white;
  ${i12({ marginTop: '16%' })}
`;
const Number = styled.span`
  font-size: 50px;
  color: white;
  position: absolute;
  margin-top: -4.9%;
  margin-left: 0.2%;
  text-align: center;
  ${tablete({ marginTop: '-9%', marginLeft: '0%', color: 'yellow' })}
  ${i12({ marginTop: '-24%', marginLeft: '-0%', color: 'yellow' })}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Nav = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <>
      <NavLink
        style={({ isActive }) => {
          return { color: 'white' };
        }}
        to="/anthos"
      >
        <Containaire>
          <Logo>Anthophila</Logo>

          <Menu>
            <MenuItem>
              <Link to="/cartitem">
                <BsBagFill color="black" />
                <Wrapper>
                  <Number>{totalQuantity}</Number>
                </Wrapper>
              </Link>
            </MenuItem>
          </Menu>
        </Containaire>
      </NavLink>
    </>
  );
};

export default Nav;
