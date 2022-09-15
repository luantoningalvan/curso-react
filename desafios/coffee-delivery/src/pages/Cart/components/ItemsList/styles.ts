import styled from "styled-components";

export const Card = styled.div`
  background: ${(props) => props.theme.colors.card};
  padding: 40px;
  border-radius: 6px 44px;
`;

export const Button = styled.button`
  padding: 12px;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.yellow};
  color: #fff;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  width: 100%;
  height: 46px;
  font-weight: 700;
  font-size: 0.875rem;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text};
  line-height: 1.3;

  span:first-child {
    font-size: 0.875rem;
  }

  span:last-child {
    font-size: 1rem;
  }

  span.total {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.subtitle};
  }

  & + & {
    margin-top: 12px;
  }
`;
