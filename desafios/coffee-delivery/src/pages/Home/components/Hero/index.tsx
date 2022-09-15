import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Container } from "../../../../components/Container";
import { FeatureIcon, HeroContainer, HeroContent } from "./styles";

export function Hero() {
  return (
    <HeroContainer>
      <Container>
        <HeroContent>
          <div>
            <div>
              <h2>
                Encontre o café perfeito
                <br />
                para qualquer hora do dia
              </h2>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a<br />
                qualquer hora
              </p>
            </div>

            <ul>
              <li>
                <FeatureIcon color="yellow-dark">
                  <ShoppingCart weight="fill" size={16} />
                </FeatureIcon>
                <span>Compra simples e segura</span>
              </li>
              <li>
                <FeatureIcon color="text">
                  <Package weight="fill" size={16} />
                </FeatureIcon>
                <span>Embalagem mantém o café intacto</span>
              </li>
              <li>
                <FeatureIcon color="yellow">
                  <Timer weight="fill" size={16} />
                </FeatureIcon>
                <span>Entrega rápida e rastreada</span>
              </li>
              <li>
                <FeatureIcon color="purple">
                  <Coffee weight="fill" size={16} />
                </FeatureIcon>
                <span>O café chega fresquinho até você</span>
              </li>
            </ul>
          </div>
          <img src="header-coffee-cup.png" alt="" />
        </HeroContent>
      </Container>
    </HeroContainer>
  );
}
