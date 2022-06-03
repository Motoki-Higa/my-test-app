import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHeader, StyledTitle, StyledNav } from './StyledComponents';

const Header = () => {
  return (
    <StyledHeader data-testid="header">
      <StyledTitle>My Snippets</StyledTitle>
      <StyledNav>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/memo'>Memo</NavLink></li>
        <li><NavLink to='/snippets'>Snippets</NavLink></li>
      </StyledNav>
    </StyledHeader>
  )
};

export default Header;