import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  height: 5vh;
  background-color: #81c784;
  width: 100%;

  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomLink = styled.a`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.5s;
  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <CustomLink
        rel='noopener noreferrer'
        target='_blank'
        href='https://github.com/MokeeeMokeee/MountingGorilla'
      >
        <p>© MokeeeMokeee</p>
      </CustomLink>
    </Container>
  );
};

export default Footer;
