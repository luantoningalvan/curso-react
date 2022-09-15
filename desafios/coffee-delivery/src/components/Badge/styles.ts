import styled from "styled-components";

export const BadgeBox = styled.div`
  position: relative;
`;

export const BadgeContainer = styled.span`
  background-color: ${({ theme }) => theme.colors["yellow-dark"]};
  line-height: 1;
  color: #fff;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -10px;
  right: -10px;
`;
