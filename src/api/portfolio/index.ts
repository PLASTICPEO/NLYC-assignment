import api from "..";
import { PORTFOLIO } from "./portfolio.enum";
import { PortfolioItem, PortfolioList } from "./portfolio.types";

export const getPortfolioList = () => {
  return api.get<PortfolioList>(PORTFOLIO.list);
};

export const getPortfolio = (slug: string) => {
  return api.get<{ data: PortfolioItem }>(`${PORTFOLIO.item}/${slug}`);
};
