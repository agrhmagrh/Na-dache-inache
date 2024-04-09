export interface ICardsWrapper {
  widthParent?: number;
}
export interface IOffersCard extends ICardsWrapper {
  link: string;
  title: string;
  columns: number;
  src: string;
}

export type IExamplesCard = {
  src: string;
  title: string;
  link: string;
  direction?: string;
};
