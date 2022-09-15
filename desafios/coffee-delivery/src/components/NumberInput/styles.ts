import styled from "styled-components";

type NumberInputContainerProps = { size?: "sm" | "md" };

export const NumberInputContainer = styled.div<NumberInputContainerProps>`
  display: flex;
  gap: 4px;
  align-items: center;
  background: ${(props) => props.theme.colors.button};
  border-radius: 6px;
  padding: 8px;
  font-size: 1rem;
  height: ${(props) => (props.size === "sm" ? "32px" : "38px")};

  span {
    width: 20px;
    text-align: center;
  }

  button {
    appearance: none;
    background: transparent;
    border: none;
    color: ${(props) => props.theme.colors.purple};
    cursor: pointer;
  }
`;
