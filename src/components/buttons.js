import React from 'react';
import styled from 'styled-components';

const PrimaryButtonContainer = styled.div`
  grid-area: select;
  display: flex;
  justify-content: center;
`;

const PrimaryButtonElement = styled.button`
  height: 32px;
  width: 110px;
  border: none;
  margin-top: 15px;
  font-size: 22px;
  font-family: Overwatch;
  letter-spacing: 2px;
  color: #fff;
  background: #b47900;
  :hover {
    background: #df9600;
  }
`;

const PrimaryButton = ({ children, ...props }) =>
  <PrimaryButtonContainer>
    <PrimaryButtonElement {...props}>
      {children}
    </PrimaryButtonElement>
  </PrimaryButtonContainer>;

export { PrimaryButton };
