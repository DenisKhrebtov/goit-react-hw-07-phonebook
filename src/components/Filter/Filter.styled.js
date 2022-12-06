import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10px;
  border: 1px solid black;
  border-radius: 50px;

  margin-bottom: 20px;
`;

export const Label = styled.label`
  color: tomato;

  display: inline-block;
  text-align: center;
`;
export const Input = styled.input`
  height: 20px;
  font-size: 18px;
  padding-left: 5px;
  margin: 10px;
  border-radius: 3px;
  :hover,
  :focus {
    transform: scale(1.2);
    transition: transform linear 200ms;
  }
`;
