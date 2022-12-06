import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
`;
export const ContactName = styled.p`
  color: yellow;
`;

export const ContactNumber = styled.span`
  margin-left: 10px;
`;

export const DeleteButton = styled.button`
  border-radius: 15px;
  /* width: 100px; */
  height: 30px;
  color: red;
  margin-left: 10px;
  :hover,
  :focus {
    background-color: red;
    color: white;
    transform: scale(1.1);
  }
`;
