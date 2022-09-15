import { Trash } from "phosphor-react";
import { Container } from "../../components/Container";
import { NumberInput } from "../../components/NumberInput";
import { CartCoffeeCard } from "./components/CartCoffeeCard";
import { Form } from "./components/Form";
import { ItemsList } from "./components/ItemsList";
import { Grid, SectionTitle } from "./styles";

export function Cart() {
  return (
    <Container>
      <Grid>
        <div>
          <SectionTitle>Complete seu pedido</SectionTitle>
          <Form />
        </div>

        <div>
          <SectionTitle>Cafés selecionados</SectionTitle>

          <ItemsList />
        </div>
      </Grid>
    </Container>
  );
}
