import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const HeroContainer = styled.div`
  width: 100%;
  background: url("header-background.png");
  background-size: contain;
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 544px;

  h2 {
    font-family: "Baloo 2";
    font-size: 3rem;
    line-height: 3.9rem;
    color: ${(props) => props.theme.colors.title};
  }

  p {
    font-size: 1.25rem;
    margin-top: 1rem;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 4rem;
  }

  ul li {
    display: flex;
    align-items: center;
    font-size: 1rem;
    gap: 12px;
    list-style: none;
  }
`;

export const FeatureIcon = styled.span<{ color: keyof typeof theme.colors }>`
  background-color: ${({ theme, color }) => theme.colors[color]};
  color: #fff;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;
