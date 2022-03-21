export interface ISummaryItems {
  type: string;
  title: string;
  iconSrc: string;
  value: number;
}

export interface ITransactionsItems {
  title: string;
  price: number;
  isPositive: boolean;
  category: string;
  createdAt?: Date;
}
