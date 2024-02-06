import styled from "styled-components";
export const Button = styled.button`
  color: ${(props) => (props.theme === "light" ? "#fe7e6d" : "#feece9")};
  background: ${(props) => (props.theme === "light" ? "#feece9" : "#fe7e6d")};
  padding: 20px 40px;
  border: 1px solid pink;
  border-radius: 8px;
  font-size: 15px;
  &:hover {
    background-color: yellowgreen;
    color: black;
    transition: ease-in-out 0.9s;
  }
`;
// light #eece9 dark#fe7e6d
export const Div = styled.div`
  display: flex;
  justify-content: center;
  background-color: #d8d2d2;
  width: 280px;
  height: 280px;
  margin: auto;
  margin-bottom: 12px;
  & > p {
    color: green;
  }
  & > p:hover {
    color: blue;
  }
`;
