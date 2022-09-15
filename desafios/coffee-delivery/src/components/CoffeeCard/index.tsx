import { ShoppingCart } from "phosphor-react";
import { NumberInput } from "../NumberInput";
import { CoffeeCardContainer, Tag, AddToCartButton } from "./styles";

type Coffee = {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  price: number;
};

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={`coffees/${coffee.image}`} alt="" />
      <div>
        <div className="tags">
          {coffee.tags.map((tag) => (
            <Tag key={`tag-${tag}`}>{tag}</Tag>
          ))}
        </div>
        <h4>{coffee.name}</h4>
        <p>{coffee.description}</p>

        <footer>
          <div className="price">
            <span className="currency-symbol">R$ </span>
            <span className="price-value">
              {Intl.NumberFormat("pt-BR", {
                style: "decimal",
                minimumFractionDigits: 2,
              }).format(coffee.price / 100)}
            </span>
          </div>

          <NumberInput />
          <AddToCartButton>
            <ShoppingCart size={22} weight="fill" />
          </AddToCartButton>
        </footer>
      </div>
    </CoffeeCardContainer>
  );
}
