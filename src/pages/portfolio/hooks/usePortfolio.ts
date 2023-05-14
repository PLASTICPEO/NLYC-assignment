import { useEffect, useState } from "react";
import { PortfolioItem } from "../../../api/portfolio/portfolio.types";
import { getPortfolioList } from "../../../api/portfolio";
import { portfolioPhotos } from "./porfolioPhotos";

export const usePortfolio = () => {
  const [portfolioList, setPortfolioList] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    getPortfolioList().then((res) => {
      const modifiedPortfolioList = res.data.data.items.map((item) => {
        const photoObj = portfolioPhotos.find((photo) => {
          return photo.slug == item.slug;
        });

        return { ...item, thumb: photoObj!.img };
      });
      setPortfolioList(modifiedPortfolioList);
    });
  }, []);

  return {
    portfolioList,
  };
};
