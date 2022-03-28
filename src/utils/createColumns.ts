import { CardType, ColumnsType } from "../types";

export const createColumns = (cards: CardType[]): ColumnsType => {
  return {
    "0": {
      name: "Past Launches",
      items: cards.slice(5, 8),
    },
    "1": {
      name: "Launches",
      items: cards.slice(0, 5),
    },
    "2": {
      name: "My Launches",
      items: cards.slice(8, 10),
    },
  };
};
