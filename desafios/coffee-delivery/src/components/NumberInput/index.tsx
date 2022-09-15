import { Minus, Plus } from "phosphor-react";
import React from "react";
import { NumberInputContainer } from "./styles";

export function NumberInput(props: { size?: "sm" | "md" }) {
  const [value, setValue] = React.useState(0);

  function handlePlus() {
    setValue((curr) => curr + 1);
  }

  function handleMinus() {
    setValue((curr) => curr - 1);
  }

  return (
    <NumberInputContainer size={props?.size || "md"}>
      <button onClick={handleMinus}>
        <Minus weight="bold" />
      </button>
      <span>{value}</span>
      <button onClick={handlePlus}>
        <Plus weight="bold" />
      </button>
    </NumberInputContainer>
  );
}
