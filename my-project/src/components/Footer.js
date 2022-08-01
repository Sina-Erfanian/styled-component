import React from "react";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
              dignissimos nostrum. In esse deserunt quis, temporibus magni sequi
              aliquid officia.
            </li>
            <li>+981112233</li>
            <li>Sina@gmail.com</li>
          </ul>
          <ul>
            <li>About us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcon />
        </Flex>
        <p>&copy; 2022 Sina . All rights reserved</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
