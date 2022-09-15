import React from "react";
import { ContainerStyle } from "./styles";

export function Container({ children }: { children: React.ReactNode }) {
  return <ContainerStyle>{children}</ContainerStyle>;
}
