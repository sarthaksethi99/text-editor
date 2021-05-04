import styled from "styled-components";
import { Link } from "react-router-dom";

export const EditorMainPage = styled.div`
    width:100%;
    height:100vh;
    background: #D3D2C7
    
`;
export const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  justify-self: start;
  font-size: 5rem;

`;
export const ButtonWrap = styled.div`
    margin-top:100px;
    width:100%;
    display: flex;
    justify-content: center;
`;
export const ButtonSpan = styled.span`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
export const Button = styled(Link)`
  background: linear-gradient(to top, #45b972, #11998e);
  text-decoration: none;
  color: #fff;
  padding: 10px;
  margin: 20px;
  font-size: 3rem;

  border-radius: 50px;
  outline: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: linear-gradient(to bottom, #11998e, #11998e);
  }
`;
