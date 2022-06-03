import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader, StyledNav } from './StyledComponents';

const Header = () => {
  return (
    <StyledHeader data-testid="header">
      <StyledNav>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/company'>Company</Link></li>
        <li><Link to='/about'>About</Link></li>
      </StyledNav>
    </StyledHeader>
  )
};

export default Header;