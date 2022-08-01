import React from "react";
import { StyledHeader, Nav, Logo } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { Image } from "./styles/Image.styled";
const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              ducimus cumque sequi aperiam blanditiis tenetur. Natus doloremque
              perspiciatis consectetur eos consequuntur consequatur, accusamus
              quibusdam labore sint voluptas.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="Image" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
