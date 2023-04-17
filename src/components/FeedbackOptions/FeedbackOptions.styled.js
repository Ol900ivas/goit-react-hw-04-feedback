import styled from '@emotion/styled';
export const FeedbackWrap = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  min-width: 148px;
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 10px;
  justify-content: center;
  background-color: rgb(230, 193, 154);
  font-size: 24px;
  border: none;
  border-radius: 4px;
  color: inherit;
  box-shadow: 15px 13px 19px -8px rgba(29, 20, 9, 0.85);
  font-weight: bold;
  cursor: pointer;
  text-transform: capitalize;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;
  &:hover {
    color: white;
    background-color: rgb(100, 75, 48);
  }
  &:active {
    box-shadow: 5px 5px 19px -8px rgba(29, 20, 9, 0.95);
  }
`;
