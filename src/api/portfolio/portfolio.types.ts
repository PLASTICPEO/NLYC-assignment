export interface PortfolioList {
  data: {
    items: PortfolioItem[];
  };
}

export type PortfolioItem = {
  title: string;
  description: string;
  thumb: string;
  slug: string;
};
