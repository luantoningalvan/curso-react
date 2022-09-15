import { CartCoffeeCard } from "../CartCoffeeCard";
import { Button, Info, Card } from "./styles";

export function ItemsList() {
  return (
    <Card>
      {Array(2)
        .fill(1)
        .map(() => (
          <CartCoffeeCard />
        ))}

      <div style={{ margin: "24px 0" }}>
        <Info>
          <span>Total de itens</span>
          <span>R$ 23,00</span>
        </Info>

        <Info>
          <span>Entrega</span>
          <span>R$ 23,00</span>
        </Info>

        <Info>
          <span className="total">Total</span>
          <span className="total">R$ 23,00</span>
        </Info>
      </div>

      <Button>Confirmar pedido</Button>
    </Card>
  );
}
