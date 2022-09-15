import styled from "styled-components";

export const Card = styled.div`
  border-radius: 6px;
  background: ${(props) => props.theme.colors.card};
  padding: 40px;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  background: ${(props) => props.theme.colors.input};
  border: 1px solid ${(props) => props.theme.colors.button};
  padding: 12px;
  font-size: 0.875rem;
  border-radius: 4px;

  &::placeholder {
    color: ${(props) => props.theme.colors.label};
  }

  &:focus,
  &:active {
    outline: 2px solid ${(props) => props.theme.colors.purple};
  }
`;

export const FormHead = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 32px;

  h5 {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.subtitle};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.text};
    margin-top: 2px;
  }
`;

export const PaymentOptionMethod = styled.div`
  label {
    border-radius: 6px;
    background-color: ${(props) => props.theme.colors.button};
    padding: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
    text-transform: uppercase;
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.text};

    svg {
      color: ${(props) => props.theme.colors.purple};
    }
  }

  input {
    position: absolute;
    left: -9999px;
  }

  input:checked + label {
    outline: 1px solid ${(props) => props.theme.colors.purple};
    background: ${(props) => props.theme.colors["purple-light"]};
  }

  input:focus + label {
    outline: 2px solid ${(props) => props.theme.colors.purple};
  }
`;

export const AddressFormGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > div {
    display: flex;
    gap: 16px;
  }
`;
