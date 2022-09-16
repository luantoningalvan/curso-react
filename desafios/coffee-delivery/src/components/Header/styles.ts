import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: rgba(250, 250, 250, 0.7);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 10;

  > div {
    display: flex;
    height: 104px;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Right = styled.div`
  display: flex;
  gap: 12px;
`;

const ButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 6px;
  border: none;
  font-size: 0.875rem;
  gap: 8px;
  cursor: pointer;
`;

export const AddressButton = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.colors["purple-light"]};
  color: ${({ theme }) => theme.colors["purple-dark"]};
`;

export const CartButton = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.colors["yellow-light"]};
  color: ${({ theme }) => theme.colors["yellow-dark"]};
`;
