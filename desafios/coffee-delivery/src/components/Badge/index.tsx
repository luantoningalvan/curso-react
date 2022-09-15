import React from "react";
import { BadgeBox, BadgeContainer } from "./styles";

interface BadgeProps {
  value?: string;
  children: React.ReactNode;
}

export function Badge({ value, children }: BadgeProps) {
  return (
    <BadgeBox>
      {children}
      {value && <BadgeContainer>{value}</BadgeContainer>}
    </BadgeBox>
  );
}
