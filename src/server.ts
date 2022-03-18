import { createServer } from "miragejs";
import { ITransactionsItems } from "./utils/types";

export function runServer() {
  const server = createServer({
    routes() {
      this.namespace = "api";

      this.get("/transactions", () => {
        const today = new Date().toLocaleDateString();

        const tableDataArr: ITransactionsItems[] = [
          {
            id: 1,
            title: "Desenvolvimento de Site",
            price: 1099.99,
            isPositive: true,
            category: "Venda",
            createdAt: today,
          },
          {
            id: 2,
            title: "Desenvolvimento de Site",
            price: 50,
            isPositive: false,
            category: "Compra",
            createdAt: today,
          },
        ];

        return tableDataArr;
      });
    },
  });

  return server;
}
