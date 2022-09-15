import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    height: 120px;
    width: 120px;
    position: relative;
    z-index: 1;
  }

  > div {
    background: #f3f2f2;
    border-radius: 6px 36px;
    margin-top: -60px;
    padding: 72px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
      font-family: "Baloo 2";
      font-size: 1.25rem;
      color: ${(props) => props.theme.colors.subtitle};
      margin-top: 1rem;
      line-height: 1.625rem;
    }

    p {
      text-align: center;
      color: ${(props) => props.theme.colors.label};
      font-size: 0.875rem;
      font-weight: 400;
      margin-top: 0.5rem;
      line-height: 1.3;
    }

    div.tags {
      display: flex;
      gap: 0.25rem;
    }

    footer {
      display: flex;
      align-items: center;
      width: 100%;
      gap: 8px;
      margin-top: 2rem;

      .price {
        flex: 1;
      }

      .price-value {
        font-family: "Baloo 2";
        font-size: 1.5rem;
        color: ${(props) => props.theme.colors.text};
        font-weight: 800;
      }

      .currency-symbol {
        font-size: 0.875rem;
        color: ${(props) => props.theme.colors.text};
        font-weight: 400;
      }
    }
  }
`;

export const Tag = styled.span`
  background-color: ${(props) => props.theme.colors["yellow-light"]};
  color: ${(props) => props.theme.colors["yellow-dark"]};
  padding: 0.25rem 0.5rem;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.625rem;
  border-radius: 99px;
`;

export const AddToCartButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors["purple-dark"]};
  color: #fff;
`;
