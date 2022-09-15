import styled from "styled-components";

export const CartCoffeeCardContainer = styled.div`
  .coffee-content {
    display: flex;
    align-items: flex-start;
    padding: 24px 0;

    img {
      height: 64px;
      width: 64px;
      margin-right: 20px;
    }

    .price {
      font-size: 1rem;
      color: ${(props) => props.theme.colors.text};
      font-weight: 700;
    }

    .coffee-info {
      flex: 1;

      h5 {
        font-size: 1rem;
        color: ${(props) => props.theme.colors.subtitle};
      }

      > div {
        display: flex;
        height: 32px;
        gap: 8px;
        margin-top: 8px;
      }
    }
  }

  .divider {
    height: 1px;
    width: 100%;
    background: ${(props) => props.theme.colors.button};
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  gap: 4px;
  align-items: center;
  background: ${(props) => props.theme.colors.button};
  border-radius: 6px;
  padding: 8px;
  font-size: 1rem;
  height: 32px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.text};

  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`;
