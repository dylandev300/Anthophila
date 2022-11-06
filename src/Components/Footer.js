import styled from 'styled-components';
import { i12 } from './responsive';

const Container = styled.div`
  display: flex;
  margin-top: 0%;
  ${i12({ flexDirection: 'column' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${i12({ display: 'none' })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ATPH</Logo>
        <Desc>
          limited edition 10 days only. This store carries official anthophila
          team gear Get it here,
        </Desc>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem> shop</ListItem>
          <ListItem>Terms</ListItem>

          <ListItem>Faq</ListItem>
          <ListItem>Privacy</ListItem>

          <ListItem>Returns</ListItem>
          <ListItem>Shipping</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem> Adrs// Atlanta 47896</ContactItem>
        <ContactItem> Call// +2 816 29 35</ContactItem>
        <ContactItem>Email// anpl@anthophila.bee</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
