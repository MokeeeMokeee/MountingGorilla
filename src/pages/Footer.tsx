import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  height: 5vh;
  background-color: #81c784;
  width: 100%;
  color: rgba(255, 255, 255, 0.4);
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <p>© MokeeeMokeee</p>
    </Container>
  );
};

export default Footer;
