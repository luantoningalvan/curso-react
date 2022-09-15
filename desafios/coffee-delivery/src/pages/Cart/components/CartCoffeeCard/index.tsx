import { Trash } from "phosphor-react";
import { NumberInput } from "../../../../components/NumberInput";
import { CartCoffeeCardContainer, RemoveButton } from "./styles";

export function CartCoffeeCard() {
  return (
    <CartCoffeeCardContainer>
      <div className="coffee-content">
        <img src="/coffees/americano.png" alt="" />
        <div className="coffee-info">
          <h5>Expresso tradicional</h5>
          <div>
            <NumberInput size="sm" />
            <RemoveButton>
              <Trash />
              Remover
            </RemoveButton>
          </div>
        </div>
        <span className="price">R$ 9.90</span>
      </div>
      <div className="divider" />
    </CartCoffeeCardContainer>
  );
}
