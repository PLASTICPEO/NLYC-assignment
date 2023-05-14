import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPortfolio } from "../../../api/portfolio";
import { PortfolioItem } from "../../../api/portfolio/portfolio.types";
import { portfolioPhotos } from "../../portfolio/hooks/porfolioPhotos";

export const usePortfolioDetails = () => {
  const { slug } = useParams();
  const [portfolioDetails, setPortfolioDetails] = useState<PortfolioItem>({
    title: "",
    description: "",
    thumb: "",
    slug: "",
  });

  useEffect(() => {
    getPortfolio(slug!).then((res) => {
      const portfolioPhoto = portfolioPhotos.find((photo) => {
        return photo.slug == res.data.data.slug;
      });

      setPortfolioDetails({ ...res.data.data, thumb: portfolioPhoto!.img });
    });
  }, [slug]);

  return { portfolioDetails };
};
