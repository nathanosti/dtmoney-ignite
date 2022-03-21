import dayjs from "dayjs";

export const formatDate = (date: string) => {
  return dayjs(date).format("DD/MM/YYYY");
};

export const formatCurrency = (value: number) => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
