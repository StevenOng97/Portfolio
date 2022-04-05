import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:8499849186">+8499849186</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:giaanguyen221197@gmail.com">
            giaanguyen221197@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <SocialContainer>
            <SocialIcons href="https://github.com/StevenOng97">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/gianguyenong">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.instagram.com/lies97">
              <AiFillInstagram size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </LinkColumn>
      </LinkList>
      {/* <SocialIconsContainer></SocialIconsContainer> */}
    </FooterWrapper>
  );
};

export default Footer;
