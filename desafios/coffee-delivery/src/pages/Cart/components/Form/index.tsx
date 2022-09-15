import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useTheme } from "styled-components";
import {
  Card,
  FormHead,
  AddressFormGrid,
  Input,
  PaymentOptionMethod,
} from "./styles";

export function Form() {
  const theme = useTheme();

  return (
    <form action="">
      <Card>
        <FormHead>
          <MapPinLine size={22} color={theme.colors["yellow-dark"]} />
          <div>
            <h5>Endereço de entrega</h5>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </FormHead>

        <AddressFormGrid>
          <div>
            <Input type="text" placeholder="CEP" style={{ width: 200 }} />
          </div>

          <div>
            <Input type="text" placeholder="Rua" style={{ width: "100%" }} />
          </div>

          <div>
            <Input type="text" placeholder="Número" style={{ width: 200 }} />
            <Input type="text" placeholder="Complemento" style={{ flex: 1 }} />
          </div>

          <div>
            <Input type="text" placeholder="Bairro" style={{ width: 200 }} />
            <Input type="text" placeholder="Cidade" style={{ flex: 1 }} />
            <Input type="text" placeholder="UF" style={{ width: 60 }} />
          </div>
        </AddressFormGrid>
      </Card>

      <Card>
        <FormHead>
          <CurrencyDollar size={22} color={theme.colors.purple} />
          <div>
            <h5>Pagamento</h5>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </FormHead>

        <div style={{ display: "flex", gap: 12 }}>
          <PaymentOptionMethod>
            <input type="radio" name="payment" id="credit" />

            <label htmlFor="credit">
              <CreditCard size={16} />
              Cartão de Crédito
            </label>
          </PaymentOptionMethod>

          <PaymentOptionMethod>
            <input type="radio" name="payment" id="debit" />

            <label htmlFor="debit">
              <Bank size={16} />
              Cartão de Débito
            </label>
          </PaymentOptionMethod>

          <PaymentOptionMethod>
            <input type="radio" name="payment" id="cash" />

            <label htmlFor="cash">
              <Money size={16} />
              Dinheiro
            </label>
          </PaymentOptionMethod>
        </div>
      </Card>
    </form>
  );
}
