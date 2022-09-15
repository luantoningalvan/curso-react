import { Container } from "../../components/Container";
import { CoffeeList } from "./components/CoffeeList";
import { Hero } from "./components/Hero";

export function Home() {
  return (
    <>
      <Hero />
      <Container>
        <CoffeeList />
      </Container>
    </>
  );
}
