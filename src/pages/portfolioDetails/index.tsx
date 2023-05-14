import { usePortfolioDetails } from "./hooks/usePortfolioDetails";
import PortfolioDetail from "../../components/portfolio/detail";

const PortfolioDetails = () => {
  const { portfolioDetails } = usePortfolioDetails();

  return (
    <div>
      <PortfolioDetail portfolioDetails={portfolioDetails} />
    </div>
  );
};

export default PortfolioDetails;
