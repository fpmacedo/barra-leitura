import styled from 'styled-components';



export const Texto = styled.p`
  max-width: 50px;
  margin-top: 50px;
  align-items: center;
  
`;

export const Body = styled.div`

  display: flex;
  align-items: center;  
  justify-content: center;
  margin-bottom: 1000px;
  
`;

export const Bar = styled.div`

  height: 4px;
  width: ${props => props.width || "0px"};
  background-color: #6633cc;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: 1s;
`;
