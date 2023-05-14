import PortfolioList from "../../components/portfolio/list";
import { usePortfolio } from "./hooks/usePortfolio";

const Portfolio = () => {
  const { portfolioList } = usePortfolio();

  return (
    <div className="h-screen">
      <PortfolioList portfolioList={portfolioList} />
    </div>
  );
};

export default Portfolio;
