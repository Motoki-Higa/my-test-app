import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  padding: 0 24px;
  background-color: #c495ff;
`

export const StyledTitle = styled.h1`
  position: relative;
  display: flex;
  font-size: 20px;
  color: #fff;
  width: 100%;
  height: auto;
`

export const StyledNav = styled.ul`
  display: flex;
  justify-content: right;
  list-style: none;
  width: 100%;
  padding-left: 0;

  li {
    padding-left: 24px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  .active {
    font-weight: 600;
    color: #7ff5f2;
  }
`

