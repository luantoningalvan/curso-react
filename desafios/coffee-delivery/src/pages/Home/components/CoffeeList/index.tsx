import { CoffeeCard } from "../../../../components/CoffeeCard";
import { coffees } from "./static";
import { Grid, Title } from "./styles";

export function CoffeeList() {
  return (
    <section>
      <Title>Nossos cafés</Title>

      <Grid>
        {coffees.map((coffee) => (
          <CoffeeCard coffee={coffee} key={coffee.id} />
        ))}
      </Grid>
    </section>
  );
}
