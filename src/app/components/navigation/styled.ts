import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavgationWrapper = styled.nav`
	display: flex;
	justify-content: space-between;
  z-index: 1;
  position: fixed;
  bottom: 0;
  width: 100%;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);
`;

export const LinkSC = styled(Link)`
	text-transform: uppercase;
	font-family: Whyte Inktrap, sans-serif;
	font-size: 0.875rem;
	font-weight: 700;
	text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  flex-grow: 1;
  height: 42px;
  color: white;
  &:hover{
    color: #e84142;
  }
`;
