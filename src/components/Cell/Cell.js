import React from "react";
import styled, { keyframes } from "styled-components";

const CellGroup = styled.div`
    display: grid;
    grid-template-columns: 60px auto;
    grid-gap: 25px;
    align-items: center;
`

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;


const CellImage = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 10px;
    background-image: url(${props => props.image});
    background-size: 60px;
    animation: ${rotate} 5s linear infinite;
`

const CellTitle = styled.div`
    font-size: 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 30px 0px;
`

const Cell = props => (
    <CellGroup>
        <CellImage image={props.image} />
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

export default Cell