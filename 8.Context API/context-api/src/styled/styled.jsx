import styled from "styled-components";
export const Div = styled.div`
  color: ${(props) => (props.theme === "light" ? "#0a0002" : "#fff")};
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "#0a0002"};
  padding: 500px auto;
  height: 400px;
  justify-content: center;
`;
