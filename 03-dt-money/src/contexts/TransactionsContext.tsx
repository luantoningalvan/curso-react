import React, { useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";

export interface Transaction {
  id: string;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface CreateTransactionInput {
  category: string;
  description: string;
  price: number;
  type: "income" | "outcome";
}

interface TransactionsContextType {
  transactions: Transaction[];
  fetchTransaction: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextType>(
  {} as TransactionsContextType
);

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransaction = useCallback(async (query?: string) => {
    const result = await api.get("transactions", {
      params: { q: query, _sort: "createdAt", _order: "desc" },
    });

    setTransactions(result.data);
  }, []);

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { category, description, price, type } = data;

      const response = await api.post("transactions", {
        category,
        description,
        price,
        type,
        createdAt: new Date(),
      });

      setTransactions((state) => [response.data, ...state]);
    },
    []
  );

  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransaction, createTransaction }}
      children={children}
    />
  );
}
