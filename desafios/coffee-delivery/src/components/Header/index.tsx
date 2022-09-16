import { AddressButton, CartButton, HeaderContainer, Right } from "./styles";
import { ShoppingCart, MapPin } from "phosphor-react";
import { Badge } from "../Badge";
import { Container } from "../Container";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <Container>
        <Link to="/">
          <img src="/logo.svg" alt="" />
        </Link>

        <Right>
          <AddressButton>
            <MapPin weight="fill" size={22} />
            Porto Alegre, RS
          </AddressButton>
          <Badge value="3">
            <CartButton as={Link} to="/cart">
              <ShoppingCart weight="fill" size={22} />
            </CartButton>
          </Badge>
        </Right>
      </Container>
    </HeaderContainer>
  );
}
